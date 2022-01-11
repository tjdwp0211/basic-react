import React, { useEffect, useState } from "react";

const UserList = ({ users }) => {
    console.log(`users`, users);

    return( 
        <div>
            {users.map(users => {
                return (<div key={users.id}>
                    {users.name}
                </div>);
        })}
        </div>
    );
};

export default UserList;