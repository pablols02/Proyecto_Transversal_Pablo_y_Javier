package com.mvc.demo.domain.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "GALGO")
public class GalgoEntity implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "DORSAL")
	private Integer dorsal;
	
	@Column(name = "NOMBRE")
	private String nombre;
	
	@Column(name = "RITMO")
	private int ritmo;
	
	@Column(name = "EXPERIENCIA")
	private int experiencia;
	
	@Column(name = "CUOTA")
	private double cuota;
	
	@Column(name = "CANTIDAD_APOSTADA")
	private double cantidadApostada;
	
	@Column(name = "DISTANCIA")
	private double distancia;
	
	@Column(name = "TERMINO_CARRERA")
	private String terminoCarrera;
	
	@Column(name = "GANANCIA")
	private double ganancia;

	public GalgoEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GalgoEntity(Integer dorsal, String nombre, int ritmo, int experiencia, double cuota, double cantidadApostada,
			double distancia, String terminoCarrera, double ganancia) {
		super();
		this.dorsal = dorsal;
		this.nombre = nombre;
		this.ritmo = ritmo;
		this.experiencia = experiencia;
		this.cuota = cuota;
		this.cantidadApostada = cantidadApostada;
		this.distancia = distancia;
		this.terminoCarrera = terminoCarrera;
		this.ganancia = ganancia;
	}

	public Integer getDorsal() {
		return dorsal;
	}

	public void setDorsal(Integer dorsal) {
		this.dorsal = dorsal;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public int getRitmo() {
		return ritmo;
	}

	public void setRitmo(int ritmo) {
		this.ritmo = ritmo;
	}

	public int getExperiencia() {
		return experiencia;
	}

	public void setExperiencia(int experiencia) {
		this.experiencia = experiencia;
	}

	public double getCuota() {
		return cuota;
	}

	public void setCuota(double cuota) {
		this.cuota = cuota;
	}

	public double getCantidadApostada() {
		return cantidadApostada;
	}

	public void setCantidadApostada(double cantidadApostada) {
		this.cantidadApostada = cantidadApostada;
	}

	public double getDistancia() {
		return distancia;
	}

	public void setDistancia(double distancia) {
		this.distancia = distancia;
	}

	public String getTerminoCarrera() {
		return terminoCarrera;
	}

	public void setTerminoCarrera(String terminoCarrera) {
		this.terminoCarrera = terminoCarrera;
	}

	public double getGanancia() {
		return ganancia;
	}

	public void setGanancia(double ganancia) {
		this.ganancia = ganancia;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
