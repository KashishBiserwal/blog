import React, { useState } from 'react'

export const Post = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

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

    async function postBlog(blog) {
        try {
            await fetch('http://localhost:8080/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `${password}`
                },
                body: JSON.stringify(blog)
            });
            alert('Blog posted!');
        } catch (error) {
            alert("Blog not posted. Please try again.");
        }
    }

    const addBlogPost = (e) => {
        e.preventDefault();
        const blog = {
            title: title,
            content: content,
            image: image
        }
        postBlog(blog);
    }

    return (
        <div className='post-page'>
            <h1>Post a blog</h1>
            <form onSubmit={addBlogPost} className='post-form'>
                <div className='label-input'>
                    <label for='title'>Title: </label>
                    <input type='text' className='text-input title' name='title' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className='label-input'>
                    <label for='content'>Content: </label>
                    <textarea type='text' className='text-input' name='content' rows='10' value={content} onChange={e => setContent(e.target.value)} />
                </div>
                <div className='label-input form-image'>
                    <label for='image'>Image: </label>
                    <input type='file' accept="image/*" name='image' className='blog-image' onChange={handleImageChange} />
                </div>
                <div className='label-input'>
                    <label for='password'>Password: </label>
                    <input type='password' className='text-input pass' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn'>Post</button>
            </form>

        </div>
    )
}
