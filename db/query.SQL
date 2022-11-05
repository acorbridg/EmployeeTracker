SELECT id, department_name
FROM  department; 

SELECT id, title, salary, department_id
FROM  emp_role; 

SELECT id, first_name, last_name, role_id, manager_id
FROM  employee; 

SELECT emp_role.department_id
FROM emp_role
JOIN department on emp_role.department_id = department.id; 

SELECT employee.role_id
FROM employee
JOIN emp_role on employee.role_id = emp_role.id;

