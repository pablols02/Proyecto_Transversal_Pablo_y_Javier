package com.mvc.demo.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mvc.demo.dao.IDAOCasino;
import com.mvc.demo.domain.dto.CasinoDTO;
import com.mvc.demo.domain.entity.CasinoEntity;
import com.mvc.demo.service.IServiceCasino;

@Service
public class CasinoServiceImpl implements IServiceCasino {

	@Autowired
	private IDAOCasino casinoDAO;
	
	@Override
	@Transactional(readOnly = true)
	public CasinoDTO obtenerCasinoPorId(Integer idCasino) {
		CasinoEntity casinoEntity = casinoDAO.findById(idCasino);
		CasinoDTO casinoDTO = null;
	    	try {
	    		casinoDTO = new CasinoDTO();
	    		casinoDTO.setIdCasino(casinoEntity.getIdCasino());
	    		casinoDTO.setNombre(casinoEntity.getNombre());
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}

	    return casinoDTO;
	}

	@Override
	@Transactional(readOnly = true)
	public List<CasinoDTO> obtenerTodosLosCasinos() {
		List<CasinoEntity> casinosEntities = casinoDAO.findAll();
	    List<CasinoDTO> casinosDTO = new ArrayList<>();
	    for (CasinoEntity casinoEntity : casinosEntities) {
	    	CasinoDTO casinoDTO = new CasinoDTO();
	    	casinoDTO.setIdCasino(casinoEntity.getIdCasino());
	    	casinoDTO.setNombre(casinoEntity.getNombre());
	    	casinosDTO.add(casinoDTO);
	    }
	    return casinosDTO;
	}

}
