import { useMemo, useState, useCallback } from "react";

// 3.5

function Footer() {
  const [numbers, setNumbers] = useState([12, 324, 657, 879, 980, 0, 9]);
  const [value, setValue] = useState("");

  const handleFilter =useMemo( () => {
    const newArr = numbers.filter((num) => num === Number(value));
    console.log(newArr);
  }, [value, numbers])


  const handleAddNumber = useCallback(() => {
    setNumbers((prev) => [...prev, Math.floor(Math.random() * 100)]);
  }, []);
  console.log(numbers)

  return (
    <>
      <input
        type="search"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={handleAddNumber}>add number</button>
    </>
  );
}

export default Footer;
