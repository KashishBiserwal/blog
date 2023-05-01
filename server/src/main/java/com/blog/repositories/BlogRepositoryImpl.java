package com.blog.repositories;

import com.blog.entities.Blog;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public class BlogRepositoryImpl implements BlogRepositoryCustom {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void updateById(int id, Blog blog) {
        Blog blogToUpdate = entityManager.find(Blog.class, id);
        blogToUpdate.setTitle(blog.getTitle());
        blogToUpdate.setDescription(blog.getDescription());
        blogToUpdate.setContent(blog.getContent());
        blogToUpdate.setImage(blog.getImage());
        blogToUpdate.setDate(blog.getDate());
        blogToUpdate.setAuthor(blog.getAuthor());
    }
}
