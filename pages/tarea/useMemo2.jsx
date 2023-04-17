import React, { useMemo, useState } from 'react';

function UserList({ users }) {
  const sortedUsers = useMemo(() => {
    console.log('Sorting users...');
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]);

  return (
    <ul>
      {sortedUsers.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Charlie' },
    { id: 3, name: 'Bob' },
  ]);

  const addUser = () => {
    setUsers([
      ...users,
      { id: users.length + 1, name: `User ${users.length + 1}` },
    ]);
  };

  return (
    <div>
      <button onClick={addUser}>Add user</button>
      <UserList users={users} />
    </div>
  );
}
