SELECT * FROM customers;
WITH POINTT(avgP)  as(
SELECT AVG(points) FROM customers
)
SELECT * FROM customers c,POINTT p
WHERE p.avgP<c.points ORDER BY first_name;
