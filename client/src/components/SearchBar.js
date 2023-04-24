import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function SearchBar() {
    const [query, setQuery] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8080/api/search/blogs?keyword=${query}`);
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
        <form onSubmit={handleSubmit} className='searchbar'>
            <input type="text" value={query} onChange={handleInputChange} />
            <button type="submit"><span className='search-icon'>{query?.length > 0 ? <FontAwesomeIcon icon={faMagnifyingGlass} beat/>: <FontAwesomeIcon icon={faMagnifyingGlass}/>}</span></button>
        </form>
    );
}

export default SearchBar;