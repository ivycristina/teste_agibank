# Automações de Testes Web Blog Agibank

Esse projeto implementa 2 cenários automatizados do blog da agibank para Avaliação Técnica

> Utilizando a stack: Javascript + Cucumber + cypress, esse projeto tem o intuito de implementar a automação de cenários do blog "https://blog.agibank.com.br/"

[![Cypress Version][cypress-image][cypress-url]]
[![Cucumber Version][cucumber-image]][cucumber-url]]
[![Javascript Version][javascript-image][javascript-url]]

## Arquitetura do projeto

Toda descrição e explicação sobre a arquitetura do projeto pode ser vista [aqui](https://drive.google.com/file/d/1JnrR4z01-a3m4alm7hE7L8k_z_Q3N7oa/view?usp=sharing). 


## Execução

Para executar os testes, faça toda a configuração do seu ambiente, e faça o clone do projeto em sua máquina.

* para instalar as dependencias, acesse o diretório do projeto pelo seu console, e execute o comado:

```sh
npm install
```
* após concluir a instalação, para executar o teste, execute o comando abaixo, substituindo "@tag" para a tag do teste que você deseja executar.

```sh
cucumber -t @suatag
```

* para gerar o report execute o comado:

```sh
cucumber --format html --out=report.htm
```


[javascript-image]: https://img.shields.io/badge/logo-javascript-blue?logo=javascript
[javascript-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Introduction
[cypress-image]: https://www.battery.com/wp-content/uploads/2021/03/Cypress_logo_Color-website.png
[cypress-url]: https://docs.cypress.io/app/get-started/why-cypress
[cucumber-image]: https://img.shields.io/badge/cucumber-using-brightgreen
[cucumber-url]: https://cucumber.io/
