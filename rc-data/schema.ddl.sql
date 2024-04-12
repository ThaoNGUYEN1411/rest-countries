-- CREATE DATABASE restcountries_itp4;

CREATE TABLE t_countries (
    id serial PRIMARY KEY,
    country_iso_code char(2) NOT NULL UNIQUE,
    country_name varchar(60) NOT NULL,
    country_population integer NOT NULL,
    country_area decimal(10,2) NOT NULL,
    capital_name varchar(200) NOT NULL,
    tld char(3) UNIQUE,
    flag_url varchar(40) NOT NULL,
    coat_of_arms_url varchar(60),
    google_maps_url varchar(40) NOT NULL
);

-- DROP TABLE t_countries;