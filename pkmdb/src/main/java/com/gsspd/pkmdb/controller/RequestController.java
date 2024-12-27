package com.gsspd.pkmdb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RequestController {
    
    @GetMapping("/home")
    public String load() {
        return "index";
    }
}
