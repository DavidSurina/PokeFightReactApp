import { Link } from 'react-router-dom';
import './style.css';

export default function InputForm({ input, setInput }) {
  return (
    <form
      action="submit"
      className="header-form"
      onSubmit={(e) => e.preventDefault()}>
      <Link to="/" className="home-button">
        Home
      </Link>
      <input
        className="search-input"
        type="text"
        minLength="4"
        maxLength="20"
        placeholder="Search Pokemon"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <Link to="/pokemons/search" className="search-submit-button">
        Search
      </Link>
    </form>
  );
}
