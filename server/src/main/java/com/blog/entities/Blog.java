package com.blog.entities;

import jakarta.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String title;
    @Column(length = 20000)
    private String content;
    @Column(length = 100000)
    private String image;

    public Blog() {
    }

    public Blog(int id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public Blog(int id, String title, String content, String image) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
    }

    public Blog(String title, String content, String image) {
        this.title = title;
        this.content = content;
        this.image = image;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
