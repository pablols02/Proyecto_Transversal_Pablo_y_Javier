package com.mvc.demo.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mvc.demo.dao.IDAOUsuario;
import com.mvc.demo.domain.dto.UsuarioDTO;
import com.mvc.demo.domain.entity.UsuarioEntity;
import com.mvc.demo.exception.MiExcepcion;
import com.mvc.demo.service.IServiceUsuario;

@Service
public class UsuarioServiceImpl implements IServiceUsuario {
	
	@Autowired
	private IDAOUsuario usuarioDAO;

	@Override
	@Transactional
	public void guardarUsuario(UsuarioDTO usuarioDTO) throws MiExcepcion {
		UsuarioEntity usuarioEntity = null;
		try {
			usuarioEntity = usuarioDAO.findById(usuarioDTO.getIdUsuario());
			
			if (null != usuarioEntity || usuarioDTO.getIdUsuario() == "") {
				throw new MiExcepcion(100, "Error en usuario duplicado");
			}
			usuarioEntity = new UsuarioEntity();
			usuarioEntity.setIdUsuario(usuarioDTO.getIdUsuario());
			usuarioEntity.setPasswd(usuarioDTO.getPasswd());
			usuarioEntity.setNombre(usuarioDTO.getNombre());
			usuarioEntity.setApellidos(usuarioDTO.getApellidos());
			usuarioEntity.setDni(usuarioDTO.getDni());
			
			usuarioDAO.save(usuarioEntity);
		} catch (MiExcepcion e) {
			throw e;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}

	@Override
	@Transactional
	public void actualizarUsuario(UsuarioDTO usuarioDTO) {
		UsuarioEntity usuarioEntity = new UsuarioEntity();
		usuarioEntity.setIdUsuario(usuarioDTO.getIdUsuario());
		usuarioEntity.setPasswd(usuarioDTO.getPasswd());
		usuarioEntity.setNombre(usuarioDTO.getNombre());
		usuarioEntity.setApellidos(usuarioDTO.getApellidos());
		usuarioEntity.setDni(usuarioDTO.getDni());
		usuarioEntity.setSaldo(usuarioDTO.getSaldo());
		
		try {
			usuarioDAO.merge(usuarioEntity);
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		
	}

	@Override
	@Transactional(readOnly = true)
	public UsuarioDTO obtenerUsuarioPorId(String idUsuario) {
		UsuarioEntity usuarioEntity = usuarioDAO.findById(idUsuario);
		UsuarioDTO usuarioDTO = null;
		try {
			usuarioDTO = new UsuarioDTO();
			usuarioDTO.setIdUsuario(usuarioEntity.getIdUsuario());
			usuarioDTO.setPasswd(usuarioEntity.getPasswd());
			usuarioDTO.setNombre(usuarioEntity.getNombre());
			usuarioDTO.setApellidos(usuarioEntity.getApellidos());
			usuarioDTO.setDni(usuarioEntity.getDni());
			usuarioDTO.setSaldo(usuarioEntity.getSaldo());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return usuarioDTO;
	}

}
