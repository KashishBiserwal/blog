import React from 'react'
import { useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export const Delete = () => {
    const { id } = useParams();
    async function handleDelete() {
        try {
            await fetch(`http://localhost:8080/api/blogs/${id}`, {
                method: 'DELETE',
            });
            alert('Blog deleted!');
            window.location.href = '/';
        } catch (error) {
            alert("Blog not deleted. Please try again.");
        }
    }

  return (
    <div onClick={handleDelete} className='icon'>
        <FaTrash />
    </div>
  )
}
