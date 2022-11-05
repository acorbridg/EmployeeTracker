INSERT INTO department (id, department_name)
VALUES (1, "Sterility Assurance"),
       (2, "BET"),
       (3, "EO"),
       (4, "Bioburden"),
       (5, "Radiation"),
       (6, "Microbiology");

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (612, "Emily", "Anderson", 3, 1),
       (613, "Wendy", "Parkingson", 3, 1),
       (614, "Troy", "Farrell", 2, 4),
       (615, "Jacob", "Turnblad", 3, 4),
       (616, "Kelly", "Zombor", 5, 4),
       (617, "Eric", "Gailey", 1, 1),
       (618, "Chad", "Monson", 1, 4);
       
INSERT INTO emp_role (id, title, salary, department_id)
VALUES (1, "Study Director", 35.00, 1),
       (2, "Service Coordinator", 28.00, 4),
       (3, "Lab Analyst", 27.00, 2),
       (4, "Media Prepper", 21.00, 6),
       (5, "Lab Operations Manager", 65.00, 1);