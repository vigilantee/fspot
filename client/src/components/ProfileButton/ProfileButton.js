import React from 'react';
import './ProfileButton.css';




const ProfileButton = () => (
    <div style={{display:"flex", alignItems:"center"}}>
    <img className="profilepic" src="https://lh3.googleusercontent.com/-ocN5vs7837c/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdpfM2r4QyYQJOjS2JSh9IXT7v2zg/s96-c/photo.jpg"   ></img>
    <div className="ellipsis">Name Goes Here 678901</div>
    </div>

    )

export default ProfileButton; 