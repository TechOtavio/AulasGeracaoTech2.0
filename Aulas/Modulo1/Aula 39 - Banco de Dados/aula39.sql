show tables;
create table  clientes (
id int primary key auto_increment,
nome varchar(100),
cidade varchar(20)
);
create table pedidos (
id int primary key auto_increment,
data_pedido datetime default(current_timestamp()),
valor_compra decimal(10,2),
id_cliente int,
descricao text,
foreign key (id_cliente) references clientes(id) on delete cascade
);
select * from pedidos;

INSERT INTO pedidos (valor_compra, id_cliente, descricao) VALUES
(250.00, 1, 'Compra de ração, brinquedos e antipulgas'),
(89.90, 2, 'Ração para gatos - 5kg'),
(320.50, 3, 'Casinha, coleira e petiscos'),
(150.00, 4, 'Serviço de banho e tosa + produtos'),
(45.00, 5, 'Comedouro e brinquedo de borracha'),
(275.75, 4, 'Ração especial + medicamentos'),
(99.90, 3, 'Areia higiênica e brinquedos'),
(180.00, 2, 'Ração premium para cães + petiscos'),
(60.00, 1, 'Coleira nova e shampoo'),
(400.00, 2, 'Kit completo: ração, brinquedos e medicamentos');

select * from clientes;	
INSERT INTO clientes (nome, cidade) VALUES
('Mariana Silva', 'São Paulo'),
('Carlos Oliveira', 'Rio de Janeiro'),
('Fernanda Souza', 'Belo Horizonte'),
('João Pedro Martins', 'Curitiba'),
('Aline Ferreira', 'Salvador');

-- Relação de (1:N).
select clientes.nome, pedidos.descricao, pedidos.valor_compra from clientes 
join pedidos on(clientes.id = pedidos.id_cliente);

-- Relaçao de (1:1).
select * from alunos;
create table alunos(
id int primary key auto_increment,
nome varchar(100)
);

select * from carteirinha;
create table carteirinha (
id int primary key auto_increment,
id_aluno int unique,
numeroCarteirinha varchar(12),
foreign key(id_aluno) references alunos(id)
);

insert into alunos (nome) values ('Maria'), ('Carlos'), ('Luis');
insert into carteirinha (id_aluno, numeroCarteirinha) values (3, '123'), (2, '456'), (1, '789');
select alunos.nome, carteirinha.numeroCarteirinha from alunos join carteirinha on (alunos.id = carteirinha.id_aluno);


-- Relação de (N:N)
select * from alunos;
create table alunos(
id int primary key auto_increment,
nome varchar(100)
);

select* from cursos;
create table cursos (
id int primary key auto_increment,
nome varchar(100),
cargaHoraria int
);

select * from matricula;
create table matricula (
id_aluno int,
id_curso int,
data_matricula date default(current_date()),
primary key(id_aluno, id_curso),
foreign key(id_aluno) references alunos(id),
foreign key(id_curso) references cursos(id)
);

insert into cursos (nome, cargaHoraria) values ('JS', 200), ('PY', 200), ('C++', 200);
insert into alunos (nome) values ('Otavio'), ('Gabriel'), ('SlaQuem');
insert into matricula (id_aluno, id_curso) values(1,3), (1,2), (2,1), (3,3), (2,2), (1,1);

select cursos.nome NomeDoCurso, alunos.nome NomeAluno, matricula.data_matricula 
from alunos 
join matricula on (alunos.id = matricula.id_aluno)
join cursos on (cursos.id = matricula.id_curso)
where alunos.nome = 'Carlos'
;