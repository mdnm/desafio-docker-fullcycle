# Desafio Nginx com NodeJs

O desafio consistia em praticar a utilização do nginx como proxy reverso. Quando um usuário acessar o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql.

O retorno da aplicação node.js para o nginx deveria ser: `<h1>Full Cycle Rocks!</h1>` e uma lista dos nomes cadastrados no banco de dados.

Para executar as imagens (acesso pela porta 8080): `docker-compose up -d` 