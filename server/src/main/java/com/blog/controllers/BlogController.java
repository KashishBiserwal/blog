package com.blog.controllers;

import com.blog.entities.Blog;
import com.blog.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@CrossOrigin(origins = "*")
@RestController
public class BlogController {
    @Autowired
    private BlogService blogService;

    @GetMapping("/api/blogs")
    public ResponseEntity<List<Blog>> getBlogs() {
        List<Blog> list = this.blogService.getAllBlogs();
        if (list.size() < 1) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.of(Optional.of(list));
    }

    @GetMapping("/api/blogs/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable int id) {
        Blog blog = this.blogService.getBlogById(id);
        if (blog == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok().body(blog);
    }

    @PostMapping("/api/blogs")
    public ResponseEntity<Blog> addBlog(@RequestBody Blog blog, @RequestHeader("Authorization") String password) {
        Blog b;
        String envPassword = System.getenv("ADMIN_PASS");
        if (password.equals(envPassword)) {
            try {
                b = this.blogService.addBlog(blog);
                return ResponseEntity.status(HttpStatus.CREATED).body(b);
            } catch (Exception e) {
                e.printStackTrace();
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    @DeleteMapping("/api/blogs/{id}")
    public ResponseEntity<Void> deleteBlog(@PathVariable int id) {
        try {
            this.blogService.deleteBlog(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/api/search/blogs")
    public ResponseEntity<List<Blog>> getBlogs(@RequestParam(name = "keyword") String keyword) {
        List<Blog> list = this.blogService.getAllBlogs().stream()
                .filter(blog -> blog.getTitle().toLowerCase().contains(keyword.toLowerCase()))
                .collect(Collectors.toList());
        if (list.size() < 1) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.of(Optional.of(list));
    }

    @PutMapping("/api/blogs/{id}")
    public ResponseEntity<Blog> updateBlog(@PathVariable int id, @RequestBody Blog blog) {
        try {
            this.blogService.updateBlog(id, blog);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


}
