ALTER TABLE student_info ADD COLUMN (percentage double);
ALTER TABLE student_info RENAME COLUMN year to graduation_year;
ALTER  TABLE student_info MODIFY COLUMN graduation_year int;
SELECT * FROM 	student_info;
 
