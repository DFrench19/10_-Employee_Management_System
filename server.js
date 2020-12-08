const { prompt } = require("inquire");
const db = require("./db");
const title = require("Title");
require("console.table");

init();

function init() {
    const title = title({ name: "Employee Manager" }).render();
    console.log(title);

    prompts();
}

const { choice } = prompt([
    {
        type: "list",
        name: "choice",
        message: "What would you like to do",
        choices: [
            {
                name: "View All Employees",
                value: "View_Employee"
            },
            {
                name: "View All Employees By Department",
                value: "View_Employee_By_Department"
            },
            {
                name: "View All Employees By Manager",
                value: "View_Employee_By_Manager"
            },
            {
                name: "Add Employee",
                value: "Add_Employee"
            },
            {
                name: "Remove Employee",
                value: "Remove_Employee"
            },
            {
                name: "Update Employee Role",
                value: "Update_Employee_Role"
            },
            {
                name: "Update Employee Manager",
                value: "Update_Employee_Manager"
            },
            {
                name: "View All Roles",
                value: "View_Roles"
            },
            {
                name: "Add Role",
                value: "Add_Role"
            },
            {
                name: "Remove Role",
                value: "Remove_Role"
            },
            {
                name: "View All Departments",
                value: "View_Departments"
            },
            {
                name: "Add Department",
                value: "Add_Department"
            },
            {
                name: "Remove Department",
                value: "Remove_Department"
            },
            {
                name: "Quit",
                value: "Quit"
            }
        ]
    }
])

switch (choice) {
    case "View_Employee":
      return viewEmployees();
    case "View_Employee_By_Department":
      return viewEmployeesByDepartment();
    case "View_Employee_By_Manager":
      return viewEmployeesByManager();
    case "Add_Employee":
      return addEmployee();
    case "Remove_Employee":
      return removeEmployee();
    case "Update_Employee_Role":
      return updateEmployeeRole();
    case "Update_Employee_Manager":
      return updateEmployeeManager();
    case  "View_Departments":
      return viewDepartments();
    case "Add_Department":
      return addDepartment();
    case "Remove_Department":
      return removeDepartment();
    case "View_Roles":
      return viewRoles();
    case "Add_Role":
      return addRole();
    case "Remove_Role":
      return removeRole();
    default:
      return quit();

  }
