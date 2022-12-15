import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { followUser, unfollowUser } from '../../lib/apis/followApis';
import FollowButton from './FollowButton';

export default function FollowUser({
    username,
    accountname,
    intro,
    image,
    isFollow,
}) {
    const navigate = useNavigate();
    const [is_Follow, setIsFollowed] = useState(isFollow);
    let userIntro = intro;

    const handleFollow = async () => {
        if (is_Follow) {
            await unfollowUser(accountname).then((res) => {
                setIsFollowed(false);
            })
        } else {
            await followUser(accountname).then((res) => {
                setIsFollowed(true);
            })
        }

    };

    return (
        <StyledUserContainer id={accountname}>
            <StyledUserInfoContent onClick={() => {
                const id = accountname;
                navigate(`/profile/${id}`);
            }}>
                <StyledProfileImg src={image} alt="프로필이미지" />
                <StyledUserInfo>
                    <StyledUserName>{username}</StyledUserName>
                    <StyledUserIntro>{userIntro}</StyledUserIntro>
                </StyledUserInfo>
            </StyledUserInfoContent>

            <FollowButton isFollow={is_Follow} onClick={handleFollow} />

        </StyledUserContainer>
    )
}

const StyledUserContainer = styled.div`
border: 1px solid black;
width: 500px;
height: 500px;
`

const StyledUserInfoContent = styled.div`
border: 1px solid black;
width: 300px;
height: 200px;
`

const StyledProfileImg = styled.img`
border: 1px solid black;
width: 200px;
height: 100px;
`

const StyledUserInfo = styled.div`
border: 1px solid black;
width: 200px;
height: 200px;
`

const StyledUserName = styled.strong`
border: 1px solid black;
width: 100px;
height: 10px;
`

const StyledUserIntro = styled.strong`
border: 1px solid black;
width: 100px;
	height: 100px;
`