package com.nexttech.problema.service;

import com.nexttech.problema.model.Content;
import com.nexttech.problema.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ContentService {

    @Autowired
    ContentRepository contentRepository;

    public List<Content> getAllDocuments() {
        List<Content> contentList = new ArrayList<>();
        contentRepository.findAll().forEach(contentList::add);
        return contentList;
    }

    public List<Content> getAllDocumentsByParentId(Long id) {
        List<Content> contentList = new ArrayList<>();
        contentRepository.findAllById(Collections.singleton(id)).forEach(contentList::add);
        return contentList;
    }
}
