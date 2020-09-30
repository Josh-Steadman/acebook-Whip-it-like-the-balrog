package com.makersacademy.acebook.controller;

import com.makersacademy.acebook.dao.MemberDAO;
import com.makersacademy.acebook.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.sql.SQLOutput;
import java.util.Date;

@Controller
public class HomeController {

	@Autowired
	MemberDAO memberDAO;

	@GetMapping(value = "/")
	public String showIndex(Model model, Principal principal, Member member){
		if(principal == null){
			return "loginForm";
		}
		model.addAttribute("message", "Hello everyone, we are go to back to Spring with together");
		model.addAttribute("date", new Date());
		model.addAttribute("members", memberDAO.getOne(principal.getName()));


		return "index";
	}

	@GetMapping(value="/cards")
	public String playCards() {
		return "cardGame";
	}



}
