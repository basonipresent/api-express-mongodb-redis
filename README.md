# api-express-mongodb-redis
Backend Performance Optimization with Redis Caching, Node.JS, and MongoDB

## required stack
> Redis server v=5.0.7    -Latest

> MongoDB                 -Latest

> Node v10.19.0           -Latest

> Npm 6.14.4              -Latest


## what is restful api?

## what is caching?

## create node project
`npm init`

## install dependencies
`npm install express mongoose redis helmet dotenv winston rotating-file-stream --save-dev`

## create structure project
```js 
var structureFolder = (
<logs></>
<src>
  <app>
    <app.js />
    <config.js />
  </app>
  <controllers />
  <db>
    <index.js />
  </db>
  <middlewares />
  <module />
  <routes />
  <utils>
    <error.js />
    <logger.js />
    <redis.js />
  </utils>
  <index.js />
</src>
<test/>
);
```

## 