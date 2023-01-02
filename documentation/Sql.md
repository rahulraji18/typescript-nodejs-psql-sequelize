1. psql
2.  psql -U postgres {and enter your psql password}
3. \l {list all db}
//CREATE DB
4. CREATE DATABASE db_name;
//TO Enter DB
5. \c db_name;
// Create Table
6. CREATE TABLE tbl_name(id INT, name VARCHAR(50), email VARCHAR(50), dob DATE);
//view tables in db
7. \d
//view schema in table
8. \d tbl_name;
// drop table
9. DROP TABLE tbl_name;
10. {Serial and Bigserial, NOT NULL, PRIMARY KEY, UNIQUE} 

devdemo=# CREATE TABLE employee(
devdemo(# id BIGSERIAL NOT NULL PRIMARY KEY,
devdemo(# name VARCHAR(50) NOT NULL,
devdemo(# email VARCHAR(30) NOT NULL UNIQUE,
devdemo(# dob DATE);

devdemo=# \d
               List of relations
 Schema |      Name       |   Type   |  Owner
--------+-----------------+----------+----------
 public | employee        | table    | postgres
 public | employee_id_seq | sequence | postgres
(2 rows)


devdemo=# \d employee
                                   Table "public.employee"
 Column |         Type          | Collation | Nullable |               Default
--------+-----------------------+-----------+----------+--------------------------------------
 id     | bigint                |           | not null | nextval('employee_id_seq'::regclass)
 name   | character varying(50) |           | not null |
 email  | character varying(30) |           | not null |
 dob    | date                  |           |          |
Indexes:
    "employee_pkey" PRIMARY KEY, btree (id)
    "employee_email_key" UNIQUE CONSTRAINT, btree (email)

devdemo=# INSERT INTO employee(name,email,dob)
devdemo-# VALUES('rahul','rahul@gmail.com','14-12-2000');    

devdemo=# SELECT * FROM employee;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
  5 | aju    | aju@gmail.com    | 1990-12-12
(3 rows)

devdemo=# SELECT * FROM employee;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
  5 | aju    | aju@gmail.com    | 1990-12-12
(3 rows)


devdemo=# SELECT name,email FROM employee;
  name  |      email
--------+------------------
 rahul  | rahul@gmail.com
 mithun | mithun@gmail.com
 aju    | aju@gmail.com
(3 rows)

>>>>>>>>ORDER BY                                            
devdemo=# SELECT * FROM employee ORDER BY name ASC;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  5 | aju    | aju@gmail.com    | 1990-12-12
  4 | mithun | mithun@gmail.com | 2000-10-10
  1 | rahul  | rahul@gmail.com  | 2000-12-14
(3 rows)

>>>>>>>>>>>>> DISTINCT
devdemo=# INSERT INTO employee(name,email,dob)
devdemo-# VALUES('jack','jack@gmail.com','14/12/2000');
INSERT 0 1
devdemo=# SELECT * FROM employee;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
  5 | aju    | aju@gmail.com    | 1990-12-12
  6 | jack   | jack@gmail.com   | 2000-12-14
(4 rows)


devdemo=# SELECT dob FROM employee;
    dob
------------
 2000-12-14
 2000-10-10
 1990-12-12
 2000-12-14
(4 rows)


devdemo=# SELECT DISTINCT dob FROM employee;
    dob
------------
 2000-12-14
 2000-10-10
 1990-12-12
(3 rows)
>>>>>>>WHERE
devdemo=# SELECT * FROM employee WHERE name='rahul';
 id | name  |      email      |    dob
----+-------+-----------------+------------
  1 | rahul | rahul@gmail.com | 2000-12-14
(1 row)

devdemo=# SELECT * FROM employee WHERE dob='2000-12-14';
 id | name  |      email      |    dob
----+-------+-----------------+------------
  1 | rahul | rahul@gmail.com | 2000-12-14
  6 | jack  | jack@gmail.com  | 2000-12-14
(2 rows)

devdemo=# SELECT * FROM employee WHERE dob='2000-12-14' AND name='rahul';
 id | name  |      email      |    dob
----+-------+-----------------+------------
  1 | rahul | rahul@gmail.com | 2000-12-14
(1 row)


devdemo=# SELECT * FROM employee WHERE dob='2000-12-14' OR name='rahul';
 id | name  |      email      |    dob
----+-------+-----------------+------------
  1 | rahul | rahul@gmail.com | 2000-12-14
  6 | jack  | jack@gmail.com  | 2000-12-14
(2 rows)

devdemo=# SELECT * FROM employee WHERE dob<'2000-11-14';
 id |  name  |      email       |    dob
----+--------+------------------+------------
  4 | mithun | mithun@gmail.com | 2000-10-10
  5 | aju    | aju@gmail.com    | 1990-12-12
(2 rows)


devdemo=# SELECT * FROM employee WHERE dob>'2000-11-14';
 id | name  |      email      |    dob
----+-------+-----------------+------------
  1 | rahul | rahul@gmail.com | 2000-12-14
  6 | jack  | jack@gmail.com  | 2000-12-14
(2 rows)
>>>>>>>>LIMIT
devdemo=# SELECT * FROM employee LIMIT 2;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
(2 rows)

>>>>>>ORDER BY
devdemo=# SELECT * FROM employee ORDER BY id DESC;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  6 | jack   | jack@gmail.com   | 2000-12-14
  5 | aju    | aju@gmail.com    | 1990-12-12
  4 | mithun | mithun@gmail.com | 2000-10-10
  1 | rahul  | rahul@gmail.com  | 2000-12-14
(4 rows)

>>>>>>>>ORDER BY OFFSET
devdemo=# SELECT * FROM employee ORDER BY id DESC OFFSET 2;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  4 | mithun | mithun@gmail.com | 2000-10-10
  1 | rahul  | rahul@gmail.com  | 2000-12-14
(2 rows)
>>>>>>>ORDER BY OFFSET LIMIT
devdemo=# SELECT * FROM employee ORDER BY id DESC OFFSET 2 LIMIT 1;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  4 | mithun | mithun@gmail.com | 2000-10-10
(1 row)

>>>>>>LIMIT OFFSET vs OFFSET FETCH
devdemo=# SELECT * FROM employee;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
  5 | aju    | aju@gmail.com    | 1990-12-12
  6 | jack   | jack@gmail.com   | 2000-12-14
(4 rows)


devdemo=# SELECT * FROM employee OFFSET 2;
 id | name |     email      |    dob
----+------+----------------+------------
  5 | aju  | aju@gmail.com  | 1990-12-12
  6 | jack | jack@gmail.com | 2000-12-14
(2 rows)


devdemo=# SELECT * FROM employee OFFSET 2 LIMIT 1;
 id | name |     email     |    dob
----+------+---------------+------------
  5 | aju  | aju@gmail.com | 1990-12-12
(1 row)
devdemo=# SELECT * FROM employee OFFSET 2 FETCH FIRST 1 ROWS ONLY;
 id | name |     email     |    dob
----+------+---------------+------------
  5 | aju  | aju@gmail.com | 1990-12-12
(1 row)

>>>>>>>>IN 
devdemo=# SELECT * FROM employee WHERE name='rahul' OR name='mithun';
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
(2 rows) 
>>>solve this problem below????
devdemo=# SELECT * FROM employee WHERE name IN('rahul','mithun');
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
(2 rows)

>>>>>>>>BETWEEN
devdemo=# SELECT * FROM employee WHERE dob BETWEEN DATE '2000/10/11' AND '2000/12/30';
 id | name  |      email      |    dob
----+-------+-----------------+------------
  1 | rahul | rahul@gmail.com | 2000-12-14
  6 | jack  | jack@gmail.com  | 2000-12-14
(2 rows)

>>>>>LIKE ...End with 'l'
devdemo=# SELECT * FROM employee WHERE name LIKE '%l';
 id | name  |      email      |    dob
----+-------+-----------------+------------
  1 | rahul | rahul@gmail.com | 2000-12-14
(1 row)
> starting with 'm'
devdemo=# SELECT * FROM employee WHERE name LIKE 'm%';
 id |  name  |      email       |    dob
----+--------+------------------+------------
  4 | mithun | mithun@gmail.com | 2000-10-10
(1 row)
> issue for case sensitive in LIKE keyword
devdemo=# SELECT * FROM employee WHERE name LIKE 'M%';
 id | name | email | dob
----+------+-------+-----
(0 rows)
>>>>>solve using ILIKE keyword
devdemo=# SELECT * FROM employee WHERE name ILIKE 'M%';
 id |  name  |      email       |    dob
----+--------+------------------+------------
  4 | mithun | mithun@gmail.com | 2000-10-10
(1 row)
> ILIKE eg:
devdemo=# SELECT * FROM employee WHERE email ILIKE '%gamil%';
 id | name | email | dob
----+------+-------+-----
(0 rows)
devdemo=# SELECT * FROM employee WHERE email ILIKE '%gmail%';
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
  5 | aju    | aju@gmail.com    | 1990-12-12
  6 | jack   | jack@gmail.com   | 2000-12-14
(4 rows)

>>>>>>>>GROUP BY --- group cheyth repeat ullath skip
devdemo=# SELECT name FROM employee GROUP BY name;
  name
--------
 mithun
 rahul
 jack
 aju
(4 rows)
devdemo=# SELECT name,COUNT(*) FROM employee GROUP BY name;
  name  | count
--------+-------
 mithun |     1
 rahul  |     1
 jack   |     1
 aju    |     1
(4 rows)
devdemo=# SELECT name,COUNT(*) FROM employee GROUP BY name;
  name  | count
--------+-------
 mithun |     1
 rahul  |     1
 jack   |     1
 aju    |     1
(4 rows)
devdemo=# SELECT name,COUNT(*) FROM employee GROUP BY name ORDER BY name;
  name  | count
--------+-------
 aju    |     1
 jack   |     1
 mithun |     1
 rahul  |     1
(4 rows)
>>>>>>>>>>>>>>>>HAVING
aggregate function together with WHERE is not possible, To overcome this problem using of HAVING

devdemo=# SELECT name FROM employee GROUP BY name HAVING COUNT(*)>1 ORDER BY name;
 name
------
(0 rows)
devdemo=# SELECT name FROM employee GROUP BY name HAVING COUNT(*)<=1 ORDER BY name;
  name
--------
 aju
 jack
 mithun
 rahul
(4 rows)

>>>>>>>>>>>>AGGREGATE FUNCTIONS
 {MAX,MIN,AVG,....}
 >MAX
 devdemo=# SELECT * FROM employee;
 id |  name  |      email       |    dob
----+--------+------------------+------------
  1 | rahul  | rahul@gmail.com  | 2000-12-14
  4 | mithun | mithun@gmail.com | 2000-10-10
  5 | aju    | aju@gmail.com    | 1990-12-12
  6 | jack   | jack@gmail.com   | 2000-12-14
(4 rows)
devdemo=# SELECT MAX(id) FROM employee;
 max
-----
   6
(1 row)


>>>>>>>>>>>>>>AGGREGATIONS
newone=# SELECT * FROM employee;
 id |   name   |       email        |    dob     | gender | place  | salary
----+----------+--------------------+------------+--------+--------+--------
  1 | rahul    | rahul@gmail.com    | 2000-12-14 | M      | Kollam |  75000
  2 | sree     | sree@gmail.com     | 1999-10-14 | F      | Tvm    |  10000
  3 | aju      | aju@gmail.com      | 1998-12-14 | M      | Alpy   |  20000
  4 | malavika | malavika@gmail.com | 1997-12-14 | F      | Ktym   |  30000
  5 | manu     | manu@gmail.com     | 1997-12-14 | M      | Ktym   |  50000
(5 rows)
newone=# UPDATE employee SET salary=35000 WHERE id=2;
UPDATE 1
newone=# SELECT * FROM employee;
 id |   name   |       email        |    dob     | gender | place  | salary
----+----------+--------------------+------------+--------+--------+--------
  1 | rahul    | rahul@gmail.com    | 2000-12-14 | M      | Kollam |  75000
  3 | aju      | aju@gmail.com      | 1998-12-14 | M      | Alpy   |  20000
  4 | malavika | malavika@gmail.com | 1997-12-14 | F      | Ktym   |  30000
  5 | manu     | manu@gmail.com     | 1997-12-14 | M      | Ktym   |  50000
  2 | sree     | sree@gmail.com     | 1999-10-14 | F      | Tvm    |  35000
(5 rows)
>>>MAX
newone=# SELECT MAX(salary) FROM employee;
  max
-------
 75000
(1 row)
newone=# SELECT MAX(salary),Count(*) FROM employee;
  max  | count
-------+-------
 75000 |     5
(1 row)
>>>MIN
newone=# SELECT MIN(salary) FROM employee;
  min
-------
 20000
(1 row)
>>>AVG
newone=# SELECT AVG(salary) FROM employee;
        avg
--------------------
 42000.000000000000
(1 row)
>>>ROUND
newone=# SELECT round(avg(salary)) FROM employee;
 round
-------
 42000
(1 row)
>>>SUM
newone=# SELECT sum(salary) FROM employee;
  sum
--------
 210000
(1 row)