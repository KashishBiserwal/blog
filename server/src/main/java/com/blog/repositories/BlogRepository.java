package com.blog.repositories;

import com.blog.entities.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface BlogRepository extends JpaRepository<Blog, Integer>, BlogRepositoryCustom {
    Blog getBlogById(int id);

}
