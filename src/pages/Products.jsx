import { Link } from "react-router-dom";

function Products() {
  const arr = [
    { id: 1, name: "laptop" },
    { id: 2, name: "pc" },
  ];

  return (
    <>
      {arr.map((p) => (
        <Link to={`/product/${p.id}`} key={p.id}>
          <div>{p.name}</div>
        </Link>
      ))}
    </>
  );
}

export default Products;
