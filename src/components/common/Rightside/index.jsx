import React from 'react'
import "./index.scss";


export default function Rightside() {
  return (
      <div className='Container'>
      <div className='FollowCard'>
        <div className='Title'>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </div>

        <div className='FeedList'>
          <li>
            <a>
              <div className='Avatar' />
            </a>
            <div>
              <span>#StudentLinkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
            <div className='Avatar' />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </div>

        <div className='Recommendation'>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </div>
      </div>
      <div className='BannerCard'>
        <img
          src="https://en.pimg.jp/015/816/118/1/15816118.jpg"
          alt=""
        />
      </div>
    </div>
  )
}
