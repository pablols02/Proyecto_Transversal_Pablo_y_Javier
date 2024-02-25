package com.mvc.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mvc.demo.domain.dto.GalgoDTO;
import com.mvc.demo.domain.dto.UsuarioDTO;
import com.mvc.demo.service.IServiceGalgo;
import com.mvc.demo.service.IServiceUsuario;

import jakarta.servlet.http.HttpServletRequest;

@Controller
@RequestMapping(value = "/galgos")
public class GalgosController {
	
	@Autowired
	private IServiceUsuario usuarioService;
	
	@Autowired
	private IServiceGalgo galgoService;
	
	public String idLogeado = "";
	
	@GetMapping("/ver")
	public String verGalgos(Model model, HttpServletRequest request) {
		idLogeado = request.getParameter("idUsuario");
		UsuarioDTO usuario = usuarioService.obtenerUsuarioPorId(idLogeado);
		model.addAttribute("usuario", usuario);
		return "galgos/galgos";
	}
	
	@GetMapping("/obtener")
	@ResponseBody
	public List<GalgoDTO> obtenerGalgos() {
		List<GalgoDTO> listaGalgos = galgoService.obtenerTodosLosGalgos();
		
	    return listaGalgos;
	}
}
