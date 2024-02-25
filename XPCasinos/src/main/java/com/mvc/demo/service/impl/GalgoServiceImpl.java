package com.mvc.demo.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mvc.demo.dao.IDAOGalgo;
import com.mvc.demo.domain.dto.GalgoDTO;
import com.mvc.demo.domain.entity.GalgoEntity;
import com.mvc.demo.service.IServiceGalgo;

@Service
public class GalgoServiceImpl implements IServiceGalgo {

	@Autowired
	private IDAOGalgo galgoDAO;

	@Override
	@Transactional(readOnly = true)
	public List<GalgoDTO> obtenerTodosLosGalgos() {
		List<GalgoEntity> galgosEntities = galgoDAO.findAll();
		List<GalgoDTO> galgosDTO = new ArrayList<>();
		
		for (GalgoEntity galgoEntity : galgosEntities) {
			GalgoDTO galgoDTO = new GalgoDTO();
			galgoDTO.setDorsal(galgoEntity.getDorsal());
			galgoDTO.setNombre(galgoEntity.getNombre());
			galgoDTO.setRitmo(galgoEntity.getRitmo());
			galgoDTO.setExperiencia(galgoEntity.getExperiencia());
			galgoDTO.setCuota(galgoEntity.getCuota());
			galgoDTO.setCantidadApostada(galgoEntity.getCantidadApostada());
			galgoDTO.setDistancia(galgoEntity.getDistancia());
			galgoDTO.setTerminoCarrera(galgoEntity.getTerminoCarrera());
			galgoDTO.setGanancia(galgoEntity.getGanancia());
			
			galgosDTO.add(galgoDTO);
		}
		return galgosDTO;
	}
	
	
}
