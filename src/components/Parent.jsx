import Child from "./Child.jsx";

function Parent() {
  let books = [
    { id: 1, name: "pride and prejudice", author: "Jane Austine" },
    { id: 1, name: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი" },
    { id: 1, name: "Don Quixote", author: "Miguel de Cervantes" },
  ];

  return (
    <>
    {/* მეორე დავავლება */}
      <Child props={books}></Child>
    </>
  );
}

export default Parent;
