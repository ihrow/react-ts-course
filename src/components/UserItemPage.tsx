import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import {IUser} from "../types/types";

type UserItemPageParams = {
  id: string | undefined
}

const UserItemPage: FC = () => {

  const [user, setUser] = useState<IUser | null>(null)
  const params = useParams<UserItemPageParams>()

  const navigate = useNavigate();


  useEffect(() => {
    fetchUser();
  }, [])

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id)
      setUser(response.data)
    } catch (e) {
      alert(e)
    }
  }

  return (
    <div>
      <h2 style={{paddingTop: 10}}>USER: </h2>
      <div>{user?.name}: {user?.email}</div>

      <button onClick={() =>  navigate('/users')}>Back</button>
    </div>
  );
};

export default UserItemPage;