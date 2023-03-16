import React, {FC} from 'react';
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
  const navigate = useNavigate();
  return (
    <div style={{padding: 15, border: '1px solid green'}} onClick={() => navigate('/users/' + user.id)}>
      {user.id}. {user.name} lives in {user.address.city} on {user.address.street} street.
    </div>
  );
};

export default UserItem