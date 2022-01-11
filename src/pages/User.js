import { React, useState ,useEffect } from "react";
import axios from "axios";
import UserList from "../movie-component/UserList";
import { Spinner } from "../movie-component/Spinner";
import { useParams } from "react-router-dom";

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    console.log(`user`, user)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                console.log(`res`, res);
                setUser(res.data);
                setLoading(false);
            });
    }, []);

    return (

        <>
            <h1>User 정보</h1>
            {loading ? <Spinner /> : null}
        </>
    );
};

export default User;