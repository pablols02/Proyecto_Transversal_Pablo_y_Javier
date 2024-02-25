package com.mvc.demo.dao;

import java.util.List;

import com.mvc.demo.domain.entity.JuegoEntity;


public interface IDAOJuego {
	public JuegoEntity findById(int id);
	public List<JuegoEntity> findAll();
}
