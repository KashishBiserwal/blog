package com.blog.services;

import com.blog.entities.Blog;
import com.blog.repositories.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService {
    @Autowired
    private BlogRepository blogRepository;

    public List<Blog> getAllBlogs(){
        return (List<Blog>)this.blogRepository.findAll();
    }

    public Blog getBlogById(int id) {
        Optional<Blog> optionalBlog = this.blogRepository.findById(id);
        return optionalBlog.orElse(null);
    }

    public Blog addBlog(Blog b){
        return blogRepository.save(b);
    }

    public void deleteBlog(int id){
        blogRepository.deleteById(id);
    }
    public void updateBlog(int id, Blog blog){
        blogRepository.updateById(id, blog);
    }
}
