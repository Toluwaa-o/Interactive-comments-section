import React from 'react'
import Tag from '../../Buttons/ForUser/Tags/Tag'

const Head = (props) => (
    <div className='Head'>
        <img src={props.username === props.theUser ? props.myAvatar : props.avatar} alt='Avatar' />
        <p className='Username'>{props.username}</p>
        {props.theUser === props.username ? <Tag /> : null}
        <p className='Time'>{props.time}</p>
    </div>
)

export default Head