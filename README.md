# CRUD Gerenciamento de Usuários

<h2>Tabela de Conteúdos</h2>

1. [ Sobre ](#sobre)
2. [ Tecnologias](#techs)
3. [ Documentação ](#documentacao)
4. [ Instalação ](#install)
5. [ Desenvolvedores ](#devs)
6. [ termos de uso ](#termos)

<a name="sobre"></a>

## 1. Sobre

O projeto foi desenvolvido no quarto módulo curso de Desenvolvimento Full Stack da Kenzie Academy Brasil, e colocou em prática os conhecimentos técnicos com foco na segurança da aplicação. 

A aplicação é uma API que permite funções como Cadastro e Login com diferentes perfis de usuário, hasheamento de senha, criação de token seguro com chave secreta.

<a name="links"></a>

<a name="techs"></a>

## 2. Tecnologias

- <a name="nodeJS" href="https://docs.nodejs.org/en/docs/" target="_blank">NodeJS</a>
- <a name="express" href="https://expressjs.com/pt-br/starter/installing.html" target="_blank">Express</a>
- <a name="Typescript" href="https://www.typescriptlang.org/docs/" target="_blank">Typescripte</a>
- <a name="jsonwebtoken" href="https://www.npmjs.com/package/jsonwebtoken" target="_blank">JSON Web Token</a>
- <a name="bcrypt" href="https://www.npmjs.com/package/bcrypt" target="_blank">Bcrypt</a>
- <a name="zod" href="https://zod.dev/" target="_blank">Zod</a>
- <a name="dotenv" href="https://www.npmjs.com/package/dotenv" target="_blank">Dotenv</a>
- <a name="postgreSQL" href="https://www.postgresql.org/docs/" target="_blank">PostgreSQL</a>

<a name="documentacao"></a>

## 3. Documentação

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=api-adm&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fkellygalliani%2Fadm-api%2Fmain%2FInsomnia_2023-03-06.json%3Ftoken%3DGHSAT0AAAAAAB4RYPAH3YWDJVQCPBDWZL4YZAGCKTA)

<a name="doc" href="https://doc-api-adm.vercel.app/" target="_blank">Link da Documentação</a>

<a name="install"></a>

## 4. Instalação e uso

### 4.1 Instalação:

git clone git@github.com:kellygalliani/API-RESTfull-crud-users-authentication.git
<br>
cd API-RESTfull-crud-users-authentication.git
<br>
npm install
<br>
npm start
<br>
optional: include .env in your .gitignore

### 4.2 Variáveis de ambiente - para conexão com o Banco de dados:

Crie a pasta .env na raiz do repositório
Copie as variáveis de ambiente que estão no .env.example
  
  DB_USER=
  <br>
  DB_HOST=
  <br>
  DB_PASSWORD=
  <br>
  DB_PORT=
  <br>
  DB=
  <br>
  SECRET_KEY=
  <br>
  APP_PORT=

Inclua as suas informações de configuração.

<a name="devs"></a>

## 5. Deselvolvedora

- <a name="kelly" href="" target="_blank">Kelly Cristina</a>

<a name="termos"></a>

## 7. Termos de uso

Este é um projeto Open Source para fins educacionais e não comerciais, **Tipo de licença** - <a name="mit" href="https://opensource.org/licenses/MIT" target="_blank">MIT</a>
