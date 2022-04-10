import Searchbar from "./searchbar";
export default function Navbar() {
  return (
    <div>
      <div className="header"></div>
      <div className="navigation">
        <span className="mainheader">
          {" "}
          <h4>Fares book shop</h4>{" "}
        </span>
        <ul className="nav-links">
          <li>
            {" "}
            <a href="">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Books</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">About</a>{" "}
          </li>
          <li>
            {" "}
            <a href="">Contact</a>{" "}
          </li>
        </ul>
        <Searchbar />
      </div>
    </div>
  );
}
