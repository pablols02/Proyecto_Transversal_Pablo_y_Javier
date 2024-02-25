package com.mvc.demo.domain.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "CASINO")
public class CasinoEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seqCasino")
    @SequenceGenerator(name = "seqCasino", allocationSize = 1, sequenceName = "SEQ_CASINO")
    @Column(name = "ID_CASINO")
    private Integer idCasino;
	
	@Column(name = "NOMBRE")
    private String nombre;

	public CasinoEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CasinoEntity(Integer idCasino, String nombre) {
		super();
		this.idCasino = idCasino;
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
