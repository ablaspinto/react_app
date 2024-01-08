import Message from "./Message";
import ListGroup from "./components/listGroup";
function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
