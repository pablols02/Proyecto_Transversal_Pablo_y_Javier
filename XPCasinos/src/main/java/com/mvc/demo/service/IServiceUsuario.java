package com.mvc.demo.service;

import com.mvc.demo.domain.dto.UsuarioDTO;
import com.mvc.demo.exception.MiExcepcion;

public interface IServiceUsuario {
	public void guardarUsuario(UsuarioDTO usuarioDTO) throws MiExcepcion;
	public void actualizarUsuario(UsuarioDTO usuarioDTO);
	public UsuarioDTO obtenerUsuarioPorId(String idUsuario);
}
