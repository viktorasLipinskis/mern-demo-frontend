import React, { useState, useEffect } from "react";

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import UsersList from "../components/UsersList";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const sendGetUsersRequest = async () => {
      try {
        const responseData = await sendRequest(
          "http://78.63.9.195:5000/api/users"
        );
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    sendGetUsersRequest();
  }, [sendRequest]);

  return (
    <>
      <ErrorModal error={error} onClear={clearError}></ErrorModal>

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
