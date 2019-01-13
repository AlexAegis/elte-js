insert into person (first_name, last_name) values ('User', 'A');
insert into person (first_name, last_name) values ('User', 'S');
insert into person (first_name, last_name) values ('User', 'D');

insert into user (username, password, active, person_id) values ('a', '$2a$10$ukMhMWI/6GCu62P0Ag9KM.ka8OZ5584Tl0VQ9vKonck1eMMqW8IwK', true, select id from person where first_name = 'User' and last_name = 'A'); -- string
insert into user (username, password, active, person_id) values ('s', '$2a$10$ukMhMWI/6GCu62P0Ag9KM.ka8OZ5584Tl0VQ9vKonck1eMMqW8IwK', true, select id from person where first_name = 'User' and last_name = 'S'); -- string
insert into user (username, password, active, person_id) VALUES ('d', '$2a$10$ukMhMWI/6GCu62P0Ag9KM.ka8OZ5584Tl0VQ9vKonck1eMMqW8IwK', true, select id from person where first_name = 'User' and last_name = 'D'); -- string

insert into authority_group (name) values ('admin');
insert into authority_group (name) values ('user');

insert into authority_group_users (groups_id, users_id) values (select id from authority_group where name = 'admin', select id from user where username = 'a');
insert into authority_group_users (groups_id, users_id) values (select id from authority_group where name = 'user', select id from user where username = 'a');
insert into authority_group_users (groups_id, users_id) values (select id from authority_group where name = 'user', select id from user where username = 'd');
insert into authority_group_users (groups_id, users_id) values (select id from authority_group where name = 'user', select id from user where username = 's');

insert into authority (authority, group_id) values ('ADMIN', select id from authority_group where name = 'admin');
insert into authority (authority, group_id) values ('USER', select id from authority_group where name = 'user');
