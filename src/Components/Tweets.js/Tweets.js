import React from 'react'
import Tweet from './Tweet/Tweet'

const Tweets = (props) => {
    const content = props.comments.map(tweets => {
        return <Tweet 
                add={() => props.add(tweets.id)}
                pass={props.add}
                sub={() => props.sub(tweets.id)}
                pass2={props.sub}
                tweet={tweets.content} 
                key={tweets.id}
                time={tweets.createdAt}
                replies={tweets.replies}
                score={tweets.score}
                main={props.user.username}
                myAvatar={props.user.image}
                user={tweets.user.username}
                avatar={tweets.user.image}
                userData={props.tweet}
                send={props.send}
                class={tweets.id}
                delete={props.delete}
                change={props.change}
                />
    })
    return (
        <div>
            {content}
        </div>
    )
}

export default Tweets