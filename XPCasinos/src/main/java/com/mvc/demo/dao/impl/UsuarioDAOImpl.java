package com.mvc.demo.dao.impl;

import org.springframework.stereotype.Repository;

import com.mvc.demo.dao.IDAOUsuario;
import com.mvc.demo.domain.entity.UsuarioEntity;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;

@Repository
public class UsuarioDAOImpl implements IDAOUsuario {

	@PersistenceContext
	private EntityManager em;
	
	@Override
	public void save(UsuarioEntity usuario) {
		try {
			em.persist(usuario);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}

	@Override
	public void merge(UsuarioEntity usuario) {
		try {
	        em.merge(usuario);
	    } catch (Exception e) {
	        System.out.println(e.getMessage());
	    }
	}
	
	@Override
	public UsuarioEntity findById(String idUsuario) {
		UsuarioEntity usuario = null;
		System.out.println(idUsuario);
		try {
			usuario = em.find(UsuarioEntity.class, idUsuario);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return usuario;
	}
	
	
}
