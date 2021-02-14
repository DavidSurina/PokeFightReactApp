import SelectInput from '@material-ui/core/Select/SelectInput';
import './style.css';

export default function InputForm({input, setInput}) {
  return (
    <form action="" className="header-form">
      <button className="home-button" href="#">
        Home
      </button>
      <input
        className="search-input"
        type="text"
        minLength="4"
        maxLength="20"
        placeholder="Search Pokemon"
        value={input}
        onChange={(event)=> setInput(event.target.value)}
      />
      <input className="search-submit-button" type="submit" value="Search" />
    </form>
  );
}
