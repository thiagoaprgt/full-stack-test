create table taskToDoList (

    id int(100) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title varchar(100) not null,
    description varchar(10000) not null

);

INSERT INTO `taskToDoList`(`title`, `description`) VALUES ('tarefa1','descrição1') , ('tarefa2','fasfasdfas');