package com.b107.treeway.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Sample {

    @GetMapping("sample")
    public String testWord() {
        return "hello";
    }
}
