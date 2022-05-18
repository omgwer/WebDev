SET CHARACTER SET utf8;
CREATE DATABASE IF NOT EXISTS university;
USE university;
--create tables
CREATE TABLE IF NOT EXISTS faculty
(
    id INT AUTO_INCREMENT NOT NULL,
    faculty_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS student_group
(
    id INT AUTO_INCREMENT NOT NULL,
    group_name VARCHAR(255) NOT NULL,
    faculty_id INT,
    FOREIGN KEY (faculty_id) REFERENCES faculty(id),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS student
(
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    group_id INT,
    FOREIGN KEY (group_id) REFERENCES student_group(id),
    PRIMARY KEY (id)
);
-- init data
INSERT INTO
    faculty(faculty_name)
VALUES
   ('Gryffindor'),
   ('Hufflepuff'),
   ('Slytherin');

INSERT INTO
    student_group(group_name, faculty_id)
VALUES
    ('Phoenix order', 1),
    ('Dumbledore team', 1),
    ('Azkaban prisoners', 1),
    ('Friday 13', 2),
    ('Hollow knight', 2),
    ('Someone group', 2),
    ('Queen team', 3),
    ('Dream group', 3),
    ('Student IPS', 3);

INSERT INTO
    student(first_name, last_name, age, group_id)
VALUES
    ('Alexandr', 'Kislitsyn', 29, 1),
    ('Efim', 'Efimov', 5, 1),
    ('Biba', 'Bobov', 18, 1),
    ('Alexandr', 'Pistoletov', 19, 1),
    ('Vladimir', 'Vysotsky', 53, 1),
    ('Petr', 'Perviy', 44, 2),
    ('Albina', 'Balabina', 19, 2),
    ('Kratos', 'Godslayer', 18, 2),
    ('Hulk', 'Coggan', 33, 2),
    ('Jesus', 'Efimov', 33, 2),
    ('Petr', 'Perviy', 44, 3),
    ('Mikky', 'Mouse', 21, 3),
    ('Kratos', 'Godslayer', 18, 3),
    ('Hulk', 'Coggan', 33, 3),
    ('Jesus', 'Efimov', 33, 3),
    ('Adolf', 'Painter', 12, 4),
    ('Smart', 'Pointer', 2, 4),
    ('Senior', 'Developer', 29, 4),
    ('Someone', 'Atnight', 21, 4),
    ('Arnold', 'Swarchenegger', 19, 4),
    ('Tom', 'Jerry', 9, 5),
    ('Tom', 'Raddle', 33, 5),
    ('Ron', 'Wisley', 4, 5),
    ('Harry', 'Potter', 23, 5),
    ('Orange', 'Cat', 21, 5),
    ('Help', 'Me', 6, 6),
    ('Web', 'Monkey', 11, 6),
    ('Alex', 'Terrible', 33, 6),
    ('Kitty', 'Cat', 28, 6),
    ('Apple', 'Sneak', 24, 6),
    ('Old', 'Man', 99, 7),
    ('Lol', 'Kek', 56, 7),
    ('Web', 'Monkey', 12, 7),
    ('Chainsaw', 'Killer', 25, 7),
    ('Jumping', 'Monkey', 29, 7),
    ('Soviet', 'Wave', 21, 8),
    ('Joanne ', 'Rowling', 19, 8),
    ('Arnold', 'Swarchenegger', 21, 8),
    ('Alexandr', 'Kislitsyn', 19, 8),
    ('Pip', 'Boy', 33, 9),
    ('Dmitry', 'Donskoy', 21, 9),
    ('Jumper ', 'Space', 54, 9),
    ('Iosif', 'Stalin', 19, 9),
    ('Alexandr', 'Makarenko', 6, 9),
    ('Ivan', 'Grozny', 19, 9);

-- search query
-- search all student of age = 19
SELECT
    first_name,
    last_name, age, group_name, faculty_name
FROM
    student AS s
    LEFT JOIN student_group AS sg ON s.group_id = sg.id
    LEFT JOIN faculty AS f ON sg.faculty_id = f.id
WHERE
    age = 19;

-- get all student of selected group
SELECT first_name, last_name, age, group_name, faculty_name
FROM
    student AS s
    LEFT JOIN student_group AS sg ON s.group_id = sg.id
    LEFT JOIN faculty AS f ON sg.faculty_id = f.id
    WHERE group_name = 'Dumbledore team';

-- get all student of selected faculty
SELECT first_name, last_name, age, group_name, faculty_name
FROM
    student AS s
    LEFT JOIN student_group AS sg ON s.group_id = sg.id
    LEFT JOIN faculty AS f ON sg.faculty_id = f.id
WHERE faculty_name = 'Slytherin';

-- get student info of selected student
SELECT first_name, last_name, age, group_name, faculty_name
FROM
    student AS s
    LEFT JOIN student_group AS sg ON s.group_id = sg.id
    LEFT JOIN faculty AS f ON sg.faculty_id = f.id
WHERE first_name = 'Alexandr' AND last_name = 'Kislitsyn';