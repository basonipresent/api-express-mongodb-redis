# api-express-mongodb-redis
Backend Performance Optimization with Redis Caching, Node.JS, and MongoDB

## what is backend?
Back-end adalah bagian yang berjalan di belakang layar dari sebuah aplikasi berbasis web atau mobile, yang bertugas untuk mengatur logika dan mengolah data-data yang di butuhkan oleh web application atau mobile application.

![alt text](https://reinvently.com/wp-content/uploads/2019/08/scheme.jpg)

### backend technologies stack elements:

[.] Programming languages: Beberapa contohnya adalah JavaScript, PHP, Python, dan Ruby.
[.] Framework: Node.js, Laravel, Django, dan Ruby on Rails adalah beberapa kerangka kerja yang populer.
[.] Server: Server pada backend untuk mengelola permintaan klien. Apache, Nginx, dan Microsoft's Internet Information Server (IIS) adalah contoh server web yang bagus.
[.] Database: Ini adalah ruang digital untuk menyimpan data (dokumen kata, halaman web, file MP3). MongoDB, PostgreSQL, dan MySQL adalah database yang umum.

## why we should optimization performance on backend?
Kecepatan situs web memberikan kesan pertama tentang sebuah bisnis. 
*"Penting untuk dipahami bahwa Anda tidak akan mendapatkan kesempatan kedua dalam hal pengalaman pengguna."* 
Kecepatan situs web yang rendah menjadi salah satu faktor yang mempengaruhi orang-orang berfikir tentang sumber daya yang dimiliki pada bisnis tersebut.

### ways

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
### result from database mongoDB
![alt text](https://github.com/basonipresent/api-express-mongodb-redis/blob/main/test/result/res-no-cache-1.jpeg?)
![alt text](https://github.com/basonipresent/api-express-mongodb-redis/blob/main/test/result/res-no-cache-2.jpeg)
### result from redis-cache
![alt text](https://github.com/basonipresent/api-express-mongodb-redis/blob/main/test/result/res-cache-1.jpeg)
![alt text](https://github.com/basonipresent/api-express-mongodb-redis/blob/main/test/result/res-cache-2.jpeg)

## references
[1] NodeJS + Redis = Improved Performance,  
  https://medium.com/analytics-vidhya/nodejs-redis-improved-performance-3ad9b3a1589d
[2] https://github.com/craighillwood/rest-api-express-mongodb-redis
[3] Tips and Techniques to Speed Up and Improve Your Node.js Performance, 
  https://medium.com/skyshidigital/6-tricks-to-speed-up-and-improve-your-node-js-performance-fadc06d15cbe
