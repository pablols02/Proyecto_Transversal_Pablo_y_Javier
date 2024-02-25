package com.mvc.demo.domain.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "USUARIO")
public class UsuarioEntity implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@Column(name = "ID_USUARIO")
	private String idUsuario;
	
	@Column(name = "PASSWD")
	private String passwd;
	
	@Column(name = "NOMBRE")
	private String nombre;
	
	@Column(name = "APELLIDOS")
	private String apellidos;
	
	@Column(name = "DNI")
	private String dni;
	
	@Column(name = "SALDO")
	private double saldo;

	public UsuarioEntity() {
		super();
		// TODO Auto-generated constructor stub
	}

	public UsuarioEntity(String idUsuario, String passwd, String nombre, String apellidos, String dni, double saldo) {
		super();
		this.idUsuario = idUsuario;
		this.passwd = passwd;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.dni = dni;
		this.saldo = saldo;
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
