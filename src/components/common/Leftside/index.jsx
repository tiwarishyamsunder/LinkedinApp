import React from 'react'
import "./index.scss";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Leftside({ currentUser }) {
  let navigate = useNavigate();
  const goToRoute = (route) => {
    navigate(route);
  };
  return (
    <div>
      <div className="container">
        <div className='ArtCard'>
          <div className='UserInfo'>
            <div className='CardBackground' />
            <a>
            <Photo>
              <img
              src={currentUser?.imageLink}
              alt="user" 
              onClick={() => goToRoute("/profile")}
              style={{cursor:'pointer'}}
              />
            </Photo>
              <p className='Name'>{currentUser.name}</p>
            </a>
              <div className='About'>Student at {currentUser.school} </div>
          </div>
          <div className='Widget'>
            <a>
              <div>
                <span>Connections</span>
                <span>Grow your network</span>
              </div>
              <img src="/images/widget-icon.svg" alt="" 
                  onClick={() => goToRoute("/connections")}
                  style={{cursor:'pointer'}}
              />
            </a>
          </div>
          <div className='Item'>
            <span>
              <img src="/images/item-icon.svg" alt="" />
              My Items
            </span>
          </div>
        </div>
        <div className='CommunityCard'>
          <a>
            <span>Groups</span>
          </a>
          <a>
            <span>
              Events
              <img src="/images/plus-icon.svg" alt="" />
            </span>
          </a>
          <a>
            <span>Follow Hashtags</span>
          </a>
          <a>
            <span>Discover more</span>
          </a>
        </div>
      </div>
    </div>
  )
}
const Photo = styled.div`
box-shadow: none;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: whitesmoke;
  background-position: center;
  background-size: 60%;
  img{
    height: 60px;
    width: 60px;
    margin: -38px auto 12px;
    border-radius: 50%;
  }
`;
