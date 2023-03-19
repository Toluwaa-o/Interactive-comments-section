import React from 'react'
import MyButton from '../../Buttons/UpdateBtns/Update'

const ReplySec = (props) => {
    const classes = `TextArea ${props.class}`

    return (
    props.show ? <form className={classes} onSubmit={props.send} style={{marginBottom: props.margin, marginTop: '.5em'}} >

    <img src={props.avatar} />
    <textarea style={{height: '120px'}} className={props.class} onChange={props.changeHandler} />
    <MyButton buttonName={props.type} />
    </form> : null
    )
}

export default ReplySec