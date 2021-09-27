SELECT customers.customer_id,first_name,order_id,status
FROM customers INNER JOIN orders
ON customers.customer_id=orders.customer_id;

SELECT customers.customer_id,first_name,order_id,status
FROM customers LEFT JOIN orders
ON customers.customer_id=orders.customer_id;

SELECT customers.customer_id,first_name,order_id,status
FROM customers RIGHT JOIN orders
ON customers.customer_id=orders.customer_id;

SELECT customers.customer_id,first_name,order_id,status
FROM customers LEFT JOIN orders
ON customers.customer_id=orders.customer_id
union
SELECT customers.customer_id,first_name,order_id,status
FROM customers RIGHT JOIN orders
ON customers.customer_id=orders.customer_id;
