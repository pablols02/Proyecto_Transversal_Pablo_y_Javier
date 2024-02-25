package com.mvc.demo.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mvc.demo.dao.IDAOJuego;
import com.mvc.demo.domain.dto.CasinoDTO;
import com.mvc.demo.domain.dto.JuegoDTO;
import com.mvc.demo.domain.entity.CasinoEntity;
import com.mvc.demo.domain.entity.JuegoEntity;
import com.mvc.demo.service.IServiceJuego;

@Service
public class JuegoServiceImpl implements IServiceJuego {

	@Autowired
	private IDAOJuego juegoDAO;
	
	@Override
	public JuegoDTO obtenerJuegoPorId(Integer idJuego) {
		JuegoEntity juegoEntity = juegoDAO.findById(idJuego);
		JuegoDTO juegoDTO = new JuegoDTO();
		
		juegoDTO.setIdJuego(juegoEntity.getIdJuego());
		juegoDTO.setNombre(juegoEntity.getNombre());
		juegoDTO.setFoto(juegoEntity.getFoto());
		juegoDTO.setUrl(juegoEntity.getUrl());
		
		CasinoEntity casinoEntity = juegoEntity.getCasino();
		CasinoDTO casinoDTO = new CasinoDTO();
		casinoDTO.setIdCasino(casinoEntity.getIdCasino());
		casinoDTO.setNombre(casinoEntity.getNombre());
		juegoDTO.setCasino(casinoDTO);
		
		return juegoDTO;
	}

	@Override
	public List<JuegoDTO> obtenerTodosLosJuegos() {
		List<JuegoEntity> juegosEntities = juegoDAO.findAll();
		List<JuegoDTO> juegosDTO = new ArrayList<>();
		
		for (JuegoEntity juegoEntity : juegosEntities) {
			JuegoDTO juegoDTO = new JuegoDTO();
			juegoDTO.setIdJuego(juegoEntity.getIdJuego());
			juegoDTO.setNombre(juegoEntity.getNombre());
			juegoDTO.setFoto(juegoEntity.getFoto());
			juegoDTO.setUrl(juegoEntity.getUrl());
			
			CasinoEntity casinoEntity = juegoEntity.getCasino();
			CasinoDTO casinoDTO = new CasinoDTO();
			casinoDTO.setIdCasino(casinoEntity.getIdCasino());
			casinoDTO.setNombre(casinoEntity.getNombre());
			juegoDTO.setCasino(casinoDTO);
			
			juegosDTO.add(juegoDTO);
		}
		return juegosDTO;
	}

}
