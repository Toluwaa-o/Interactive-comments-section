import React from 'react'

const Minus = (props) => {
    function allInOne() {
        props.also()
        props.minusHandler('minus')
    }

    return (
    <svg style={{cursor: 'pointer'}} onClick={props.handler ? () => allInOne() : null} width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill={props.handler ? "#6d6e8f" : "#C5C6EF"}/></svg>
)}

export default Minus