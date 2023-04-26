# Kenzie_Kars

## Endpoints da API

### Índice

- [Users](#1-users)
  - [POST - /users](#11-criação-de-usuário)
- [Announcements](#2-announcements)
  - [POST - /announcements](#21-criação-de-anúncio)
  - [GET - /announcements](#22-listando-anúncios)
  - [PATCH - /announcements/:contact_id](#23-atualizar-anúncio)
  - [DELETE - /announcements/:contact_id](#24-deletar-anúncio)
- [Login](#3-login)
  - [POST - /login](#31-login-do-usuário)

---

## 1. **Users**

O objeto User é definido como:

| Campo       | Tipo   | Descrição                                      |
| ----------- | ------ | ---------------------------------------------- |
| id          | string | Identificador único do usuário                 |
| name        | string | O nome do usuário.                             |
| email       | string | O e-mail do usuário. (Único)                   |
| cpf         | string | O CPF do usuário. (Único)                      |
| phone       | string | O telefone do usuário.                         |
| birthdate   | date   | A data de nascimento do usuário                |
| description | string | Descrição do usuário (opcional)                |
| password    | string | A senha de acesso do usuário                   |
| accountType | string | Tipo da conta. (Padrão: comprador )            |
| avatar      | string | Url da imagem do usuário (opcional)            |
| updatedAt   | date   | Data em que o usuário foi atualizado.          |
| createdAt   | date   | Data em que o usuário foi criado.              |
| address     | object | Um objeto contento as informações de endereço. |

O objeto Address é definido como:

| Campo      | Tipo   | Descrição                                 |
| ---------- | ------ | ----------------------------------------- |
| id         | string | Identificador único do endereço           |
| street     | string | O nome da rua do usuário.                 |
| number     | date   | O número do endereço do usuário           |
| complement | string | Complemeto do endereço usuário (opcional) |
| city       | string | A cidade do usuário                       |
| state      | string | O estado do usuário                       |
| zipCode    | string | O CEP do usuário                          |

### Endpoints

| Método | Rota   | Descrição              |
| ------ | ------ | ---------------------- |
| POST   | /users | Criação de um usuário. |

---

### 1.1. **Criação de Usuário**

### `/users`

### Exemplo de Request:

```

POST /users
Host: http://localhost:3001
Authorization: None
Content-type: application/json

```

### Corpo da Requisição:

```json
{
  "name": "nome",
  "email": "email@gmail.com",
  "cpf": "000.000.000-00",
  "phone": "(00) 0000-0000",
  "birthdate": "1990-05-20T00:00:00.000Z",
  "description": "descrição",
  "password": "1234",
  "accountType": "seller",
  "avatar": "http://foto",
  "address": {
    "street": "Rua 1",
    "number": "20",
    "city": "Cidade",
    "state": "SP",
    "zipCode": "17000-000"
  }
}
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "f76dce92-b102-430f-9707-fc8f6397b82c",
  "name": "nome",
  "email": "email@gmail.com",
  "cpf": "000.000.000-00",
  "phone": "(00) 0000-0000",
  "birthdate": "1990-05-20T00:00:00.000Z",
  "description": "descrição",
  "accountType": "seller",
  "avatar": "http://foto",
  "address": {
    "id": "f925dd9c-b926-4e3f-97ba-ef9fc1c160a3",
    "street": "Rua 1",
    "number": "20",
    "complement": null,
    "city": "Cidade",
    "state": "SP",
    "zipCode": "17000-000"
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição            |
| -------------- | -------------------- |
| 409 Conflict   | CPF Already Exists.  |
| 409 Conflict   | Email Already Exists |

---

## 2. **Anúncios**

O objeto Announcement é definido como:

| Campo       | Tipo    | Descrição                                           |
| ----------- | ------- | --------------------------------------------------- |
| id          | string  | Identificador único do anúncio.                     |
| brand       | string  | A marca do carro anunciado.                         |
| model       | string  | O modelo do carro anunciado.                        |
| year        | int     | O ano do carro.                                     |
| mileage     | int     | O quilometragem do carro.                           |
| price       | decimal | O preço do carro.                                   |
| priceFipe   | decimal | O preço do carro na tabela fipe.                    |
| fuelType    | string  | O tipo de combustivel                               |
| color       | string  | A cor do carro                                      |
| banner      | string  | A imagem de capa do anúncio                         |
| description | string  | Descrição do anúncio.                               |
| isActive    | boolean | O anúncio está ativo. (Padrão: true )               |
| isGoodBuy   | boolean | É uma boa compra (Padrão: false )                   |
| updatedAt   | date    | Data em que o anúncio foi atualizado.               |
| createdAt   | date    | Data em que o anúncio foi criado.                   |
| userId      | string  | Identificador único do usuário que criou o anúncio. |
| images      | array   | Lista com imagens relacionadas ao anúncio.          |
| comments    | array   | Lista com comentários relacionadas ao anúncio.      |

O objeto Image é definido como:

| Campo          | Tipo   | Descrição                                             |
| -------------- | ------ | ----------------------------------------------------- |
| id             | string | Identificador único da imagem relacionada ao anúncio. |
| imgUrl         | string | URL da imagem relacionada ao anúncio.                 |
| announcementId | string | Identificador único do anúncio relacionado            |

O objeto Comment é definido como:

| Campo          | Tipo   | Descrição                                                 |
| -------------- | ------ | --------------------------------------------------------- |
| id             | string | Identificador único do comentario relacionado ao anúncio. |
| comment        | string | O comentario relacionado ao anúncio                       |
| userId         | string | Identificador único do usuário relacionado ao comentário  |
| announcementId | string | Identificador único do anúncio relacionado                |
| updatedAt      | date   | Data em que o comentário foi atualizado.                  |
| createdAt      | date   | Data em que o comentário foi criado.                      |

### Endpoints

| Método | Rota               | Descrição                  |
| ------ | ------------------ | -------------------------- |
| POST   | /announcements     | Criação de um anúncio.     |
| GET    | /announcements     | Lista todos os anúncios    |
| GET    | /announcements/:id | Pega o anúncio por id.     |
| PATCH  | /announcements/:id | Atualiza o anúncio por id. |
| DELETE | /announcements/:id | Deleta o anúncio por id.   |

---

### 2.1. **Criação de Contato**

### `/announcements`

### Exemplo de Request:

```
POST /announcements
Host: http://localhost:3001
Authorization: Bearer token
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "brand": "Fiat",
  "model": "Mobi",
  "year": 2019,
  "mileage": 20000,
  "color": "preto",
  "price": 32000,
  "priceFipe": 27500,
  "fuelType": "flex",
  "description": "Carro em bom estado de conservação.",
  "banner": "http://example.com",
  "images": [
    {
      "imgUrl": "http://example2.com"
    }
  ]
}
```

OBS.: Chaves não presentes no schema serão removidas.

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "f49216df-a607-4cdb-9058-101fe05cfc7b",
  "brand": "Fiat",
  "model": "Mobi",
  "year": 2019,
  "mileage": 20000,
  "price": "32000",
  "priceFipe": "27500",
  "fuelType": "flex",
  "color": "preto",
  "banner": "http://example.com",
  "description": "Carro em bom estado de conservação.",
  "isActive": true,
  "isGoodBuy": false,
  "createdAt": "2023-04-20T16:27:40.568Z",
  "updatedAt": "2023-04-20T16:27:40.568Z",
  "userId": "281ddb25-e210-40f3-8a5f-66f8adf2e6d2",
  "images": [
    {
      "id": "d0b765ea-404b-4779-9e0a-95791bb5529e",
      "imgUrl": "http://example2.com",
      "announcementId": "f49216df-a607-4cdb-9058-101fe05cfc7b"
    }
  ],
  "comments": []
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                              |
| ---------------- | ------------------------------------------------------ |
| 401 Unauthorized | Missing token.                                         |
| 401 Unauthorized | Invalid token.                                         |
| 403 Forbidden    | Only sellers are allowed to perform this action.       |
| 400 Bad Request  | The data sent in the request is invalid or incomplete. |

---

---

## 3. **Login**

### 3.1. **Login do Usuário**

### `/login`

### Exemplo de Request:

```
POST /login
Host: http://localhost:3002
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "email": "exemplo@gmail.com",
  "password": "senha123"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzk4NTk3MTYsImV4cCI6MTY3OTk0NjExNiwic3ViIjoiMGJiYTc5MDUtODFkNi00ZGE5LTlmOTMtYmI3OGYxY2ZlNThiIn0.kVt4W_8ASeIhEwcyVtereLZ2J1oNm0nEhWMzo8vke3E"
}
```

### Possíveis Erros:

| Código do Erro | Descrição                |
| -------------- | ------------------------ |
| 403 Forbidden  | User or password invalid |

---
