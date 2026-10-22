import { Link } from "react-router-dom";
import { store } from "../redux/store";
import { addItem, removeItem, clearCart } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

export const Arr = [
  { id: 1, name: "laptop" },
  { id: 2, name: "pc" },
];

const fruit = "banana";
function Products() {
  const stateValue = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  console.log(stateValue);

  return (
    <>
      {Arr.map((p) => (
        <Link to={`/product/${p.id}`} key={p.id}>
          <div>{p.name}</div>
        </Link>
      ))}

      <button onClick={() => dispatch(addItem(fruit))}>
        add item to array
      </button>

      <button onClick={() => {
        dispatch(removeItem('pineApple'))
console.log(stateValue)
      }}>remove chosen item</button>

      <button onClick={() => dispatch(clearCart())}>reset</button>
    </>
  );
}

export default Products;
