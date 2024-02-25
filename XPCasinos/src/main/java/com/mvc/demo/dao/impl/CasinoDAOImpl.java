package com.mvc.demo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mvc.demo.dao.IDAOCasino;
import com.mvc.demo.domain.entity.CasinoEntity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class CasinoDAOImpl implements IDAOCasino {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public CasinoEntity findById(int id) {
		CasinoEntity casino = null;
		try {
			casino = em.find(CasinoEntity.class, id);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return casino;
	}

	@Override
	public List<CasinoEntity> findAll() {
		List<CasinoEntity> lstCasinos = null;
		TypedQuery<CasinoEntity> query = null;
		
		try {
			query = em.createQuery("select c from CasinoEntity c ",CasinoEntity.class);
			lstCasinos = query.getResultList();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lstCasinos;
	}

}
