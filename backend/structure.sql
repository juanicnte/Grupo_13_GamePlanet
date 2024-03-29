CREATE DATABASE gameplanet_db;
USE gameplanet_db;

/*
La idea es no eliminar la base de datos si existe, es algo muy delicado por lo que sólo se pone la creación
La idea es hacer las relaciones de uno a muchos o de muchos a muchos con las compras realizadas de usuarios
que tendrán su detalle y también el carrito de compras pero no se harán las relaciones de 
categoría, clasificación para no complicar esa parte de la base de datos, de igual forma se hará
con los perfiles de usuarios

Tener en cuenta que el campo clasificación no es obligatorio es decir sin clasificación jaja corregir en el front
Una compra supongo que no se puede modificar por eso no tiene el campo de actualizar

En users guardar el usuario que lo creó, es decir un admin o el mismo usuario
El diagrama ENTIDAD RELACIÓN EN DÓNDE LO DEBO GUARDAR????????????
*/ 
CREATE TABLE `categories` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `description` VARCHAR(200) NULL    
);

CREATE TABLE `products` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(50) NOT NULL,
    `description` VARCHAR(500) NULL,
    `price` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `inOffer` BOOLEAN NOT NULL,
    `image` VARCHAR(50) NOT NULL,/*
    `createdAt` TIMESTAMP NOT NULL,
    `updatedAt` TIMESTAMP NULL,*/
    FOREIGN KEY (categoryId) REFERENCES categories(id)
);

CREATE TABLE `users` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `fullName` VARCHAR(50) NOT NULL,
    `user` VARCHAR(20) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(200)  NULL,
    `perfil` VARCHAR(10) NOT NULL,
    `birthDay` TIMESTAMP  NOT NULL,
    `image` VARCHAR(50) NOT NULL/*,
    `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `updatedAt` TIMESTAMP NULL*/
);
/*VERSIÓN 2
CREATE TABLE "shoppingCart" (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    productId INTEGER NOT NULL,
    userId INTEGER NOT NULL,
    units INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NULL,
    FOREIGN KEY (productId) REFERENCES products(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);


CREATE TABLE "shopping" (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    bill VARCHAR NOT NULL,
    userId INTEGER NOT NULL,
    units INTEGER NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id)
);


CREATE TABLE "shoppingDetail" (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    shoppingId INTEGER NOT NULL,
    productId INTEGER NOT NULL,
    units INTEGER NOT NULL,
    FOREIGN KEY (productId) REFERENCES products(id)
);
*/