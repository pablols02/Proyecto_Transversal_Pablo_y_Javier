package com.mvc.demo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mvc.demo.dao.IDAOGalgo;
import com.mvc.demo.domain.entity.GalgoEntity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class GalgoDAOImpl implements IDAOGalgo {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public List<GalgoEntity> findAll() {
		List<GalgoEntity> lstGalgos = null;
		TypedQuery<GalgoEntity> query = null;
		
		try {
			query = em.createQuery("select g from GalgoEntity g ",GalgoEntity.class);
			lstGalgos = query.getResultList();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lstGalgos;
	}

}
