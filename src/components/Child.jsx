import { useEffect, useState } from "react";
import GrandChild from "./GrandChild";

function Child({ props }) {
  const [counter, setCounter] = useState(0);

  const books = props;

  console.log(books);

  //3.2
  useEffect(() => {
    console.log("page loaded");
  }, []);

  useEffect(() => {
    async function getBookReviews() {
      try {
        const response = await fetch("https://potterapi-fedeperin.vercel.app/");
        const data =await response.json();
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    // getBookReviews()
  }, []);

  return (
    <>
      {/* მეორე დავავლება */}
      {books.length === 0 ? (
        <p>books not found</p>
      ) : (
        books.map((b) => (
          <div key={b.id}>
            <p>{b.name}</p>
            <span>{b.author}</span>
          </div>
        ))
      )}
      <h3>{counter}</h3>
      <button onClick={() => setCounter((prev) => prev + 1)}>add</button>
      <button onClick={() => setCounter(0)}>reset</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>decrease</button>
    <GrandChild></GrandChild>
    </>
  );
}

export default Child;
