package co.simplon.restcountries.business.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.simplon.restcountries.business.dtos.CountryAdminView;
import co.simplon.restcountries.business.dtos.CountryView;
import co.simplon.restcountries.business.entities.Country;

//import co.simplon.restcountries.business.entities.country;

@Repository
public interface CountryJpaRepository extends JpaRepository<Country, Long> {
    /*
     * findAll = SELECT ALL ProjectedBy = only columms for CountryView
     *
     * orderByCountryName = ORDER BY country_name ASC;
     */
    List<CountryView> findAllProjectedByOrderByCountryName();

    CountryView findProjectedById(Long id);

    List<CountryAdminView> findAllProjectedByOrderByIsoCode();

    boolean existsByIsoCode(String value);

    boolean existsByIsoCodeIgnoreCase(String value);

    boolean existsByTldIgnoreCase(String value);
}
