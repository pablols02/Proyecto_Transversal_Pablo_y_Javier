package com.mvc.demo.domain.dto;

public class CasinoDTO {

	private Integer idCasino;
    private String nombre;
    
	public CasinoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CasinoDTO(String nombre) {
		super();
		this.nombre = nombre;
	}

	public Integer getIdCasino() {
		return idCasino;
	}

	public void setIdCasino(Integer idCasino) {
		this.idCasino = idCasino;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
    
}
