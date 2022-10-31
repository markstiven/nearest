Introdução

- O projeto desenvolvido é uma api que recebe uma requisição via post enviado pelo front ou pelo postman com os campos de longitude e latitude.
- Com as informações ele busca no excel quais os restaurantes mais próximos que o usuário irá encontrar de acordo com os dados passados.

-- Instalar e executar o projeto

1 - git clone 

2 - npm install

3 - npm run dev

Chamada API: 

endpoint: POST: http://localhost:3000/nearest

body:
{
  "longitude": "1253",
  "latitude": "9856"  
}
