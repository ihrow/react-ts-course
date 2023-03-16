import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import UserItem from "./components/UserItem";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

const App = () => {

  // Mock data
  // const users: IUser[] = [{
  //   id: 1,
  //   name: "ihrow",
  //   email: "ihrow@proton.me",
  //   address: {
  //     city: "Bratislava",
  //     street: "Stare Grunty",
  //     zipcode: "84104"
  //   }
  // }]

  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <EventsExample />
      <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width="200px" height="200px">
        <button>Button!</button>
      </Card>
      {/*<UserList users={users}/>*/}
      <h2 style={{paddingTop: 10}}>USERS: </h2>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <h2 style={{paddingTop: 10}}>TODOS: </h2>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>

  );
}

export default App;