create table users (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(100) not null,
    users varchar(100) not null,
    email varchar(100) not null unique,
    password varchar(100) not null
);

create table taskToDoList (

    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title varchar(100) not null,
    description varchar(1000) not null,
    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES users(id)

);

INSERT INTO `users`( `name`, `users`, `email`, `password`) VALUES ('Thiago teste', 'teste','teste@email','456'), ('Carla', 'testando','testando@email','123');

INSERT INTO `taskToDoList`(`title`, `description`, `user_id`) VALUES ('tarefa1','descrição1', 1) , ('tarefa2','fasfasdfas', 1);