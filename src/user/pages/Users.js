import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Viktoras Lipinskis",
      image:
        "https://media-exp1.licdn.com/dms/image/C5103AQEb1E521htbcQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=dknoVSKpbzIi1NBvoOHozwSQvsJN0fyG7MyT1YbLIrU",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
