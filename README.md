# Angular Schedule Live
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/gabrielveloso/dsvendas-sds/blob/main/LICENSE) 

<p align="center">
 <a href="#about-the-project">About</a> •
 <a href="#layout-web">Layout web</a> • 
 <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> •
 <a href="#autor">Autor</a>
</p>

# About the project

https://dsvendas-gabriel.netlify.app/

Angular 11 aplication using Angular Material

With this application it is possible to register lives and also see a board with past and future lives

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- JPQL
- Maven
#### Endpoints backend
    * Heroku: https://gabriel-sdsvendas.herokuapp.com/
    - /sales (Pageable)
    - /sales/amount-by-seller (JPQL)
    - /sales/success-by-seller (JPQL)
    - /sellers (Pageable)


## Front end
- HTML / CSS / JS / TypeScript
- Angular 
- libs: 
    - Angular Material [(Interface in Material Design Style)](https://material.angular.io/)
    - Angular Flex-Layout [(Lib for build Grid) ](https://www.npmjs.com/package/@angular/flex-layout)

## Implantação em produção
- Back end: Heroku
    - Command used: <br> 
    <i>heroku login</i> <br>
    <i>git subtree --prefix backend heroku main</i>
- Front end web: Netlify
- Banco de dados: Postgresql

# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/gabrielveloso/schedule-live

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/gabrielveloso/schedule-live

# entrar na pasta do projeto front end web
cd schedule-live

# instalar dependências
npm  install

# executar o projeto
npm start
```

# Autor

Gabriel Veloso

https://www.linkedin.com/in/gabriel-azuirson/