-- ============================ [공통] ============================
-- 데이터베이스 목록 보기
SHOW databases;

-- 데이터베이스 선택
USE kdt;

-- 테이블 확인
SHOW tables;



-- ============================ [DDL] ============================
-- 테이블 생성
-- 고객(Customer) 테이블의 기본키 설정
-- 기본 키 중복 불가능
-- NULL 불가능
DROP TABLE IF EXISTS customer;
CREATE TABLE customer (
    user_id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

-- 고객(Customer) 테이블 데이터 추가 
INSERT INTO customer (user_id, name, birthday) VALUES ('aaa', '김이현', '1990-03-17');
INSERT INTO customer (user_id, name, birthday) VALUES ('bbb', '최지율', '1992-11-01');
INSERT INTO customer (user_id, name, birthday) VALUES ('ccc', '이혜진', '1993-05-31');
INSERT INTO customer (user_id, name, birthday) VALUES ('ddd', '박시은', '1992-05-31');
INSERT INTO customer (user_id, name, birthday) VALUES ('eee', '서지우', '1993-07-31');
INSERT INTO customer (user_id, name, birthday) VALUES ('fff', '이세은', '1992-08-31');
INSERT INTO customer (user_id, name, birthday) VALUES ('ggg', '윤승희', '1990-10-31');

-- 고객(Customer) 테이블 정보 확인
SELECT * FROM customer;

DROP TABLE IF EXISTS orderlist;
CREATE TABLE orderlist (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
	FOREIGN KEY (customer_id) REFERENCES customer(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);

-- 고객(Orderlist) 테이블 데이터 추가 
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '맥북m1', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '빅파이', 31);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '키보드', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('bbb', '초코파이', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '귀여운텀블러', 1);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('eee', '귤', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ddd', '불닭볶음면', 2);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('eee', '오감자', 5);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ccc', '오징어집', 8);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ddd', '프링글스', 3);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('fff', '초코파이', 7);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('ggg', '빼빼로', 10);
INSERT INTO orderlist (customer_id, product_name, quantity) VALUES ('aaa', '홈런볼', 2);


-- 고객(Orderlist) 테이블 정보 확인
SELECT * FROM orderlist;



-- ============================ [DCL] ============================
-- MySQL 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY '1234'; 
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- MySQL 비번 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';
