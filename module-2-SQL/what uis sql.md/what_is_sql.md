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

DQL is used to ** select all data or fetch all **

    1. select * all data from table

    syntax :

    2. select paricualar column fo data

    syntax : 
    select id,name 

