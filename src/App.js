import logo from "./logo.svg";
import "./App.css";
import Navbar from "./UI/navbar";
import Books from "./UI/books";
import MediaCard from "./UI/MediaCard";
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="book-card">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>

      <div className="book-card">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>

      <div className="book-card">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
}

export default App;
