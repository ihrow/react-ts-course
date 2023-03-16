import React from 'react';
import Card, {CardVariant} from "./components/Card";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div>
          <NavLink to='/users'>Users</NavLink> {" "}
          <NavLink to='/todos'>Todos</NavLink> {" "}
          <NavLink to='/card'>Card</NavLink> {" "}
          <NavLink to='/events'>Events</NavLink>
        </div>
        <Routes>
          <Route path='/users' element={<UserPage/>} />
          <Route path='/users/:id' element={<UserItemPage />} />
          <Route path='/todos/:id' element={<TodoItemPage />} />
          <Route path='/todos' element={<TodosPage/>} />
          <Route path='/events' element={<EventsExample/>} />
          <Route path='/card' element={
            <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width="200px" height="200px">
              <button>Button!</button>
            </Card>
          } />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;