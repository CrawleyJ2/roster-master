// import statements
const inquirer = require ('inquirer');
const cTable = require('console.table');
const db = require('./db/connection');

// database connection
db.connect(err => {
  if (err) throw err;
  console.log('Roster Master connected');
  start();
});

// inquirer prompt to start process
const start = () => {
  inquirer.prompt({
    type: 'list',
    name: 'starter',
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
    if (res.starter === 'View all departments') {
      getAllDept();
    // else if all roles, get all roles
    } else if (res.starter === 'View all roles') {
      getAllRole();
    // else if all employees, get all employees
    } else if (res.starter === 'View all employees') {
      getAllEmp();
    // else if add dept, function to add dept
    } else if (res.starter === 'Add a department') {
      addDept();
    // else if add role, function to add role
    } else if (res.starter === 'Add a role') {
      addRole();
    // else if add emp, function to add emp
    } else if (res.starter === 'Add an employee') {
      addEmp();
    // else if update role, function to update role
    } else if (res.starter === 'Update employee role') {
      updateEmpRole();
    // else exit process, console log a farewell
    } else {
      console.log('Have a nice day! Exiting now...');
      return process.exit();
    }
  });
};

// get all depts()
function getAllDept() {
  db.query('SELECT * FROM departments', function (err, results) {
    console.table(results);
    if (err) throw (err);
    start();
  });
};
// get all roles()
function getAllRole() {
  db.query('SELECT * FROM roles', function (err, results) {
    console.table(results);
    if (err) throw (err);
    start();
  });
};
// get all empy()
function getAllEmp() {
  db.query('SELECT * FROM employees', function (err, results) {
    console.table(results);
    if (err) throw (err);
    start();
  });
};
// add dept()
function addDept() {
  inquirer.prompt(
    {
      type: 'input',
      name: 'department_name',
      message: 'What is the new department name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Department name cannot be empty!');
          return false;
        }
      }
    }
  ).then(data => {
    const params = data.department_name;
    db.query('INSERT INTO departments (department_name) values (?)', params, (err, results) => {
      if (err) throw (err);
      console.log('Department has been added.');
      start();
    });
  });
};
// add role()
function addRole() {
  db.query('SELECT * FROM departments', (err, results) => {
    if (err) throw (err);
    const department_name = results.map(({ department_name, department_id }) => ({
      value: department_id,
      name: `${department_name}`
    }));
    console.log(department_name);
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is title of the role you are adding?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Role cannot be empty!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'salary',
        message: 'What is the pay rate for this role?',
        validate: salaryInput => {
          if (salaryInput) {
            return true;
          } else {
            console.log('Salary cannot be empty!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'department',
        message: 'Which department does this role fall under?',
        choices: department_name
      }
    ]).then(data => {
      const params = [
        data.title,
        data.salary,
        data.department
      ];
      db.query('INSERT INTO roles (title, salary, department_id) values (?,?,?)', params, (err, results) => {
        if (err) throw (err);
        console.log('Role has been added');
        start();
      });
    });
  });
};
// add emp()
function addEmp() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the first name of the employee?',
      validate: first_nameInput => {
        if (first_nameInput) {
          return true;
        } else {
          console.log('First name cannot be empty!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the last name of the employee?',
      validate: last_nameInput => {
        if (last_nameInput) {
          return true;
        } else {
          console.log('Last name cannot be empty!');
          return false;
        }
      }
    },
    // role 

    // manager
  ])
};
// update role()
function updateEmpRole() {
  inquirer.prompt([
    // find employee

    // enter new role
  ])
  // .then to update db with employee's new role
  // start();
};