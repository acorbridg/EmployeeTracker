INSERT INTO department (department_name)
VALUES ("Sterility Assurance"),
       ("BET"),
       ("EO"),
       ("Bioburden"),
       ("Radiation"),
       ("Microbiology");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Emily", "Anderson", 3, 1),
       ("Wendy", "Parkingson", 3, 1),
       ("Troy", "Farrell", 2, 4),
       ("Jacob", "Turnblad", 3, 4),
       ("Kelly", "Zombor", 5, 4),
       ("Eric", "Gailey", 1, 1),
       ("Chad", "Monson", 1, 4);
       
INSERT INTO emp_role (title, salary, department_id)
VALUES ("Study Director", 35.00, 1),
       ("Service Coordinator", 28.00, 4),
       ("Lab Analyst", 27.00, 2),
       ("Media Prepper", 21.00, 6),
       ("Lab Operations Manager", 65.00, 1);