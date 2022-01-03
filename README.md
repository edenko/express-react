<h1 align="center">Node.js with Express & React</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg"/>
</p>

This project combine with node express + react
* GitHub : https://github.com/edenko/express-react

## Project setup
* node
    ```
    npm install
    ```
* react 
    ```
    npx create-react-app react-project
    ```

### Run
* node
    ```
    node server.js
    ```
* react
    ```
    cd react-project/
    npm run build
    ```
Load `http://localhost:8080` to test the endpoint. It will display a result `listening on 8080`

## Requirements
* node (>= 10.5.0)
* express
* mongodb (>= 3.0)
* atlas
* react

## App Structure
> _Note: I am mentioning only files/folders which you need to configure if required_
 ```bash
node-express/
├── package-lock.json
├── package.json
├── server.js
├── public
│   └── main.html
└── react-project
    ├── build/
    ├── public/
    ├── src/
    ├── package-lock.json
    └── package.json
 ```

<!-- 
## List of API Endpoints

```sh
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /
  GET    | /login
  POST   | /login
  GET    | /write
  POST   | /add
  GET    | /list
  DELETE | /delete
  GET    | /detail/id
  GET    | /edit/id
  PATCH  | /edit/id
  GET    | /myPage
  GET    | /search
+--------+-------------------------+
```
-->

<!-- ## Screens -->

## Author
👤 **HaYoung Ko**

* Github: [@edenko](https://github.com/edenko)
* email: goodeden3@gmail.com
