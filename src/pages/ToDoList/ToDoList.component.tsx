import Item from "./Item.component";
import "./ToDoList.css";
import { useState } from "react";

const ToDoList = (props: { index: number }) => {
  const [count, setCount] = useState(0);

  const [userInput, setUserInput] = useState("");
  const [todoListContent, setTodoListContent] = useState(new Array(0));

  const addItem = () => {
    const trimmedUserInput = userInput.trim();
    if (trimmedUserInput) {
      setTodoListContent([
        ...todoListContent,
        { content: trimmedUserInput, index: count },
      ]);
      setCount((count) => count + 1);
      setUserInput("");
    }
  };

  const deleteItem = (index: number) => {
    setTodoListContent(todoListContent.filter((item) => item.index !== index));
    setCount((count) => count - 1);
  };

  return (
    <div className="to-do-list-card">
      <h3>
        ToDo Liste n° {props.index} - [{count} items]
      </h3>

      <div className="to-do-list-add">
        <input
          type="text"
          placeholder="Ajouter une tâche..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            addItem();
          }}
        >
          Ajouter
        </button>
      </div>

      <div className="to-do-list-items">
        {todoListContent.map((item, index) => (
          <Item
            key={`${props.index}-${index}`}
            item={item}
            deleteFct={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
