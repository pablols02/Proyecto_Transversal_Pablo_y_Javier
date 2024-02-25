package com.mvc.demo.dao;

import java.util.List;

import com.mvc.demo.domain.entity.CasinoEntity;


public interface IDAOCasino {
	public CasinoEntity findById(int id);
	public List<CasinoEntity> findAll();
}
