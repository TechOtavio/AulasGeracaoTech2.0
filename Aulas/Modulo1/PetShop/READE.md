
```markdown
# 🐾 Login PetShop - Projeto Node.js

Este é um projeto simples de login feito com **HTML** e **Node.js (Express)**, criado para fins de aprendizado. O sistema simula uma autenticação básica de usuários e redirecionamento após o login.

---

## 📁 Estrutura do Projeto

```
PetShop/
│
├── Login.html          # Página de login (frontend)
├── Teste.html          # Página para onde o usuário é redirecionado após o login
├── Server.js           # Servidor Node.js com Express
├── package.json        # Dependências e scripts do projeto
└── node_modules/       # Módulos do Node.js (criados com npm install)
```

---

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (vem junto com o Node)

---

## 🚀 Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repo.git
```

2. **Acesse a pasta do projeto:**

```bash
cd PetShop
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Inicie o servidor:**

```bash
node Server.js
```

5. **Abra no navegador:**

```
http://localhost:3000
```

---

## 👥 Usuários para teste

Você pode usar os seguintes dados para fazer login:

| Email                      |  Senha  |
|----------------------------|---------|
| otaviolevi@petshop.com     | 123456  |
| gabrielalex@petshop.com    | 123456  |

---

## 🔄 Fluxo do Login

1. O usuário preenche o formulário no `Login.html`
2. Os dados são enviados via `POST` para `/login`
3. O `Server.js` verifica os dados
4. Se o login for válido, mostra uma mensagem e redireciona para `Teste.html`
5. Caso contrário, exibe erro

---

## 📦 Tecnologias usadas

- HTML5
- CSS (Bootstrap)
- JavaScript
- Node.js
- Express

---

## 🧠 Objetivo

Este projeto tem como finalidade o **aprendizado de back-end básico com Express** e **manipulação de formulários HTML**.

---

## 📬 Contato

Se tiver dúvidas ou sugestões, fique à vontade para abrir uma *issue* ou enviar uma mensagem!

```

---

Se você quiser, posso inserir o link do seu repositório GitHub diretamente aí. É só me passar!