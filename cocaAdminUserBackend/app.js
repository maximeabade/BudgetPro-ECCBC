const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors'); 
const app = express();
const port = 5174;


// Middleware pour parser le corps des requêtes au format JSON
app.use(bodyParser.json());
app.use(cors());

/************************************************/
/*         
/*nnn     nnnnnn  nnnnnnn  nnnnnnnn nnn  nnn 
  nnn     nn  nn  nn          nn    nnnn nnn
  nnn     nn  nn  nn  nnnn    nn    nnnnnnnn
  nnn     nn  nn  nn   nn     nn    nnn nnnn
  nnnnnn  nnnnnn  nnnnnnn  nnnnnnnn nnn  nnn

************************************************/

// Fonction pour lire les utilisateurs à partir du fichier JSON
function readUsersFromDatabase() {
  try {
    const rawData = fs.readFileSync('./login/users.json');
    const usersData = JSON.parse(rawData);
    return usersData;
  } catch (error) {
    console.error('Error reading users from the database:', error);
    return [];
  }
}
// Endpoint pour vérifier l'email et le mot de passe
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = readUsersFromDatabase();

  const foundUser = users.find((user) => user.mail === email && user.password === password);

  if (!foundUser) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  // Vérification réussie, vous pouvez effectuer des opérations supplémentaires ici.

  return res.status(200).json({ message: 'Login successful.' });
  console.log("Login successful for " + email);
});


app.get('/userStatus', (req, res) => {
  const email = req.query.email; // Récupère le paramètre 'email' de l'URL
  const password = req.query.password; // Récupère le paramètre 'password' de l'URL
  const users = readUsersFromDatabase();
  const foundUser = users.find((user) => user.mail === email && user.password === password);

  if (!foundUser) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  } else {
    console.clear();
    console.log("Login successful for " + email);
    return res.status(200).json({ foundUser });
  }
});


/************************************************/
/*         
/*nnn     nnnnnn  nnnnnnn  nnnnnn  nn   nn nnnnnnnn
  nnn     nn  nn  nn       nn  nn  nn   nn    nn
  nnn     nn  nn  nn  nnnn nn  nn  nn   nn    nn
  nnn     nn  nn  nn   nn  nn  nn  nn   nn    nn
  nnnnnn  nnnnnn  nnnnnnn  nnnnnn  nnnnnnn    nn

************************************************/

// Endpoint pour la déconnexion (logout)
app.post('/logout', (req, res) => {
  // Ici, vous pouvez ajouter la logique pour effectuer la déconnexion.
  // Par exemple, supprimer les informations d'identification de l'utilisateur connecté ou effectuer d'autres opérations de nettoyage.

  // Pour cet exemple, nous allons simplement renvoyer une réponse indiquant que la déconnexion a réussi.
  res.status(302).header('Location', 'http://localhost:5173').end(); //redirection a la page d'acceuil
});




/*
nnnnnnnn   nnnnnnnn    nnn   nnn   nnnnnnn
nnnnnnnn   nnn    nn   nnn   nnn   nnn  nnn
nnn        nnn    nn   nnn   nnn   nnn   nnn
nnn        nnnnnnnn    nnn   nnn   nnn    nnn 
nnn        nnn    nn   nnn   nnn   nnn     nn
nnn        nnn    nn   nnn   nnn   nnn    nnn
nnnnnnnn   nnn    nn   nnn   nnn   nnn   nnn 
nnnnnnnn   nnn    nn    nnnnnnn    nnnnnnnn
*/


/******************************CREATE - CREATE - CREATE - CREATE - CREATE - CREATE - CREATE - CREATE - CREATE *************************/
app.post('/budget/create', (req, res) => {
  let newBudgetEntry = req.body; // The form data will be sent in the request body
  let budgetFilePath = './bdd/budget.json';
  try {
    // Read existing data from budget.json, if available
    let existingBudgetEntries = [];
    if (fs.existsSync(budgetFilePath)) {
      const rawData = fs.readFileSync(budgetFilePath);
      existingBudgetEntries = JSON.parse(rawData);
    } 
    //Add an id to the new budget entry
    //let s add a verif to make sure projectCode in req.body is not in the file yet
    for(let i = 0; i < existingBudgetEntries.length; i++){
      if(existingBudgetEntries[i].projectCode == newBudgetEntry.projectCode){
        console.error("Project code already exists.");
        return res.status(400).json({ error: 'Project code already exists.' });
        break;
      }
    }
    if(newBudgetEntry.projectCode !== "" && newBudgetEntry.projectCode !== undefined && newBudgetEntry.projectCode !== null && newBudgetEntry.projectCode !== " "){
      newBudgetEntry.id = newBudgetEntry.projectCode;

      // Add the new budget entry to the existing data
      existingBudgetEntries.push(newBudgetEntry);

      // Save the updated data back to budget.json
      fs.writeFileSync(budgetFilePath, JSON.stringify(existingBudgetEntries, null, 2));

      // Return a success message and the newly created budget entry
      res.status(201).json({ message: 'Budget entry created successfully', budgetEntry: newBudgetEntry });
    } else {
      console.error("Project code is empty.");
      return res.status(400).json({ error: 'Project code is empty.' });
    }
  } catch (error) {
    console.error("Error creating budget entry:", error.message);
    // Handle error here
    res.status(500).json({ error: 'Failed to create budget entry.' });
  }
});

/***************************** READALL - READALL- READALL- READALL- READALL- READALL- READALL- READALL - READALL **************************/
app.get('/budget/readAll', (req, res) => {
  let budgetFilePath = './bdd/budget.json';
  try {
    // Read existing data from budget.json, if available
    let existingBudgetEntries = [];
    if (fs.existsSync(budgetFilePath)) {
      const rawData = fs.readFileSync(budgetFilePath);
      existingBudgetEntries = JSON.parse(rawData);
    }

    // Return the existing budget entries
    return res.status(200).json(existingBudgetEntries);
  } catch (error) {
    console.error("Error reading budget entries:", error.message);
    // Handle error here
    return res.status(500).json({ error: 'Failed to read budget entries.' });
  }
});

/***************************** READ - READ- READ- READ- READ- READ- READ- READ- READ- READ- READ- READ- READ **************************/
app.get('/budget/readOne/:id', (req, res) => {
  let budgetFilePath = './bdd/budget.json';
  let existingBudgetEntries;
  try {
    if (fs.existsSync(budgetFilePath)) {
      let rawData = fs.readFileSync(budgetFilePath);
      existingBudgetEntries = JSON.parse(rawData);
      
      let foundEntry = false;
      for (let i = 0; i < existingBudgetEntries.length; i++) {
        if (existingBudgetEntries[i].id == req.params.id) {
          foundEntry = true;
          return res.status(200).json({ budgetEntry: existingBudgetEntries[i] });
        }
      }
      
      if (!foundEntry) {
        console.error("Budget entry not found.");
        return res.status(404).json({ error: 'Budget entry not found.' });
      }
    } else {
      console.error("Budget file not found.");
      return res.status(404).json({ error: 'Budget file not found.' });
    }
  } catch (error) {
    console.error("Error reading budget entry:", error.message);
    res.status(500).json({ error: 'Failed to read budget entry.' });
  }
});

/***************************** UPDATE - UPDATE - UPDATE - UPDATE - UPDATE - UPDATE - UPDATE - UPDATE - UPDATE *************************/
app.put('/budget/updateOne/:id', (req, res) => { 
  let budgetFilePath = './bdd/budget.json';
  try {
    // Read existing data from budget.json, if available
    let existingBudgetEntries = [];
    if (fs.existsSync(budgetFilePath)) {
      let rawData = fs.readFileSync(budgetFilePath);
      existingBudgetEntries = JSON.parse(rawData);
    }
    // Find the budget entry with the specified id
    for (let i = 0; i < existingBudgetEntries.length; i++) {
      if (existingBudgetEntries[i].projectCode === req.params.id) { // Use projectCode
          existingBudgetEntries[i] = req.body;
          break; // No need to continue iterating
      }
    }
    // Save the updated data back to budget.json
    fs.writeFileSync(budgetFilePath, JSON.stringify(existingBudgetEntries, null, 2));
    // ...
    // Return a success message and the newly created budget entry
    res.status(201).json({ message: 'Budget entry updated successfully' });
  } catch (error) {
    console.error("Error updating budget entry:", error.message);
    // Handle error here
    res.status(500).json({ error: 'Failed to update budget entry.' });
  }
});



/***************************** DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE - DELETE *************************/
app.put('/budget/deleteOne/:id', (req, res) => {
  let budgetFilePath = './bdd/budget.json';
  try {
      let existingBudgetEntries = [];
      if (fs.existsSync(budgetFilePath)) {
          let rawData = fs.readFileSync(budgetFilePath);
          existingBudgetEntries = JSON.parse(rawData);
          console.log(existingBudgetEntries);
      }
      
      let index = existingBudgetEntries.findIndex(entry => entry.id === req.params.id);
      console.log(index);
      if (index !== -1) {
          existingBudgetEntries.splice(index, 1);
          fs.writeFileSync(budgetFilePath, JSON.stringify(existingBudgetEntries, null, 2));
          res.status(200).json({ message: 'Budget entry deleted successfully' });
      } else {
          console.error("Budget entry not found.");
          res.status(404).json({ error: 'Budget entry not found.' });
      }
  } catch (error) {
      console.error("Error deleting budget entry:", error.message);
      res.status(500).json({ error: 'Failed to delete budget entry.' });
  }
});





/*
nnnnnn  nnnnnnnnnnn      nn      nnnnnnnn  nnnnnnnnnnn      
nn           nn         nnnn     nnn    nn     nn       
nn           nn       nnn  nnn   nnn    nn     nn       
nnnnnn       nn      nnn    nnn  nnnnnnnn      nn       
    nn       nn     nnnnnnnnnnnn nnn    nn     nn        
    nn       nn     nnn      nnn nnn    nn     nn       
nnnnnn       nn     nnn      nnn nnn    nn     nn       
*/
// Démarrer le serveur
app.listen(port, () => {
  console.clear();
  console.log(`Server is running on http://localhost:${port}`);
});
