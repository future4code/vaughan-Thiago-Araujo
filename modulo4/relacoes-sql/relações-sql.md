### Exercício 1
a) é a chave que permite a referência a registros oriundos de outras tabelas. Ou seja, é o campo ou conjunto de campos que compõem a chave primária de uma outra tabela.
c) Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'- Erro que não pode ser duplicado

### Exercício 2
a) Cria uma tabela que recebe um "movie_id" e "actor_id"
c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails - Dá algum tipo de Restrição na FOREIGN KEY
d) Error Code: 1054. Unknown column 'id' in 'where clause' - Erro de coluna desconhecida
### Exercício 3
a) Significa EM, faça junção interna "Rating" EM "Movie"

### Exercício 1 ,2 e 3 👇 
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"007"
);

ALTER TABLE Movie DROP COLUMN rating;

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "005"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "004"
);

DELETE FROM MovieCast WHERE id = "001";

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

```