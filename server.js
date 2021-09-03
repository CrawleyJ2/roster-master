// import statements
const inquirer = require ('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');
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
    if (res.choices === 'View all departments') {
      getAllDept();
    // else if all roles, get all roles
    } else if (res.choices === 'View all roles') {
      getAllRole();
    // else if all employees, get all employees
    } else if (res.choices === 'View all employees') {
      getAllEmp();
    // else if add dept, function to add dept
    } else if (res.choices === 'Add a department') {
      addDept();
    // else if add role, function to add role
    } else if (res.choices === 'Add a role') {
      addRole();
    // else if add emp, function to add emp
    } else if (res.choices === 'Add an employee') {
      addEmp();
    // else if update role, function to update role
    } else if (res.choices === 'Update employee role') {
      updateEmpRole();
    // else exit process, console log a farewell
    } else {
      console.log('Have a nice day! Exiting now...');
      return process.exit();
    }
  });
};

// get all depts()

// get all roles()

// get all empy()

// add dept()

// add role()

// add emp()

// update role()