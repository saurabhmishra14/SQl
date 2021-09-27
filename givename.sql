USE sql_store;

SELECT last_name,
first_name,
(points+10)*1000 AS "New points" 
FROM customers
-- WHERE customer_id>1;
ORDER by first_name;