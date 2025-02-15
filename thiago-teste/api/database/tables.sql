create table coopers.users (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(100) not null,
    user varchar(100) not null unique,
    email varchar(100) not null unique,
    password varchar(100) not null
);

create table coopers.taskProgress(
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(100) not null
);

create table coopers.taskToDoList (

    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,    
    description varchar(1000) not null,
    taskProgress_id int not null,
    FOREIGN KEY (taskProgress_id) REFERENCES taskProgress(id),

    user_id int not null,
    FOREIGN KEY (user_id) REFERENCES users(id)

);

INSERT INTO `coopers`.`users`( `name`, `user`, `email`, `password`) VALUES ('Thiago teste', 'teste', 'teste@email','456'), ('Carla', 'testando', 'testando@email','123');

INSERT INTO `coopers`.`taskProgress` (`name`) VALUES ('toDo'), ('Done');

INSERT INTO `coopers`.`taskToDoList`(`description`, `user_id`, `taskProgress_id`) VALUES ('descrição1', 1, 1), ('descriçãoABC', 1, 1) , ('fasfasdfas', 1, 2)