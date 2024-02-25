package com.mvc.demo.domain.dto;

public class GalgoDTO {

	private Integer dorsal;
	private String nombre;
	private int ritmo;
	private int experiencia;
	private double cuota;
	private double cantidadApostada;
	private double distancia;
	private String terminoCarrera;
	private double ganancia;
	
	public GalgoDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GalgoDTO(Integer dorsal, String nombre, int ritmo, int experiencia) {
		super();
		this.dorsal = dorsal;
		this.nombre = nombre;
		this.ritmo = ritmo;
		this.experiencia = experiencia;
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
	
}
