package com.maida.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.maida.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
