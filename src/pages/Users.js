import { React, useState ,useEffect } from "react";
import axios from "axios";
import UserList from "../movie-component/UserList";
import { Spinner } from "../movie-component/Spinner";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data);
                setLoading(false);
            });
    }, []);

    return (

        <>
            <h1>Users1</h1>
            {loading ? <Spinner /> : null}
            <UserList users={users}/> 
        </>
    );
};

export default Users;