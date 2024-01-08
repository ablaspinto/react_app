import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
const handleClick() = {
    {(event) => console.log(event)}
  
  }
  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(event) => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
