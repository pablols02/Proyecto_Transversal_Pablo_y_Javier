package com.mvc.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.mvc.demo.domain.dto.UsuarioDTO;
import com.mvc.demo.service.IServiceUsuario;

import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value = "/ruleta")
public class RuletaController {

	@Autowired
	private IServiceUsuario usuarioService;
	
	public String idLogeado = "";
	
	@GetMapping("/ver")
	public String verRuleta(Model model, HttpServletRequest request) {
		idLogeado = request.getParameter("idUsuario");
		UsuarioDTO usuario = usuarioService.obtenerUsuarioPorId(idLogeado);
		model.addAttribute("usuario", usuario);
		return "ruleta/ruleta";
	}
}
