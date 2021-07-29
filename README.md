## Trabalhando com projetos Legados: Introdução ao AngularJS

A Digital Innovation One junto com a Take, criaram uma parceria
para que trilhas fossem criadas com o intuito de formar mais desenvolvedores
nessa aula vocês construíremos do zero uma aplicação em AngularJS.

os arquivos para a aula estão no repositório público:
https://github.com/mhnakashima/dio-angularjs-base

### Para rodar a aplicação

- Baixar o repositório (zip) ou clonar na sua máquina - git clone https://github.com/mhnakashima/dio-angularjs-base
- Ter o node instalado **(https://nodejs.org/en/download/)**;
- Abrir pasta do projeto
- npm i

### Documentação

- https://docs.angularjs.org/guide

### Styleguide AngularJS (John Papa)
- https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

### Algumas das principais diretivas que utilizamos
 
|ng-app | Declara um elemento como o elemento raiz da aplicação, ocasionando a mudança do comportamento padrão da tag.  |
|ng-controller|Especifica um controller JavaScript para aquele HTML em questão.|
|ng-model |É similar ao ng-bind, mas permite ligação direta bidirecional (two-way data binding ) entre a view e o escopo do aplicativo.  |
|ng-class | Permite atributos de classe serem carregados dinamicamente. ng-class="{'test': obj.value1 == 'someothervalue' || obj.value2 == 'somethingelse'}"|
|ng-click| Permite instanciar o evento de click, semelhante ao onclick.|
|ng-repeat |Instância um elemento por item de um array. |
|ng-show & ng-hide | Mostra ou esconde um elemento HTML de acordo com o resultado de uma expressão booleana. |
|ng-switch| Instancia um template, em uma lista de escolhas, dependendo do valor obtido pela expressão.|
|ng-if|Declaração básica de um 'if' que permite mostrar um elemento se a condição for verdadeira.|

entre outras

### Exercícios
- Criar um cadastro de uma pessoa
- Como criar um evento de apagar um item de um array?
- Editar esse registro de Pessoas 
- Apagar um registro do Array de pessoas
- Colocar validações preenchimento do cadastro

