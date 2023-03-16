import React, {FC, useState} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}
const TodoItem: FC<TodoItemProps> = ({todo}) => {

  const [isChecked, setIsChecked] = useState<boolean>(todo.completed)

  return (
    <div style={{padding: 15, border: '1px solid green'}}>
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(prev => !prev)} />
      {/* doesn't send data to users array */}
      {todo.id}. {todo.title} is {isChecked ? "completed" : "not completed"}
    </div>
  );
};

export default TodoItem;