package com.mvc.demo.domain.dto;

public class UsuarioDTO {

	private String idUsuario;
	private String passwd;
	private String nombre;
	private String apellidos;
	private String dni;
	private double saldo;
	
	
	public UsuarioDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UsuarioDTO(String idUsuario, String passwd, String nombre, String apellidos, String dni) {
		super();
		this.idUsuario = idUsuario;
		this.passwd = passwd;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
	}

	public String getIdUsuario() {
		return idUsuario;
	}

	public void setIdUsuario(String idUsuario) {
		this.idUsuario = idUsuario;
	}

	public String getPasswd() {
		return passwd;
	}

	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellidos() {
		return apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo(double saldo) {
		this.saldo = saldo;
	}
	
}
