create table students(id int not null auto_increment,
admission_year int not null,
major varchar(20) not null,
student_number varchar(20) not null,
phone_number varchar(15) not null,
address varchar(100) not null,
total_credit int not null default 0,
avg_credit double not null default 0.0,
attending tinyint(1) not null default 1,
primary key (id))
engine = innodb default charset=utf8;

alter table students drop student_number;

alter table students add individual_number int not null;