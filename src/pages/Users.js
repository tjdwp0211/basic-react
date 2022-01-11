import { React, useState ,useEffect } from "react";
import axios from "axios";
import UserList from "../movie-component/UserList";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data);
            });
    }, []);
    
    return (

        <>
            <h1>Users1</h1>
            <UserList users={users}/>
        </>
    );
};

export default Users;