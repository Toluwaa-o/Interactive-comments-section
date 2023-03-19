import React from 'react'
import RepTweet from './Reply'

const Replies = (props) => {
    const replie = props.replies.map(rep => {
        return (
            <RepTweet 
            add={() => props.add(rep.id)}
            sub={() => props.sub(rep.id)}
            content={rep.content} 
            key={rep.id}
            class={rep.id}
            time={rep.createdAt}
            score={rep.score}
            main={props.theUser}
            myAvatar={props.myAvatar}
            user={rep.user.username}
            avatar={rep.user.image} 
            replyingTo={rep.replyingTo}
            send={props.send}
            delete={props.delete}
            change={props.change}
            />
        )
    })
    return (
        <div className='Replies'>
            <div className='Line'></div>
            <div className='right'>
                {replie}
            </div>
        </div>
    )
}

export default Replies