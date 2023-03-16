import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserListProps {
  users: IUser[];
}
const UserList: FC<UserListProps> = ({users}) => {
  return (
    <div>
      {users.map(user =>
        <div key={user.id} style={{padding: 15, border: '1px solid green'}}>
          {user.id}. {user.name} lives in {user.address.city} on {user.address.street} street.
        </div>
      )}
    </div>
  );
};

export default UserList