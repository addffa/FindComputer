import React, { useState, useEffect } from 'react';
import { getUser } from '../services/user.service';

export default function Profile(props) {
  const [profile, setProfile] = useState();

  useEffect(() => {
    getUser(props.userId).then(res => {
      setProfile(res.data)
    })
  }, [props.userId]);

  return (
    <>
      {profile && (
        <>
          <h2>Profile:</h2>
          <div>Name: {profile.name}</div>
          <div>Email: {profile.email}</div>
          <div>Address: {(profile.address === null) ? "-" : profile.address}</div>
          <div>Phone Number: {profile.phoneNumber}</div>
        </>
      )}
    </>
  );
}