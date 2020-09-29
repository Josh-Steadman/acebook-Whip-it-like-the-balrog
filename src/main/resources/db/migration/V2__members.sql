
CREATE TABLE member (
    id bigserial PRIMARY KEY,
    email varchar(100) NOT NULL,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    password varchar(100) NOT NULL
    );


CREATE TABLE member_roles (
    id bigserial PRIMARY KEY,
    MEMBER_EMAIL varchar(100) NOT NULL,
    ROLE_NAME varchar(100) NOT NULL
    );