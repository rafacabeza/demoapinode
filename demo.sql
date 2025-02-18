-- CREATE DATABASE demo;
USE demo;

CREATE TABLE deseos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    deseo VARCHAR(100) NOT NULL
);

INSERT INTO deseos (deseo) VALUES
('Aprender Docker'),
('Crear mis imágenes');
