package com.mvc.demo.service;

import java.util.List;

import com.mvc.demo.domain.dto.CasinoDTO;


public interface IServiceCasino {
	public CasinoDTO obtenerCasinoPorId(Integer idCasino);
	public List<CasinoDTO> obtenerTodosLosCasinos();
}
