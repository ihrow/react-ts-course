import React, {FC, useState} from 'react';
import {ITodo} from "../types/types";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {useNavigate} from "react-router-dom";

interface TodoItemProps {
  todo: ITodo;
}
const TodoItem: FC<TodoItemProps> = ({todo}) => {

  const [isChecked, setIsChecked] = useState<boolean>(todo.completed)
  const navigate = useNavigate();
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(prev => !prev)} />
      <div onClick={() => navigate('/todos/' + todo.id)}>
        {/* doesn't send data to todos array */}
        {todo.id}. {todo.title} is {isChecked ? "completed" : "not completed"}
      </div>
    </div>
  );
};

export default TodoItem;