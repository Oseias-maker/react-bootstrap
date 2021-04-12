

[![Netlify Status](https://api.netlify.com/api/v1/badges/0cbdee6c-641b-48f4-ac2a-1a7648fdbd0f/deploy-status)](https://app.netlify.com/sites/react-bootstrap777/deploys)

# React Bootstrap
Aplicação contendo **ReactJS** + **Bootstrap** baseado no tutorial do WebSite [Celke](https://celke.com.br/artigo/como-integrar-o-react-com-bootstrap).

**Hospeadado em: [Netlify](https://react-bootstrap777.netlify.app/)**


&nbsp;


# Requisitos


## **Ambientes de Desenvolvimento e Referências**

* IDE:    **VSCODE 1.55.1**
* [Node.js](https://nodejs.org/en/):    **version 14.16.0 (x64) and NPM**

## Instalações

**Yarn** - Através do NPM iremos instalar o gerenciador de dependências do Facebook Yarn, que é mais recomendado para se trabalhar usando o React:

```
npm install -g yarn
````

**Create-react-app** - Precisamos instalar a ferramenta de Linha de comando create-react-app que também foi desenvolvida pelo Facebook para criarmos um projeto do zero sem nos preocuparmos com bundling, otimização de arquivo e outros detalhes de configuração que podem ser extensos quando realizados manualmente:

```
npm install -g create-react-app
````


&nbsp;


# Primeiros passos para criar sua aplicação React

1 - Dentro da pasta do seu projeto, execute o seguinte comando: 
```sh
create-react-app aplicacao
```

2 - Esse comando criará vários arquivos dentro da pasta *aplicacao*, dentre eles, pacotes. Para continuarmos a instalação desses pacotes, digite o seguinte comando para acessarmos a pasta do nosso projeto:
```
cd aplicacao
````

3 - Logo após, ainda no mesmo diretório, para instalação dos pacotes do Bootstrap, execute os seguintes comandos:
```
npm install --save react react-dom
npm install --save react-bootstrap
````

4 - Para começar a programar, vamos utilizar a IDE Visual Studio Code. Para abrir o projeto nele, digite os seguintes comandos no diretório do projeto:
```
code .
````

5 - Pronto! Agora basta você desenvolver do seu jeito a sua aplicação e executa-lá para teste com o comando a seguir:
```
yarn start
````


## Vincular folha de estilos Bootstrap 3

1 - Insira o seguinte comando dentro do index.html:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```
