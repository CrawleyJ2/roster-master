// import statements
const inquirer = require ('inquirer');
const cTable = require('console.table');
// database connection

// inquirer prompt to start process
const start = () => {
  inquirer.prompt({
    type: 'list',
    name: 'start menu',
    message: 'What would you like to do?',
    choices: [
      'View all departments', 
      'View all roles', 
      'View all employees', 
      'Add a department', 
      'Add a role', 
      'Add an employee', 
      'Update employee role', 
      'Quit']
  }).then(res => {
    // if all depts, function to get all depts

    // else if all roles, get all roles

    // else if all employees, get all employees

    // else if add dept, function to add dept

    // else if add role, function to add role

    // else if add emp, function to add emp

    // else if update role, function to update role

    // else exit process, console log a farewell
  });
};
// function to display search results

// get all depts()

// get all roles()

// get all empy()

// add dept()

// add role()

// add emp()

// update role()