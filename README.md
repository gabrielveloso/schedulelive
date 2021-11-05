# Angular Schedule Live
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/gabrielveloso/dsvendas-sds/blob/main/LICENSE) 

<p align="center">
 <a href="#about-the-project">About</a> •
 <a href="#layout-web">Layout web</a> • 
 <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> •
 <a href="#autor">Autor</a>
</p>

# About the project

Angular 11 aplication using Angular Material

With this application it is possible to register lives and also see a board with past and future lives


## Layout web
![WEB](https://github.com/gabrielveloso/schedulelive/blob/master/screen1.png)
![MOBILE](https://github.com/gabrielveloso/schedulelive/blob/master/screen2.png)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Mongodb
- Maven
#### Endpoints backend
    
    GET
    - /lives (Pageable)
    - /sales/{id}

    POST
    - /lives 

    DELETE
    - /lives/{id} 


## Front end
- HTML / CSS / JS / TypeScript
- Angular 
- libs: 
    - Angular Material [(Interface in Material Design Style)](https://material.angular.io/)
    - Angular Flex-Layout [(Lib for build Grid) ](https://www.npmjs.com/package/@angular/flex-layout)
    - Moment [(A JavaScript date library for parsing, validating, manipulating, and formatting dates.)](https://www.npmjs.com/package/moment)



# Como executar o projeto

## Back end
Pré-requisitos: Java 11

```bash
# clonar repositório
git clone https://github.com/gabrielveloso/schedulelive

# entrar na pasta do projeto back end
cd backend

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/gabrielveloso/schedulelive

# entrar na pasta do projeto front end web
cd schedulelive

# instalar dependências
npm install

# executar o projeto
npm start
```

# Autor

Gabriel Veloso

https://www.linkedin.com/in/gabriel-azuirson/