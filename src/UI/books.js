import dertogadaCover from "../images/dertogada.jpeg";
export default function Books() {
  return (
    <div>
      <div id="book-holder">
        <div id="book-section">
          <div className="book-image">
            <img src={dertogadaCover} />
          </div>

          <div className="book-info">
            <div className="book-title">
              <h3>Dertogada</h3>
            </div>
            <div className="book-author">
              <h4>Yismake Worku</h4>{" "}
            </div>
          </div>
        </div>
        <div id="book-section">
          <div className="book-image">
            <img src={dertogadaCover} />
          </div>

          <div className="book-info">
            <div className="book-title">
              <h3>Dertogada</h3>
            </div>
            <div className="book-author">
              <h4>Yismake Worku</h4>{" "}
            </div>
          </div>
        </div>

        <div id="book-section">
          <div className="book-image">
            <img src={dertogadaCover} />
          </div>

          <div className="book-info">
            <div className="book-title">
              <h3>Dertogada</h3>
            </div>
            <div className="book-author">
              <h4>Yismake Worku</h4>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
