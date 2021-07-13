package com.nexttech.problema.controller;

import com.nexttech.problema.model.Content;
import com.nexttech.problema.service.ContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RequestMapping("/api")
public class ContentController {

    @Autowired
    ContentService contentService;

    @GetMapping("/documents")
    private List<Content> getAllDocuments() {
        return contentService.getAllDocuments();
    }

    @GetMapping("/documents/{id}")
    private List<Content> getAllDocumentsByParentId(@PathVariable("id") Long id) {
        return contentService.getAllDocumentsByParentId(id);
    }

}
