package com.blog.repositories;

import com.blog.entities.Blog;
import org.springframework.data.repository.CrudRepository;

public interface BlogRepository extends CrudRepository<Blog, Integer> {
    public Blog getBlogById(int id);
}
