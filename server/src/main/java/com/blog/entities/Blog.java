package com.blog.entities;

import jakarta.persistence.*;

@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    @Column(length = 500)
    private String description;
    @Column(length = 20000)
    private String content;
    @Column(length = 100000)
    private String image;
    private String date;
    private String author;

    public Blog() {
    }

    public Blog(int id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }

    public Blog(int id, String title, String description, String content, String image, String date, String author) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.image = image;
        this.date = date;
        this.author = author;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
