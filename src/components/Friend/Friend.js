import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name , username , id} = friend;
    const naviagate = useNavigate();

    const showFriendDetail = (id) =>{

        const path = `/friendDetails/${id}`;
        naviagate(path);
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <button onClick={()=> showFriendDetail(id)} >{username}: {id}</button>
        </div>
    );
};

export default Friend;