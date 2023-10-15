CREATE TABLE `users` (
`id` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR(20) NOT NULL,
`password` VARCHAR(40) NOT NULL,
`display_name` VARCHAR(20) NOT NULL,
`profile_image_link` VARCHAR(128) NOT NULL,
`profile_message` VARCHAR(200) NOT NULL,
`is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
`date_joined` DATETIME NOT NULL,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(40) NOT NULL,
`created_by` INT NOT NULL,
`channel_link` VARCHAR(128) NOT NULL,
`capacity` INT NOT NULL,
`is_deleted` TINYINT(1) NOT NULL DEFAULT 0,
`created_at` DATETIME NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table chats(
id int not null auto_increment,
chat_message text not null,
chat_by int not null,
channel int not null,
created_at datetime not null,
primary key(id),
foreign key (chat_by) references users(id) on delete cascade,
foreign key (channel) references channels(id) on delete cascade)
engine=innodb default charset=utf8;

CREATE TABLE `blocks` (
`id` INT NOT NULL AUTO_INCREMENT,
`blocked_by` INT NOT NULL,
`blocked_user` INT NOT NULL,
`created_at` DATETIME NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`blocked_by`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`blocked_user`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
`id` INT NOT NULL AUTO_INCREMENT,
`follower` INT NOT NULL,
`followee` INT NOT NULL,
`created_at` DATETIME NOT NULL,
PRIMARY KEY (`id`),
FOREIGN KEY (`follower`) REFERENCES `users`(`id`) ON DELETE CASCADE,
FOREIGN KEY (`follower`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;