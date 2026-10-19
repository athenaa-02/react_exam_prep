import Child from "./Child.jsx";

function Parent() {
    


  let books = [
    { id: 1, name: "pride and prejudice", author: "Jane Austine" },
    { id: 2, name: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი" },
    { id: 3, name: "Don Quixote", author: "Miguel de Cervantes" },
  ];

  return (
    <>
    {/* მეორე დავავლება */}
      <Child props={books}></Child>
    </>
  );
}

export default Parent;
