const books = [
  {
    id: 1,
    title: "Dertogada",
    author: "Yismahak",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus vehicula ligula sit amet convallis. Curabitur lorem ipsum, maximus eu risus sit amet, dapibus tempor tortor. In scelerisque in ipsum eget viverra. Etiam in orci eget quam tincidunt lacinia id eget risus. Aliquam maximus luctus nulla at condimentum. Vivamus facilisis ac justo ut luctus.",
    cover: "dertogada.jpeg",
  },
  {
    id: 2,
    title: "Dertogada",
    author: "Yismahak",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus vehicula ligula sit amet convallis. Curabitur lorem ipsum, maximus eu risus sit amet, dapibus tempor tortor. In scelerisque in ipsum eget viverra. Etiam in orci eget quam tincidunt lacinia id eget risus. Aliquam maximus luctus nulla at condimentum. Vivamus facilisis ac justo ut luctus.",
    cover: "dertogada.jpeg",
  },
  {
    id: 3,
    title: "Dertogada",
    author: "Yismahak",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus vehicula ligula sit amet convallis. Curabitur lorem ipsum, maximus eu risus sit amet, dapibus tempor tortor. In scelerisque in ipsum eget viverra. Etiam in orci eget quam tincidunt lacinia id eget risus. Aliquam maximus luctus nulla at condimentum. Vivamus facilisis ac justo ut luctus.",
    cover: "dertogada.jpeg",
  },
];

export const getBooks = () => {
  return books;
};

export const getBook = (id) => {
  return books.find((bo) => bo.id === id);
};

export const deleteBook = (id) => {
  const newBooks = books.find((bo) => bo.id !== id);
  books = newBooks;
};

export const saveBook = ({ id, title, author, detail, cover }) => {
  if (id) {
    const book = books.find((bo) => bo.id === id);
    book.title = title;
    book.author = author;
    book.detail = detail;
    book.cover = cover;
    return;
  }

  books.push({ id: books.length(), title, author, detail, cover });
};
