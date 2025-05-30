create database dripstore;
use dripstore;

/*Tipos de Dados: int, decimal(a, b), float (real),
 varchar(n), char(n), text, date, time, datetime, boolean ...*/
 
create table clientes(
id int primary key auto_increment,
nome varchar(50) not null,
descricao text,
email varchar(50) not null unique,
telefone varchar(14),
data_nascimento date,
genero char(1), /*M,F e O*/
data_cadastro datetime default(current_timestamp)
);

create table produtos(
id int primary key auto_increment,
nome varchar(50) not null,
descricao text not null,
preco decimal(10,2) not null,
estoque int default(0),
categoria varchar(50),
ativo boolean default(true)
);

-- CREATE, READ, UPDATE, DELETE
select * from clientes;

-- CREATE:
insert into clientes(nome, descricao, email, telefone, data_nascimento, genero) 
values('Otavio','Descri', 'otavio@gmail.com', '989898989', '2020-01-05' ,'F');
insert into clientes(nome, email, telefone, data_nascimento, genero) 
values('Pedro', 'pedro@gmail.com', '980808080', '2015-08-10' ,'M');
insert into clientes(nome, descricao, email, telefone, data_nascimento, genero) 
values 
('Ana','Descri', 'ana@gmail.com', '989898988', '1995-03-12' ,'F'),
('Carlos','Descri', 'carlos@gmail.com', '989898987', '1988-07-19' ,'M'),
('Bruna','Descri', 'bruna@gmail.com', '989898986', '1990-10-30' ,'F'),
('Juliana','Descri', 'juliana@gmail.com', '989898984', '1992-02-28' ,'F'),
('Lucas','Descri', 'lucas@gmail.com', '989898983', '1999-09-09' ,'M'),
('Mariana','Descri', 'mariana@gmail.com', '989898982', '1997-11-23' ,'F'),
('João','Descri', 'joao@gmail.com', '989898981', '1993-04-01' ,'M'),
('Camila','Descri', 'camila@gmail.com', '989898980', '2001-08-08' ,'F'),
('Mateus','Descri', 'mateus@gmail.com', '989898979', '1985-12-18' ,'M'),
('Letícia','Descri', 'leticia@gmail.com', '989898978', '1996-05-05' ,'F'),
('André','Descri', 'andre@gmail.com', '989898977', '1989-01-11' ,'M'),
('Fernanda','Descri', 'fernanda@gmail.com', '989898976', '1994-06-20' ,'F'),
('Ricardo','Descri', 'ricardo@gmail.com', '989898975', '1991-03-03' ,'M'),
('Patrícia','Descri', 'patricia@gmail.com', '989898974', '1998-07-27' ,'F'),
('Felipe','Descri', 'felipe@gmail.com', '989898973', '1987-09-14' ,'M'),
('Aline','Descri', 'aline@gmail.com', '989898972', '1990-12-05' ,'F'),
('Rafael','Descri', 'rafael@gmail.com', '989898971', '1999-10-10' ,'M'),
('Bianca','Descri', 'bianca@gmail.com', '989898970', '1995-01-20' ,'F');

-- UPDATE
select * from clientes;
update clientes set email = 'CarlosUpdate@gmail.com' where nome = 'Carlos' && id = 62;
update clientes set nome = 'Ana Lucia';
update clientes set descricao = 'Não falamos do Bruno' where nome = 'Bruno';

-- DELETE
delete from clientes where id = 78;

-- SELECTS
select * from produtos;
insert into produtos(nome, descricao, preco, estoque, categoria, ativo) 
values
('Ração Premium', 'Ração de alta qualidade para cães adultos', 89.90, 50, 'Alimentação', true),
('Coleira Antipulgas', 'Coleira eficaz contra pulgas e carrapatos', 39.99, 100, 'Acessórios', true),
('Shampoo Pet', 'Shampoo hipoalergênico para cães e gatos', 25.50, 80, 'Higiene', true),
('Arranhador de Gato', 'Arranhador com várias plataformas e brinquedos', 199.90, 20, 'Acessórios', true),
('Brinquedo Bola', 'Bola de borracha resistente para cães', 15.00, 120, 'Brinquedos', true),
('Comedouro Duplo', 'Comedouro em inox com suporte antiderrapante', 34.90, 60, 'Acessórios', true),
('Casinha de Cachorro', 'Casinha em plástico para cães de médio porte', 249.99, 10, 'Conforto', true),
('Tapete Higiênico', 'Pacote com 30 tapetes para xixi', 59.90, 70, 'Higiene', true),
('Ração Gatos Filhotes', 'Ração especial para crescimento saudável', 79.90, 40, 'Alimentação', true),
('Areia Sanitária', 'Areia absorvente para caixas de gato', 29.90, 90, 'Higiene', true),
('Coleira com Nome', 'Coleira personalizada com nome do pet', 45.00, 25, 'Acessórios', true),
('Brinquedo Mordedor', 'Mordedor de nylon para cães filhotes', 19.90, 110, 'Brinquedos', true),
('Toalha Pet', 'Toalha absorvente e de secagem rápida', 22.50, 35, 'Higiene', true),
('Roupinha de Inverno', 'Roupa para cães de pequeno porte no frio', 69.90, 55, 'Conforto', true),
('Escova de Pelos', 'Escova para remover pelos mortos', 18.90, 65, 'Higiene', true),
('Fonte de Água', 'Fonte com filtro para hidratação contínua', 149.90, 15, 'Acessórios', true),
('Petiscos Naturais', 'Pacote de petiscos naturais e saudáveis', 24.90, 85, 'Alimentação', true),
('Jaula para Transporte', 'Jaula ventilada para transporte de pets', 129.90, 30, 'Transporte', true),
('Bebedouro Automático', 'Bebedouro com sensor de presença', 89.90, 22, 'Acessórios', true),
('Almofada Pet', 'Almofada confortável para descanso do pet', 59.00, 45, 'Conforto', true);

select nome, preco, estoque from produtos;