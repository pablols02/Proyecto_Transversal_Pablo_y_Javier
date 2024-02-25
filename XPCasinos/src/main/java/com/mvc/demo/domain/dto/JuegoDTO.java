package com.mvc.demo.domain.dto;

public class JuegoDTO {

	private Integer idJuego;
    private String nombre;
    private String foto;
    private String url;
    private CasinoDTO casino;
    
	public JuegoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JuegoDTO(String nombre, String foto, String url, CasinoDTO casino) {
		super();
		this.nombre = nombre;
		this.foto = foto;
		this.url = url;
		this.casino = casino;
	}

	public Integer getIdJuego() {
		return idJuego;
	}

	public void setIdJuego(Integer idJuego) {
		this.idJuego = idJuego;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public CasinoDTO getCasino() {
		return casino;
	}

	public void setCasino(CasinoDTO casino) {
		this.casino = casino;
	}
    
}
