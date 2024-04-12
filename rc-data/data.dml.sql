INSERT
    INTO
    t_countries (
        country_iso_code,
        country_name,
        country_population,
        country_area,
        capital_name,
        tld,
        flag_url,
        coat_of_arms_url,
        google_maps_url
    )
VALUES 
    ('FR', 'French Republic', 67391582, 551695.0, 'Paris', '.fr', 'https://flagcdn.com/w320/fr.png', 'https://mainfacts.com/media/images/coats_of_arms/fr.png', 'https://goo.gl/maps/g7QxxSFsWyTPKuzd7'),
    ('ES', 'Kingdom of Spain', 47351567, 505992.0, 'Madrid', '.es', 'https://flagcdn.com/w320/es.png', 'https://mainfacts.com/media/images/coats_of_arms/es.png', 'https://goo.gl/maps/138JaXW8EZzRVitY9'),
    ('GB', 'United Kingdom of Great Britain and Northern Ireland', 67215293, 242900.0, 'London', '.uk', 'https://flagcdn.com/w320/gb.png', 'https://mainfacts.com/media/images/coats_of_arms/gb.png', 'https://goo.gl/maps/FoDtc3UKMkFsXAjHA'),
    ('DE', 'Federal Republic of Germany', 83240525, 357114.0, 'Berlin', '.de', 'https://flagcdn.com/w320/de.png', 'https://mainfacts.com/media/images/coats_of_arms/de.png', 'https://goo.gl/maps/mD9FBMq1nvXUBrkv6'),
    ('IT', 'Italian Republic', 59554023, 301336.0, 'Rome', '.it', 'https://flagcdn.com/w320/it.png', 'https://mainfacts.com/media/images/coats_of_arms/it.png', 'https://goo.gl/maps/8M1K27TDj7StTRTq8');
    
-- SELECT * FROM t_countries tc;

-- TRUNCATE TABLE t_countries;