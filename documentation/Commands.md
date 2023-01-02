$ yarn add express dotenv sequelize pg pg-hstore
$ npm i -D typescript @types/node ts-node ts-node-dev
> generate tsConfig.json for configuration of typescript
> if any error ---> $ npm i -g typescript
> else ---> $ tsc --init
>create .env and .gitignore files
>go to sequelize official site and migration section --->then,
$ npm i sequelize-cli -D
$ npx sequelize-cli init
> to add dev credentials from .env
> for install types--->
   $ `npm i --save-dev @types/express`

https://sequelize.org/docs/v6/other-topics/migrations/
   sync() -- allow changes of model reflect database
https://www.npmjs.com/package/ts-node-dev
  > There is also short alias tsnd for running ts-node-dev:
         $ tsnd --respawn server.ts
