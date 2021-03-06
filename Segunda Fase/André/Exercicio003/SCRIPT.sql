-- Apagando o banco de dados caso existe
DROP DATABASE IF EXISTS DBEXERCICIO003;

-- Criando a base de dados
CREATE DATABASE DBEXERCICIO003;

-- Conectando na base de dados
USE DBEXERCICIO003;

-- Criando as tabels
CREATE TABLE LIVRO (
	IDLIVRO INT NOT NULL AUTO_INCREMENT, 
    TITULO VARCHAR(100), 
    AUTOR VARCHAR(100), 
	EDITORA VARCHAR(100), 
    ANO_DE_PUBLICACAO INT, 
    PRIMARY KEY (IDLIVRO)
);