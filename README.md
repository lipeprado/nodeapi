# A Node Api Project

## Features

- Authentication Local + JWT
- User can Create a Post
- User can Delete and Update
- User can follow an other one
- User get notification of Following new post
- User can Like a Post
- User can see all the post they like

### Tech

- Node
- Es6 + ES7
- Babel
- Webpack
- MongoDb
- Express
- eslint
- Mongo Compass
- Postman

### Mongo

- mongose
- body-parser
- morgan
- compression
- helmet

### Authentication

- Bcrypt
- Passport
- rimraf

### Token

- Passport JWT
- jsonWebToken

### Validation

- joi
- express-validation

### Dev

- Prettier
- rimraf
- morgan

### Routes

#### Register User

- *POST* /api/v1/users/signup

#### Login With User `JWT token`

- *POST* /api/v1/users/login

#### Create Post `req with token`

- *POST* /api/v1/posts `body: { :title, :text }`

#### List All Posts `req with token`

- *GET* /api/v1/posts

#### Get Post by Id `req with token`

- *GET* /api/v1/posts/:id `res: { :post, :user_id, :favorite}`

#### Get Posts With Pagination `req with token`

- *GET* api/v1/posts?limit=5&skip=0 `res: { :posts, 5 first}`

#### Update Post `req with token`

- *GET* /api/v1/posts/:id `body: { :title, :text }`

#### Delete Post `req with token`

- *DELETE* /api/v1/posts/:id

#### Favorite Post `req with token`

- *DELETE* /api/v1/posts/:id/favorite `res: { :posts with true or false}`
