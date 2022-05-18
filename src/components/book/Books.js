import React from "react";
import BookItem from "./BookItem";

const Books = ({ books }) => {
  return (
    <div>
      {books.map((data) => (
        <>
          <BookItem key={data.id} data={data} />
          <br />
        </>
      ))}
    </div>
  );
};

export default Books;
