create database banco1;
use banco1;

create table usuarios (
id int primary key auto_increment,
nome varchar(100),
senha varchar(100)
);

insert into usuarios (nome, senha) values
('Ana','123'),  
('Maria','456'),
('João','789');

select * from usuarios;




