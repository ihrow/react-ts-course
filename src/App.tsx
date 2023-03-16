import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

const App = () => {
  const users: IUser[] = [{
    id: 1,
    name: "ihrow",
    email: "ihrow@proton.me",
    address: {
      city: "Bratislava",
      street: "Stare Grunty",
      zipcode: "84104"
    }
  }]
    return (
        <div>
          <Card onClick={(num) => console.log(num)} variant={CardVariant.outlined} width="200px" height="200px" >
              <button>Button!</button>
          </Card>
          <UserList users={users} />
        </div>
    );
}

export default App;