### Exercício 1
a) VARCHAR - O termo varchar refere-se a um tipo de dados de um campo (ou coluna) em um sistema de gerenciamento de banco de dados que pode conter letras e números.
DATE - tipo é usado para valores com parte de data, mas sem parte de hora.
b)SHOW DATABASES informa minha data base e SHOW TABLES minhas tabelas
c) Aprensenta o campo,tipo, se é nulo ou não, a chave e a predefinição 

### Exercício 2
b) Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' - Erro aconteceu por ser um id já existente.
c) Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1 - Os parâmetros não foram passados corretamente
d) Código de erro: 1364. O campo 'nome' não tem um valor padrão - Está faltando o parâmetro "nome"
e) Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1 - esse eu não sei :|

### Exercício 3, 4 e 5 👇
```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;

SHOW TABLES;

DESCRIBE Actor	;

SELECT * FROM Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
	
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("004", "Antônio Fagundes", 400000, "1949-04-18", "male");

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");

SELECT * from Actor WHERE gender = "female";

SELECT salary from Actor WHERE name = "Tony Ramos";

SELECT * from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary < 500000;	

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
```
### Exercício 6 e 7 👇
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", "7");

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", "10");

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", "8"); 

INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES("004", "O Auto da Compadecida", "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.", "2000-09-10 ", "10");     

SELECT id, title, rating FROM Movie WHERE id = "004";

SELECT * FROM Movie WHERE title = "O Auto da Compadecida";

SELECT id, title, synopsis FROM Movie WHERE rating > 7;

SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";

SELECT * FROM Movie
WHERE release_Date < "2020-04-04";

SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;   
```