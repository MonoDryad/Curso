DROP DATABASE IF EXISTS EXEMPLO0003;

CREATE DATABASE EXEMPLO0003;

USE EXEMPLO0003;

CREATE TABLE ENTIDADE_A (
ID_A INT NOT NULL,
PRIMARY KEY (ID_A)
);

CREATE TABLE ENTIDADE_B (
ID_B INT NOT NULL,
PRIMARY KEY (ID_B)
);

CREATE TABLE RELACAO (
ID_A INT NOT NULL,
ID_B INT NOT NULL,
PRIMARY KEY (ID_A, ID_B),
FOREIGN KEY (ID_A) REFERENCES ENTIDADE_A (ID_A),
FOREIGN KEY (ID_B) REFERENCES ENTIDADE_B (ID_B)
);