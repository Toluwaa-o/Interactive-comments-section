import React from 'react'
import Delete from '../../Delete/Delete'
import Edit from '../../Edit/Edit'

const UserBtns = (props) => (
    <div className='UserBtns'>
        <Delete class={props.class} delete={props.delete} />
        <Edit edit={props.edit} />
    </div>
)

export default UserBtns