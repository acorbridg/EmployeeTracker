const inquirer = require('inquirer');
const tables = require('console.table')
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'department_db',
        multipleStatements: true
    }
)

const questions = [
    {
        type: "list",
        message: "make a selection",
        choices: ["view all departments", "view all employees", "view all roles", "add a department", "add an employee", "add a role", "update an employee role"],
        name: "firstQuestion"
    }
]

const viewDepartments = () => {
    db.query(
        'SELECT * FROM department',
        function (err, results, fields) {
            console.table(results)
            main();
        }
    )
}

const viewEmployee = () => {
    db.query(
        'SELECT * FROM employee JOIN emp_role on employee.role_id = emp_role.id',
        function (err, results, fields) {
            console.table(results)
            main();
        }
    )
}

const viewRoles = () => {
    db.query(
        'SELECT * FROM emp_role',
        function (err, results, fields) {
            console.table(results)
            main();
        }
    )
}

const addDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the new department?",
            name: "department"
        }

    ]).then((answers) => {

        db.query(
            'INSERT INTO department (department_name) VALUES (?)',
            [answers.department],
            function (err, results, fields) {

                main();
            }
        )
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the new employee?",
            name: "first"
        },
        {
            type: "input",
            message: "What is the last name of the new employee?",
            name: "last"
        },
        {
            type: "input",
            message: "What is the role id of the new employee?",
            name: "roleid"
        },
        {
            type: "input",
            message: "Who is the manager id of the new employee?",
            name: "managerid"
        }

    ]).then((answers) => {

        db.query(
            'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
            [answers.first, answers.last, answers.roleid, answers.managerid],
            function (err, results, fields) {

                main();
            }
        )
    })
}
const addRole = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the title of the role?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the salary of the role?",
            name: "salary"
        },
        {
            type: "input",
            message: "Which department uses this role?",
            name: "departmentid"
        }

    ]).then((answers) => {

        db.query(
            'INSERT INTO emp_role (title, salary, department_id) VALUES (?, ?, ?)',
            [answers.title, answers.salary, answers.departmentid],
            function (err, results, fields) {

                main();
            }
        )
    })
}


const updateRole = () => {
    db.query(
        'SELECT * FROM employee; SELECT * FROM emp_role',
        (err, results, fields) => {
            inquirer.prompt([
                {
                    type: "list",
                    message: "select an employee to update",
                    name: "employeeid",
                    choices: results[0].map((employee) => ({ value: employee.id, name: `${employee.first_name} ${employee.last_name}` }))
                },
                {
                    type: "list",
                    message: "What is the new role?",
                    name: "roleid",
                    choices: results[1].map((role) => ({value:role.id, name: role.title}))
                },
                
            ]).then((answers) => {

                db.query(
                    'UPDATE employee SET role_id = ? WHERE id = ?',
                    [answers.roleid, answers.employeeid],
                    function (err, results, fields) {

                        main();
                    }
                )
            })
        }
    )
}

const main = () => {
    inquirer.prompt(questions).then((answers) => {
        if (answers.firstQuestion === "view all departments") {
            viewDepartments()
        }
        else if (answers.firstQuestion === "view all employees") {
            viewEmployee()
        }
        else if (answers.firstQuestion === "view all roles") {
            viewRoles()
        }
        else if (answers.firstQuestion === "add a department") {
            addDepartment()
        }
        else if (answers.firstQuestion === "add an employee") {
            addEmployee()
        }
        else if (answers.firstQuestion === "add a role") {
            addRole()
        }
        else{
            updateRole();
        } 
            




    })
}

main()