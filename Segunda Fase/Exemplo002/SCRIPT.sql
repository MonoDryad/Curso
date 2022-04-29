DROP DATABASE IF EXISTS DBEXERCICIO005;

CREATE DATABASE DBEXERCICIO005;

USE DBEXERCICIO005;

CREATE TABLE VEICULO (

  IDVEICULO INT NOT NULL AUTO_INCREMENT,
  NUMERO_DO_CHASSI INT,
  MARCA VARCHAR(45),
  ANO_DO_MODELO INT,
  ANO_DE_FABRICACAO INT,
  COR VARCHAR(45),
  PLACA VARCHAR(8),
  PRIMARY KEY (IDVEICULO)
  );
  
INSERT INTO VEICULO
VALUES (1, 49384, 'Mercedes Benz', 1999, 2001, 'Vermelho', '33eFG');
INSERT INTO VEICULO
VALUES (2, 3535, 'Ford', 2021, 2022, 'Rosa', 'edw8u');
INSERT INTO VEICULO
VALUES (3, 1242, 'Mercedes Benz', 2004, 2005, 'Amerelo', 'GdsrW');

SELECT * FROM VEICULO;