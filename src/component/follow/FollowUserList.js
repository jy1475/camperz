import React from 'react';
import FollowUser from './FollowUser';

export default function FollowUserList({
    username,
    accountname,
    intro,
    image,
    isFollow,
}) {
    return (
        <FollowUser
            username={username}
            accountname={accountname}
            intro={intro}
            image={image}
            isFollow={isFollow}
        />
    )
}
