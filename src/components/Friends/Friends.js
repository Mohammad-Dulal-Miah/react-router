import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {

    const [friends , setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[]);

    return (
        <div>
            <h2>Are you my friend ?</h2>
            <h3>Amr friend number holo : {setFriends.length}</h3>
            <small>Taile Taka de....</small>
            {
                friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    );
};

export default Friends;