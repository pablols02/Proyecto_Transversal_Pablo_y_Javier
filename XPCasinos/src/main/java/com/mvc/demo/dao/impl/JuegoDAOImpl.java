package com.mvc.demo.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.mvc.demo.dao.IDAOJuego;
import com.mvc.demo.domain.entity.JuegoEntity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;

@Repository
public class JuegoDAOImpl implements IDAOJuego {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public JuegoEntity findById(int id) {
		JuegoEntity juego = null;
		try {
			juego = em.find(JuegoEntity.class, id);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return juego;
	}

	@Override
	public List<JuegoEntity> findAll() {
		List<JuegoEntity> lstJuegos = null;
		TypedQuery<JuegoEntity> query = null;
		
		try {
			query = em.createQuery("select j from JuegoEntity j ",JuegoEntity.class);
			lstJuegos = query.getResultList();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return lstJuegos;
	}

}
