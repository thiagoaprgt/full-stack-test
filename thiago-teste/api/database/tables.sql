create table users (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(100) not null,
    user varchar(100) not null unique,
    email varchar(100) not null unique,
    password varchar(100) not null
);

create table taskProgress(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(100) not null
);

create table taskToDoList (

    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title varchar(100) not null,
    description varchar(1000) not null,
    taskProgress_id int not null,
    FOREIGN KEY (taskProgress_id) REFERENCES taskProgress(id),

    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES users(id)

);

INSERT INTO `users`( `name`, `user`, `email`, `password`) VALUES ('Thiago teste', 'teste', 'teste@email','456'), ('Carla', 'testando', 'testando@email','123');

INSERT INTO `taskProgress` (`name`) VALUES ('toDo'), ('inProgress'), ('Done');

INSERT INTO `taskToDoList`(`title`, `description`, `user_id`, `taskProgress_id`) VALUES ('tarefa1','descrição1', 1, 1), ('tarefa2','descriçãoABC', 1, 1) , ('tarefa2','fasfasdfas', 1, 2), ('tarefa0','descrição0', 1, 3);