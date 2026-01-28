# What is SQL?

SQL stands for Structured Query Language.

- SQL is case-insensitive.
- SQL is used to create databases and table structures.
- SQL has various commands.

## Types of SQL Commands

- DDL (Data Definition Language)
- DML (Data Manipulation Language)
- DCL (Data Control Language)
- TCL (Transaction Control Language)

## DDL: Data Definition Language

DDL is used to create database and table structures. DDL queries include:

1. CREATE
2. ALTER
3. RENAME
4. CHANGE
5. DROP
6. TRUNCATE

### 1. How to Create a Database in SQL

**Query:**
```sql
CREATE DATABASE database_name;
```

**Example:**
```sql
CREATE DATABASE flipkart_db;
```

### What is a Database?

A database is used to store data.

List of 5 database names:

1. MySQL
2. SQLite
3. MongoDB
4. SQL Server
5. Oracle

**Note:** MySQL is an open-source database. MySQL is case-sensitive.

**Example:** MySQL

### 2. How to Create a Table in a Database

A table is used to create and store data in the form of columns and rows, i.e., called tables.

Example table:

| uid | name | age | salary | address       |
|-----|------|-----|--------|---------------|
| 1   | abc  | 23  | 2423   | sdofgjsodffn  |

#### Data Types Chart

| Column Name | Data Type          | Size          |
|-------------|--------------------|---------------|
| id          | INT                | Default size  |
| name        | CHAR, VARCHAR      | (0-255)       |
| date        | DATE, VARCHAR      |               |
| datetime    | DATETIME           |               |
| comments    | TEXT               |               |
| messages    | TEXT               |               |
| price       | INT, FLOAT         | Default size (10) |
| mobile      | BIGINT             | Default size (20) |
| image       | BLOB, VARCHAR      | (0-255)       |

**Syntax:**
```sql
CREATE TABLE table_name (
    column_name datatype(size) AUTO_INCREMENT PRIMARY KEY,
    column_name datatype(size),
    ...
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    address TEXT,
    mobile BIGINT,
    salary FLOAT
);
```

### 3. ALTER

ALTER is used to add, modify, or update new column names after creating tables.

**Syntax:**

1. Add photo at the end of column names:
```sql
ALTER TABLE users ADD photo VARCHAR(255);
```

2. Add photo after name column:
```sql
ALTER TABLE users ADD photo VARCHAR(255) AFTER name;
```

3. Update any column name via ALTER:
```sql
ALTER TABLE users CHANGE mobile phone BIGINT;
```

### 4. RENAME

RENAME is used to rename any table.

**Syntax:**
```sql
RENAME TABLE users TO tbl_users;
```

### 5. CHANGE

CHANGE any column name.

**Syntax:**
```sql
ALTER TABLE users CHANGE mobile phone BIGINT;
```

### 6. TRUNCATE

TRUNCATE is used to remove or empty all data from tables.

**Syntax:**
```sql
TRUNCATE TABLE tbl_users;
```

**Note:** After TRUNCATE, we cannot rollback data.

### 7. DROP

DROP is used to delete databases and table structures.

**Syntax:**

a) Drop database:
```sql
DROP DATABASE flipkart_db;
```

b) Drop table:
```sql
DROP TABLE tbl_users;
```

## DML: Data Manipulation Language

DML is used to manipulate data in tables. DML commands include:

1. INSERT
2. UPDATE
3. DELETE
4. SELECT

### 1. INSERT

INSERT is used to insert values into tables.

**Syntax:**
```sql
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);
```

**Example:**
```sql
INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com');
```

### 2. UPDATE

UPDATE is used to update data in tables.

**Syntax:**
```sql
UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
```

**Example:**
```sql
UPDATE users SET name = 'Jane Doe' WHERE user_id = 1;
```

### 3. DELETE

DELETE is used to delete data from tables.

#### 1. Delete all data

**Definition:**  
Deletes all data from the table (table structure remains the same).

**Syntax:**
```sql
DELETE FROM tbl_name;
```

**Example:**
```sql
DELETE FROM users;
```

#### 2. Delete particular data

**Definition:**  
Deletes a specific record from the table.

**Syntax:**
```sql
DELETE FROM tbl_name WHERE user_id = 1;
```

OR

```sql
DELETE FROM tbl_name WHERE name = 'brijesh';
```

**Example:**
```sql
DELETE FROM users WHERE user_id = 1;
```

#### 3. Delete multiple data (using IN)

**Definition:**  
Deletes multiple records at once.

**Syntax:**
```sql
DELETE FROM tbl_name WHERE user_id IN (1, 2);
```

**Example:**
```sql
DELETE FROM users WHERE user_id IN (1, 2);
```

#### 4. Delete data using condition

**Definition:**  
Deletes data based on a condition.

**Syntax:**
```sqlasdfasdfasdfasfaedsgit
DELETE FROM tbl_name WHERE condition;
```

**Example:**
```sql
DELETE FROM users WHERE age > 25;


2) DQL - stands for data query language

# SQL DQL (Data Query Language) – Complete Explanation (Hindi)

## 1. DQL kya hota hai?

DQL ka full form **Data Query Language** hota hai.

DQL ka use **database se data nikalne (query karne)** ke liye hota hai.

👉 Simple words me:

* Data dekhna
* Data search karna
* Data filter karna
* Data sort karna

⚠️ DQL data ko **change nahi karta**, sirf data **read** karta hai.

---

## 2. DQL me kaun-si command hoti hai?

DQL me mainly **sirf ek hi command** hoti hai:

👉 **SELECT** ⭐⭐⭐⭐⭐ (SUPER IMPORTANT)

Poori SQL ka sabse zyada use hone wala command = **SELECT**

---

## 3. SELECT command (Heart of SQL ❤️)

### Basic syntax

```sql
SELECT column_name FROM table_name;
```

### Example

```sql
SELECT name FROM student;
```

➡️ Student table se sirf `name` column ka data milega.

---

### Sab data dekhna (All columns)

```sql
SELECT * FROM student;
```

➡️ Table ka poora data show karega.

---

## 4. WHERE clause (Filter karne ke liye) ⭐⭐⭐⭐⭐

WHERE ka use **condition lagane** ke liye hota hai.

### Example

```sql
SELECT * FROM student WHERE age > 18;
```

➡️ Sirf wahi students jinki age 18 se zyada hai.

### Operators

* `=` equal
* `>` greater than
* `<` less than
* `>=` , `<=`
* `!=` not equal

---

## 5. AND / OR / NOT (Multiple conditions)

### AND example

```sql
SELECT * FROM student WHERE age > 18 AND marks > 60;
```

### OR example

```sql
SELECT * FROM student WHERE age > 18 OR marks > 60;
```

### NOT example

```sql
SELECT * FROM student WHERE NOT age = 18;
```

---

## 6. DISTINCT (Duplicate data hatane ke liye)

```sqls
SELECT DISTINCT age FROM student;
```

➡️ Age repeat nahi hogi.

---

## 7. ORDER BY (Sorting data)

### Ascending (default)

```sql
SELECT * FROM student ORDER BY marks;
```

### Descending

```sql
SELECT * FROM student ORDER BY marks DESC;
```

---

## 8. LIMIT (Kitna data chahiye)

```sql
SELECT * FROM student LIMIT 5;
```

➡️ Sirf first 5 rows milegi.

Real life me use hota hai pagination me.

---

## 9. LIKE (Pattern search) ⭐⭐⭐⭐

```sql
SELECT * FROM student WHERE name LIKE 'A%';
```

➡️ Jinka naam A se start hota hai.

### Wildcards

* `%` → kuch bhi
* `_` → ek character

---

## 10. IN (Multiple values check)

```sql
SELECT * FROM student WHERE age IN (18, 20, 22);
```

---

## 11. BETWEEN (Range check)

```sql
SELECT * FROM student WHERE marks BETWEEN 60 AND 80;
```

---

## 12. Aggregate Functions (Calculation ke liye) ⭐⭐⭐⭐⭐

| Function | Use        |
| -------- | ---------- |
| COUNT()  | total rows |
| SUM()    | total      |
| AVG()    | average    |
| MAX()    | maximum    |
| MIN()    | minimum    |

### Example

```sql
SELECT COUNT(*) FROM student;
```

---

## 13. GROUP BY (Data group karna) ⭐⭐⭐⭐

```sql
SELECT age, COUNT(*) FROM student GROUP BY age;
```

➡️ Same age wale students ka group banega.

---

## 14. HAVING (GROUP BY ke sath condition)

```sql
SELECT age, COUNT(*) FROM student
GROUP BY age
HAVING COUNT(*) > 2;
```

⚠️ WHERE aggregate ke sath kaam nahi karta, HAVING karta hai.

---

## 15. DQL kaha-kaha use hota hai?

1. Reports banane me
2. Admin panels
3. Data analysis
4. Dashboard
5. Interview / Exam

---

## 16. Exam ke liye MOST IMPORTANT

### ⭐⭐⭐⭐⭐ Very Important

* SELECT
* WHERE
* GROUP BY
* Aggregate functions

### ⭐⭐⭐ Medium

* ORDER BY
* LIKE
* IN / BETWEEN

---

## 17. Short Summary

👉 **DQL = Database se data nikalne wali SQL language**

---

Agar chaho to next:

* DQL MCQ + practice questions
* DQL real interview queries
* DCL / TCL notes

Bas bolo 👍

