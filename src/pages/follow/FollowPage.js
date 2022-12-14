import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { followerList } from "../../lib/apis/followApis";
import FollowContents from "../../component/follow/FollowContents";

export default function FollowPage() {

    const [followerData, setFollowerData] = useState();
    const [followMessage, setFollowMessage] = useState('');

    const getFollowerData = async () => {
        const accountname = 'rkwl123'
        await followerList(accountname).then((res) => {
            console.log(res);
            if (res.data.length > 0) {
                setFollowerData(res.data);
            } else {
                setFollowMessage('팔로워가 없다.');
            }

        }).catch(
            (err) => console.log(err)
        )
    };
    useEffect(() => {
        getFollowerData();
        console.log(followerData);
    }, [])

    return (
        <>
            <p> 팔로우창</p>
            <FollowContents
                followerData={followerData}
                followMessage={followMessage}
            />
        </>

    )

}