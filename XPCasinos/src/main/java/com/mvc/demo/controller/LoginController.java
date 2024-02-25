package com.mvc.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.mvc.demo.domain.dto.JuegoDTO;
import com.mvc.demo.domain.dto.UsuarioDTO;
import com.mvc.demo.exception.MiExcepcion;
import com.mvc.demo.service.IServiceJuego;
import com.mvc.demo.service.IServiceUsuario;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class LoginController {
	
	@Autowired
	private IServiceUsuario usuarioService;
	
	@Autowired
	private IServiceJuego juegoService;

	public String idLogeado = "";
	
	@GetMapping(value = {"","/","/index"})
	public String verIndice() {
		return "login/login";
	}
	
	@PostMapping("/login")
	public String login(Model model, HttpServletRequest request) {
		String forward = "";
		String idUsuarioLog = request.getParameter("idUsuario");
		String passwdLog = request.getParameter("passwd");
		UsuarioDTO usuarioDTO = usuarioService.obtenerUsuarioPorId(idUsuarioLog);
		if (idUsuarioLog.equals(usuarioDTO.getIdUsuario()) && passwdLog.equals(usuarioDTO.getPasswd())) {
			idLogeado = usuarioDTO.getIdUsuario();
			model.addAttribute("usuario",usuarioDTO);
			
			List<JuegoDTO> juegos = juegoService.obtenerTodosLosJuegos();
			model.addAttribute("juegos", juegos);
			
			forward = "inicio/inicio";
		} else {
			String mensaje = "El usuario o la contraseña es incorrecto";
			model.addAttribute("mensaje",mensaje);
			forward = "login/login";
		}
		return forward;
	}
	
	@GetMapping("/inicio")
	public String inicio(Model model, HttpServletRequest request) {
		idLogeado = request.getParameter("idUsuario");
		UsuarioDTO usuario = usuarioService.obtenerUsuarioPorId(idLogeado);
		List<JuegoDTO> juegos = juegoService.obtenerTodosLosJuegos();
		model.addAttribute("juegos", juegos);
		model.addAttribute("usuario", usuario);
		
		return "inicio/inicio";
	}
	
	@PostMapping("/registro")
	public String registro(Model model, HttpServletRequest request) {
		String forward = "";
		try {
			String idUsuario = request.getParameter("idUsuario");
			String passwd = request.getParameter("passwd");
			String nombre = request.getParameter("nombre");
			String apellidos = request.getParameter("apellidos");
			String dni = request.getParameter("dni");
			
			UsuarioDTO usuarioDTO = new UsuarioDTO(idUsuario,passwd,nombre,apellidos,dni);
			usuarioService.guardarUsuario(usuarioDTO);
			
			String mensaje = "Tu usuario ha sido creado correctamente";
			model.addAttribute("mensaje",mensaje);
	        forward = "login/login";
		} catch (MiExcepcion e) {
			forward = "error/error";
		}
		return forward;
	}
}
