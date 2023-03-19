import React, {useState} from 'react'
import Head from '../../Layout/Head/Head'
import Controls from '../../Controls/controls'
import UserBtns from '../../Buttons/ForUser/Buttons/UserBtns'
import Reply from '../../Buttons/Reply/Reply'
import ReplySection from '../../Layout/ReplySection/ReplySec'
import EditTweet from '../../EditTweet/EditTweet'

const RepTweet = (props) => {

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
        <div className='Reply'>

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

            {show.tweet ? <p className='Content'><span style={{cursor: 'pointer'}}>@{props.replyingTo}</span> {props.content}</p> : null}
            {show.show2 ? <EditTweet submit={toggleEdit} class={props.class} change={props.change} content={props.content} show={show.show2} /> : null}
        </div>

        {props.user === props.main ? null : <ReplySection
        avatar={props.myAvatar.png}
        type='Reply'
        margin='1em' 
        show={show.show1}
        send={props.send}
        class={props.class}
        />}
        </div>
)
}

export default RepTweet