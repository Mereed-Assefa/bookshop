import dertogadaCover from "../images/dertogada.jpeg";
export default function Books() {
  return (
    <div>
      <div className="book-holder">
        <div id="book-section">
          <div className="book-image">
            <div>
              <img src={dertogadaCover} />{" "}
            </div>
            <div>
              <span>This is a book qh sfdg ggg ss ff sd ateh rha </span>
            </div>
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
        <div className="book-section">
          <div className="book-image">
            <div>
              <img src={dertogadaCover} />{" "}
            </div>
            <div>
              <span>This is a book qh sfdg ff sd ateh rha </span>
            </div>
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

        <div className="book-section">
          <div className="book-image">
            <div>
              <img src={dertogadaCover} />{" "}
            </div>
            <div>
              <span>
                This is a book qh sfdg ff htdagdbhs adg ah sr ajt ah aeh aeh sd
                ateh rha ga{" "}
              </span>
            </div>
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
