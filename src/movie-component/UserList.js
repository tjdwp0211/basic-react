import React, { useEffect, useState } from "react";

const UserList = ({ users }) => {
    console.log(`users`, users);

    return( 
        <div>
            
            {users.map(users => {
                return (
                <div className="card mb-2" key={users.id}>
                    <div className="card-body p-3">
                        {users.name}
                    </div>
                </div>);
        })}
        </div>
    );
};

export default UserList
