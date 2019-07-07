import React from 'react';
import './ProfileButton.css';




const ProfileButton = props => (
    <div style={{display:"flex", alignItems:"center"}}>
    <img className="profilepic" src={props.profilePic} ></img>
    <div className="ellipsis">{props.name}</div>
    </div>

    )

export default ProfileButton; 