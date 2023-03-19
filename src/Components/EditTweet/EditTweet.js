import React, {memo} from 'react'
import MyButton from '../Buttons/UpdateBtns/Update'

const EditArea = (props) => {
    return (
    props.show ? <form onSubmit={props.submit} className='editArea'><textarea style={{height: '120px'}} className={props.class} id='editer' onChange={props.change} value={props.content} className={props.class} />
                        <MyButton buttonName='Update' /></form> : null
)}

export default memo(EditArea)