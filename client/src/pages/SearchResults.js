import { useLocation } from 'react-router-dom';

export default function SearchResults() {
  const location = useLocation();
  const results = location.state.results;

  return (
    <div>
      <h1>Search Results</h1>
      {results?.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
          <p>{result.content}</p>
        </div>
      ))}
    </div>
  );
}
