package com.mvc.demo.domain.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "JUEGO")
public class JuegoEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqJuego")
    @SequenceGenerator(name = "seqJuego", allocationSize = 1, sequenceName = "SEQ_JUEGO")
    @Column(name = "ID_JUEGO")
    private Integer idJuego;
	
	@Column(name = "NOMBRE")
    private String nombre;
	
	@Column(name = "FOTO")
    private String foto;
	
	@Column(name = "URL")
    private String url;
	
	@ManyToOne
    @JoinColumn(name = "ID_CASINO", referencedColumnName = "ID_CASINO")
    private CasinoEntity casino;

	public JuegoEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public JuegoEntity(Integer idJuego, String nombre, String foto, String url, CasinoEntity casino) {
		super();
		this.idJuego = idJuego;
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

	public CasinoEntity getCasino() {
		return casino;
	}

	public void setCasino(CasinoEntity casino) {
		this.casino = casino;
	}
	
}
