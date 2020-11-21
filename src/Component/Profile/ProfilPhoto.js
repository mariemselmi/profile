import React from 'react';
import Image from '../../profilepic.jpg'

const ProfilePicture = () =>{
  return (
    <div>
        <img style={{width:'100px;', height: '100px'}} src={Image} alt="Profile Pic"/>
    </div>
  );
}

export default ProfilePicture;