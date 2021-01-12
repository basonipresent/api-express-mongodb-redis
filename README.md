# api-express-mongodb-redis

Backend Performance Optimization with Redis Caching, Node.JS, and MongoDB

## what is backend?

Back-end adalah bagian yang berjalan di belakang layar dari sebuah aplikasi berbasis web atau mobile, yang bertugas untuk mengatur logika dan mengolah data-data yang di butuhkan oleh web application atau mobile application.

![alt text](https://reinvently.com/wp-content/uploads/2019/08/scheme.jpg)

### backend technologies stack elements

* Programming languages: Beberapa contohnya adalah JavaScript, PHP, Python, dan Ruby.
* Framework: Node.js, Laravel, Django, dan Ruby on Rails adalah beberapa kerangka kerja yang populer.
* Server: Server pada backend untuk mengelola permintaan klien. Apache, Nginx, dan Microsoft's Internet Information Server (IIS) adalah contoh server web yang bagus.
* Database: Ini adalah ruang digital untuk menyimpan data (dokumen kata, halaman web, file MP3). MongoDB, PostgreSQL, dan MySQL adalah database yang umum.

## why we should optimization performance on backend?

Kecepatan situs web memberikan kesan pertama tentang sebuah bisnis.
*"Penting untuk dipahami bahwa Anda tidak akan mendapatkan kesempatan kedua dalam hal pengalaman pengguna."*
Kecepatan situs web yang rendah menjadi salah satu faktor yang mempengaruhi orang-orang berfikir tentang sumber daya yang dimiliki pada bisnis tersebut.

Menurut penelitian Hubspot, *penundaan 1 detik berarti pengurangan konversi sebesar 7 persen. Misalnya, pelambatan halaman selama 1 detik dapat menghabiskan penjualan Amazon $ 1,6 miliar setiap tahun.*

### tips and technologies to optimization performance in node.js

1. Caching Your App with Redis **
2. Make sure your query is Optimized
3. Check All Error Scripts with Logging
4. Implement HTTP/2
5. Clustering Your Node .js
6. Use Realtime App Monitor to Analysis your App

## what is cache?

Cache dapat diartikan sebagai sebuah kegiatan dimana Anda menggunakan kembali data dari permintaan sebelumnya dengan tujuan mempercepat permintaan di waktu yang akan datang.

### type of caching

Secara luas, ada dua jenis proses caching – server dan browser. Browser caching dilakukan di sisi client (user), sementara caching server dilakukan di server.

## architecture backend with caching (server-side caching)

![alt text](https://miro.medium.com/max/4328/1*9eGjwJJQ9z77xFaUqF2hGw.png)

## required

* Redis server
* MongoDB
* Node
* Npm

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

* NodeJS + Redis = Improved Performance,  
  <https://medium.com/analytics-vidhya/nodejs-redis-improved-performance-3ad9b3a1589d>
* <https://github.com/craighillwood/rest-api-express-mongodb-redis>
* Tips and Techniques to Speed Up and Improve Your Node.js Performance,
  <https://medium.com/skyshidigital/6-tricks-to-speed-up-and-improve-your-node-js-performance-fadc06d15cbe>
* How Page Load Time Affects Conversion Rates: 12 Case Studies [Infographic], <https://blog.hubspot.com/marketing/page-load-time-conversion-rates>
