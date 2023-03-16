import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

type TodoItemPageParams = {
  id: string | undefined
}

const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null)
  const params = useParams<TodoItemPageParams>()

  const navigate = useNavigate();

  useEffect(() => {
    fetchTodo();
  }, [])

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo>("https://jsonplaceholder.typicode.com/todos/" + params.id)
      setTodo(response.data)
    } catch (e) {
      alert(e)
    }
  }
  return (
    <div>
      <h2 style={{paddingTop: 10}}>TODO: </h2>
      <div>{todo?.title}: {todo?.completed ? " completed" : " not completed"}</div>
      <button onClick={() =>  navigate('/todos')}>Back</button>
    </div>
  );
};

export default TodoItemPage;