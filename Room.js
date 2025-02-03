import React from 'react'
import { useEffect, useRef } from 'react';
import { useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
const Room = ()=> {
    const {id}= useParams();
    const meetingContainerRef = useRef(null);

    useEffect(()=>{
        const myMeeting = async()=>{
            const appID=1041048710;
            const serverSecret="3f6c17e796b34d8099949b1fa42462d8";
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,id,Date.now().toString(),id);
        
        
            const zp=ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container:meetingContainerRef.current,
                sharedLinks:[
                    {
                        name:'Personal link',
                        url:`http://localhost:3000/room/${id}`
                    },
                ],
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        };
        myMeeting();
    }, 
        [id]);

  return (
    <div className='myCallContainer' ref={meetingContainerRef} style={{width:'100vw', height:'100vh'}}>
    </div>
  );
};

export default Room;
