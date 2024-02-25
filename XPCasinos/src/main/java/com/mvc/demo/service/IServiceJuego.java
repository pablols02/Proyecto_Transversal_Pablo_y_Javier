package com.mvc.demo.service;

import java.util.List;

import com.mvc.demo.domain.dto.JuegoDTO;

public interface IServiceJuego {
	public JuegoDTO obtenerJuegoPorId(Integer idJuego);
	public List<JuegoDTO> obtenerTodosLosJuegos();
}
