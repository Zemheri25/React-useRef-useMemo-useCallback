import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import Users from "./components/Users";
import { useCallback } from "react";

const UseMemoCallback = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  console.log("text");

  const getApi = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleSearch = () => {
    // console.log(inputRef.current.value)
    // setText(inputRef.current.value)
    setSearch(text);
  };

  //DEĞERLER İÇİN USE MEMO KULLANIYORUZ

  const filteredUsers = useMemo(
    () =>
      users.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [users, search]
  );

  //FUNCTİONLAR İÇİN USECALLBACK KULLANIYORUZ.

  const addUser = useCallback(() => {
      setUsers([...users, {id : users.length + 1, name : `Claursway - ${users.length - 9}`}])
  }, [users])

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      {/* <input type="search" ref={inputRef}/> */}
      <button onClick={handleSearch}>Search User</button>
      <Users users={filteredUsers} addUser = {addUser}/>
    </div>
  );
};

export default UseMemoCallback;
