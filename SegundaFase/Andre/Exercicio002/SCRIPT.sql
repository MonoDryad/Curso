-- Apagando o banco de dados caso existe
DROP DATABASE IF EXISTS DBEXERCICIO002;

-- Criando a base de dados
CREATE DATABASE DBEXERCICIO002;

-- Conectando na base de dados
USE DBEXERCICIO002;

-- Criando as tabels
CREATE TABLE ALUNO (
	IDALUNO INT NOT NULL AUTO_INCREMENT, 
    NOME VARCHAR(100), 
    SEXO CHAR(1),
    PRIMARY KEY (IDALUNO)
);