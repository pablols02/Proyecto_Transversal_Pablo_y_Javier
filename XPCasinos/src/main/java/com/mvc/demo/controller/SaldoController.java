package com.mvc.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mvc.demo.domain.dto.UsuarioDTO;
import com.mvc.demo.service.IServiceUsuario;

@Controller
@RequestMapping("/saldo")
public class SaldoController {

	@Autowired
	private IServiceUsuario usuarioService;
	
	@PostMapping("/actualizar")
	@ResponseBody
	public void ingresar(@RequestBody UsuarioDTO usuario) {
		UsuarioDTO usuarioActualizado = usuarioService.obtenerUsuarioPorId(usuario.getIdUsuario());
		usuarioActualizado.setSaldo(usuario.getSaldo());
		usuarioService.actualizarUsuario(usuarioActualizado);
	}
}
