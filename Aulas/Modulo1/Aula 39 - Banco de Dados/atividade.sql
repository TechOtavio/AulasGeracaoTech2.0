-- Criando o DATABASE
show databases;
create database loja01;
use loja01;

-- Criando as table
show tables;

create table Funcionarios(
id int primary key auto_increment,
nome varchar(100),
cargo varchar(50),
salario decimal(10,2),
data_contratacao date,
ativo boolean
);

INSERT INTO Funcionarios (nome, cargo, salario, data_contratacao, ativo) VALUES
('Ana Paula Souza', 'Atendente', 1800.00, '2022-03-15', true),
('Carlos Henrique Lima', 'Veterinário', 4500.00, '2021-11-20', true),
('Juliana Mendes', 'Banho e Tosa', 2000.00, '2023-01-10', true),
('Ricardo Almeida', 'Recepcionista', 1700.00, '2024-05-01', true),
('Fernanda Rocha', 'Gerente', 5200.00, '2020-08-05', true),
('Lucas Martins', 'Auxiliar de Limpeza', 1500.00, '2022-07-18', true),
('Patrícia Oliveira', 'Veterinária', 4700.00, '2021-04-25', false),
('André Souza', 'Banho e Tosa', 2100.00, '2023-10-03', true),
('Marta Silva', 'Atendente', 1850.00, '2022-12-12', true),
('João Batista', 'Recepcionista', 1750.00, '2023-09-29', false)
;
INSERT INTO Funcionarios (nome, cargo, salario, data_contratacao, ativo) VALUES
('Otavio Levi', 'Analista', 5000, '2005-01-05', true)
;
INSERT INTO Funcionarios (nome, cargo, salario, data_contratacao, ativo) VALUES
('Bruna Ferreira', 'Supervisora de Atendimento', 3200.00, '2023-06-10', true),
('Thiago Costa', 'Técnico em Veterinária', 2700.00, '2022-09-15', true),
('Elaine Marques', 'Especialista em Produtos', 3900.00, '2021-12-05', false);

create table Produtos(
id int primary key auto_increment,
nome varchar(80),
preco decimal(10,2),
estoque int
);
INSERT INTO Produtos (nome, preco, estoque) VALUES
('Ração Seca para Cães - 10kg', 120.90, 30),
('Shampoo Antipulgas 500ml', 25.50, 50),
('Coleira com Guia - Tamanho M', 45.00, 0),
('Ração para Gatos Adultos - 5kg', 89.90, 25),
('Areia Higiênica para Gatos - 4kg', 19.99, 60),
('Brinquedo Bola de Borracha', 12.00, 40),
('Petisco para Cães - Biscoito 500g', 15.75, 35),
('Comedouro Inox 1L', 22.50, 28),
('Casinha Plástica para Cachorros - Grande', 199.00, 10),
('Antipulgas Oral para Cães - 1 comprimido', 38.90, 15);

-- Selects pedidos
select * from produtos;
select * from funcionarios;
select nome, cargo, data_contratacao from funcionarios where year(data_contratacao) >= 2022;
select * from funcionarios where cargo in ('Analista');
select * from funcionarios where salario between 2500 and 4000;
update funcionarios set salario = salario + 300 where cargo = 'Analista';
update funcionarios set ativo = true;
update funcionarios set ativo = false where id = 4;
delete from funcionarios where year(data_contratacao) < 2021;