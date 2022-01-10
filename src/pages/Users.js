import { React, useEffect } from "react";
import axios, { Axios } from "axios";

const Users = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(`res`, res)
            });
    }, []);
    return (
        <h1>Users1</h1>

    );
};

export default Users;