import ToDoList from "../ToDoList";
import { useState } from "react";
import "./PageContent.css";

const PageContent = () => {
  const [count, setCount] = useState(1);
  const [todoList, setTodoList] = useState(new Array(<ToDoList index={0} />));

  const addTodoList = () => {
    setTodoList([...todoList, <ToDoList index={count} />]);
    setCount((count) => count + 1);
  };

  return (
    <>
      <button onClick={() => addTodoList()}>Ajouter une liste</button>
      <div id="content">
        {/* <ToDoList index={1} />
      <ToDoList index={2} /> */}
        {todoList}
      </div>
    </>
  );
};

export default PageContent;
