DROP SCHEMA IF EXISTS Trybesmith;
CREATE SCHEMA IF NOT EXISTS Trybesmith;

CREATE TABLE Trybesmith.users (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  username TEXT NOT NULL,
  vocation TEXT NOT NULL,
  level INTEGER NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE Trybesmith.orders (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES Trybesmith.users (id)
);

CREATE TABLE Trybesmith.products (
  id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  amount TEXT NOT NULL,
  order_id INTEGER,
  FOREIGN KEY (order_id) REFERENCES Trybesmith.orders (id)
);

INSERT INTO
  Trybesmith.users (username, vocation, level, password)
VALUES
  ("reigal", "Warrior", 10, "1dragoninthesky"),
  ("vyrion", "Inventor", 8, "payingdebts"),
  ("yraa", "rogue", 5, "valarmorg");

INSERT INTO
  Trybesmith.orders (user_id)
VALUES
  (1),
  (3),
  (2);

INSERT INTO
  Trybesmith.products (name, amount)
VALUES
  ("short sword", "10 gold pieces");

INSERT INTO
  Trybesmith.products (name, amount, order_id)
VALUES
  (
    "unnecessarily large shield",
    "20 gold pieces",
    1
  ),
  ("Valyrian Steel Dagger", "1 gold piece", 2),
  ("Necklace of fire", "1 gold piece", 2),
  ("Random contraption", "15 gold pieces", 3);
