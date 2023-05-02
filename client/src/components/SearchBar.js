import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SearchBar() {
    const [query, setQuery] = useState(null);
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_URL;

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${baseUrl}/api/search/blogs?keyword=${query}`);
            const data = response.data;
            navigate('/search', { state: { results: data } });
        } catch (error) {
            if (error.response.status === 404) {
                alert('No result found');
            } else {
                console.log(error);
            }
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div class="search-container">
            <form onSubmit={handleSubmit} method="get">
                <input class="search expandright" id="searchright" type="text" value={query} onChange={handleInputChange} placeholder="Search" />
                <label class="search-btn searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
            </form>
        </div>
    );
}

export default SearchBar;
