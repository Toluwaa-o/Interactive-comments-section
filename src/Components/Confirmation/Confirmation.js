import React, {memo} from 'react'

const Confirm = (props) => {
    return (
        <div className='confirmer'>
            <h2>Delete comment</h2>
            <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
            <div className='CBtns'>
                <p onClick={props.no} className='No'>No, cancel</p>
                <p onClick={props.delete} className='Yes'>Yes, delete</p>
            </div>
        </div>
    )
}

export default memo(Confirm)