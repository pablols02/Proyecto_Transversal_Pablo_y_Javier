package com.mvc.demo.dao;

import com.mvc.demo.domain.entity.UsuarioEntity;

public interface IDAOUsuario {
	public void save(UsuarioEntity usuario);
	public void merge(UsuarioEntity usuario);
	public UsuarioEntity findById(String idUsuario);
}
