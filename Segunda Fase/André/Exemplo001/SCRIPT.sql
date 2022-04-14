-- Apagando o banco de dados caso existe
DROP DATABASE IF EXISTS DBEXERCICIO001;

-- Criando a base de dados
CREATE DATABASE DBEXERCICIO001;

-- Conectando na base de dados
USE DBEXERCICIO001;

-- Criando as tabels
CREATE TABLE ALUNO (
	IDALUNO INT NOT NULL AUTO_INCREMENT, 
    NOME VARCHAR(100), 
    PRIMARY KEY (IDALUNO)
);