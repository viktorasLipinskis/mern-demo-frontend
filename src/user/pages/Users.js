import React, { useState, useEffect } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import UsersList from "../components/UsersList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();
  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://78.63.9.195:5000/api/users");
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedUsers(responseData.users);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    sendRequest();
  }, []);

  const errorHandle = () => {
    setError(null);
  };

  const USERS = [
    {
      id: "u1",
      name: "Viktoras Lipinskis",
      image:
        "https://media-exp1.licdn.com/dms/image/C5103AQEb1E521htbcQ/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=dknoVSKpbzIi1NBvoOHozwSQvsJN0fyG7MyT1YbLIrU",
      places: 3,
    },
  ];

  return (
    <>
      <ErrorModal error={error} onClear={errorHandle}></ErrorModal>

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}

      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;
