function Child({ props }) {
  const books = props;

  console.log(books);

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
    </>
  );
}

export default Child;
