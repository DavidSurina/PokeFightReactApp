import "./style.css";

export default function InputForm () {
    return (
        <form action="" className="header-form">
            <button className="home-button" href="#">Home</button>
            <input className="search-input" type="text" minLength="4" maxLength="45" placeholder="Search Pokemon"/>
            <input className="search-submit-button" type="submit" value="Search" />
        </form>
    )
}