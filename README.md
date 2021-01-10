# api-express-mongodb-redis
Backend Performance Optimization with Redis Caching, Node.JS, and MongoDB

## what is backend application?

## what is cache?

## architecture backend with caching

## required stack
> Redis server v=5.0.7    -Latest

> MongoDB                 -Latest

> Node v10.19.0           -Latest

> Npm 6.14.4              -Latest


## create node project
```
npm init
```

## install dependencies
install dependencies from package.json
```
npm install
```

## create structure project
```js 
var structure = (
<logs />
<src>
  <app>
    <app.js />
    <config.js />
  </app>
  <controllers>
    <users.js />
  </controllers>
  <db>
    <index.js />
  </db>
  <middlewares>
    <create-request-id.js />
    <log.js />
  </middlewares>
  <models>
    <user.js />
  </models>
  <routes>
    <users.js />
  </routes>
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

## demo
### result without cache

### result with cache