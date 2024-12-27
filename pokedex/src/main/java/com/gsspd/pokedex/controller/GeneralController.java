package com.gsspd.pokedex.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class GeneralController {
    
    @GetMapping
    public String loadPage() {
        return "index";
    }
}
