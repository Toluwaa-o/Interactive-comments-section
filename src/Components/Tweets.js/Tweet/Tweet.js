import React, {useState, memo} from 'react'
import Head from '../../Layout/Head/Head'
import Controls from '../../Controls/controls'
import UserBtns from '../../Buttons/ForUser/Buttons/UserBtns'
import Reply from '../../Buttons/Reply/Reply'
import Replies from '../Replies/Replies'
import ReplySection from '../../Layout/ReplySection/ReplySec'
import EditTweet from '../../EditTweet/EditTweet'

const Tweet = memo((props) => {
    const [show, setShow] = useState({
        show1: false,
        show2: false,
        tweet: true
    })

    const changeShow = () => {
        setShow(prevShow => ({
            ...prevShow, show1: !show.show1
        }))
    }

    const toggleEdit = (event) => {
        event.preventDefault()
        setShow(prevShow => ({
            ...prevShow, show2: !show.show2, tweet: !show.tweet
        }))
    }

    return (
        <div>
        <div className='Tweet'>

            <Head 
            myAvatar={props.myAvatar.png}
            avatar={props.avatar.png}
            username={props.user}
            theUser={props.main}
            time={props.time}
            likes={props.score}
             />

            <Controls add={props.add} sub={props.sub} likes={props.score} />

            {props.user === props.main ? <UserBtns edit={toggleEdit} class={props.class} delete={props.delete} /> : <Reply replyHandler={changeShow} />}
            {show.tweet ? <p className='Content'>{props.tweet}</p> : null}
            {show.show2 ? <EditTweet submit={toggleEdit} class={props.class} change={props.change} content={props.tweet} show={show.show2} /> : null}

        </div>

        <ReplySection
        replyHandler={changeShow}
        avatar={props.myAvatar.png}
        type='Reply'
        margin='1em'
        show={show.show1}
        send={props.send} 
        class={props.class}
        />
        
        {props.replies.length > 0 ? <Replies 
                                        edit={toggleEdit} 
                                        delete={props.delete} 
                                        send={props.send} 
                                        add={props.pass} 
                                        sub={props.pass2}
                                        change={props.change}
                                        replies={props.replies} 
                                        myAvatar={props.myAvatar} 
                                        theUser={props.main} /> : null}
    </div>
)
})

export default Tweet