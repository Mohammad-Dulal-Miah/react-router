import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    const {id} = useParams();
    const [friend , setFriend] = useState({});

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> res.json())
        .then(data => setFriend(data))
    },[]);

    console.log(friend)
    return (
        <div>
            <p>Name: {friend.name}</p>
            <p><small>Email : {friend.email}</small></p>
        </div>
    );
};

export default FriendDetail;