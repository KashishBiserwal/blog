import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Update = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const baseUrl = process.env.REACT_APP_URL

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch(`${baseUrl}/api/blogs/${id}`);
                const blogData = await response.json();
                setTitle(blogData.title);
                setDescription(blogData.description);
                setContent(blogData.content);
                setImage(blogData.image);
            } catch (error) {
                alert("Blog not found.");
            }
        }
        fetchBlog();
    }, [id]);

    const handleImageChange = (event) => {
        const selectedfile = event.target.files;
        if (selectedfile.length > 0) {
            const [imageFile] = selectedfile;
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const base64Image = fileReader.result;
                setImage(base64Image);
            };
            fileReader.readAsDataURL(imageFile);
        }
    };

    async function updateBlog(blog) {
        try {
            await fetch(`${baseUrl}/api/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blog)
            });
            alert('Blog updated!');
        } catch (error) {
            alert("Blog not updated. Please try again.");
        }
    }

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date) {
        return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear(),].join('-');
    }

    const updateBlogPost = (e) => {
        e.preventDefault();
        const blog = {
            title: title,
            description: description,
            content: content,
            image: image,
            date: formatDate(new Date()),
        }
        updateBlog(blog);
    }
    return (
        <div className='post-page'>
            <h1>Update a blog</h1>
            <form onSubmit={updateBlogPost} className='update-form'>
                <div className='label-input'>
                    <label for='title'>Title: </label>
                    <input type='text' className='text-input title' name='title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className='label-input'>
                    <label for='description'>Description: </label>
                    <input type='text' className='text-input description' name='description' value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className='label-input'>
                    <label for='content'>Content: </label>
                    <textarea type='text' className='text-input' name='content' rows='10' value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <div className='label-input form-image'>
                    <label for='image'> </label>
                    <input type='file' accept="image/*" name='image' className='blog-image' onChange={handleImageChange} />
                </div>
                <button type='submit' className='btn'>Update</button>
            </form>
        </div>
    )
}
