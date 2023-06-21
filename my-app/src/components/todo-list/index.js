import s from "./index.module.css";
import { useSelector } from "react-redux";
import { todosSelector } from "../../store/selectors/todo";
import { Todo } from "../todo";
import { useState } from "react";

export const TodoList = () => {
  const todos = useSelector(todosSelector);

  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "uncompleted") {
      return !todo.completed;
    }
    return true;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div>
      <div className={s.filterButtons}>
        <button
          className={s.filterButton}
          onClick={() => handleFilterChange("all")}
        >
          Show all
        </button>
        <button
          className={s.filterButton}
          onClick={() => handleFilterChange("completed")}
        >
          Show completed
        </button>
        <button
          className={s.filterButton}
          onClick={() => handleFilterChange("uncompleted")}
        >
          Show uncompleted
        </button>
      </div>
      <ul className={s.list}>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};
