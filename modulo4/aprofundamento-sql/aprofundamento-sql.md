### Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary; - Iria apagar a tabela "salary" da coluna "Actor".
b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6); Iria alterar o nome da coluna "gender" para "sex" e com limite para 6 caracteres.
c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255); - Iria alterar o nome da coluna "gender" para "gender" e com limite para 255 caracteres.
d) Error Code: 1146. Table 'vaughan-21713073-thiago-araujo.Actorr' doesn't exist - Erro que não existe uma tabela com esse nome.   
### Exercício 5
a) SELECT COUNT(*), gender FROM Actor GROUP BY gender - Separa por gênero por duas tabelas uma de masculino e outra de feminino.

### Exercício 6
d) O meu resultado deu "certo", mas não afetou em nada.  

### Resolução dos Exercícios 1, 2, 3, 4, 5 e 6 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000, gender = "male"
WHERE id = "005";

ALTER TABLE Actorr CHANGE gender gender VARCHAR(100); 

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
    
SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT id, name FROM Actor
ORDER BY name DESC;

SELECT * FROM Actor
ORDER BY salary;

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie SET playing_limit_date = "2022-04-05"
WHERE id = "001";

UPDATE Movie SET playing_limit_date = "2022-04-05"
WHERE id = "002";

UPDATE Movie SET playing_limit_date = "2022-04-05"
WHERE id = "003";

UPDATE Movie SET playing_limit_date = "2022-04-05"
WHERE id = "004";

DELETE FROM Movie WHERE id = "001";

UPDATE Movie SET id = "001"
WHERE id = "001"; 
```