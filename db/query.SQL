-- SELECT movies.movie_name AS movie, reviews.review
-- FROM reviews
-- LEFT JOIN movies
-- ON reviews.movie_id = movies.id
-- ORDER BY movies.movie_name;

-- SELECT
--   favorite_books.book_name AS name, book_prices.price AS price
-- FROM favorite_books
-- JOIN book_prices ON favorite_books.book_price = book_prices.id;

SELECT id, department_name
FROM  department; 

SELECT id, title, salary, department_id
FROM  emp_role; 

SELECT id first_name, last_name, role_id, manager_id
FROM  employee; 

SELECT emp_role.department_id
FROM emp_role
JOIN department on emp_role.department_id = department.id; 

SELECT employee.role_id
FROM employee
JOIN emp_role on employee.role_id = emp_role.id;

