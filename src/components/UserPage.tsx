import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";

const UserPage: FC = () => {

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

  useEffect(() => {
    fetchUsers();
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <h2 style={{paddingTop: 10}}>USERS: </h2>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
};

export default UserPage;