import React from 'react'

const Message = ({data}) => {
    console.log(data);

    return (
        <div>
            <span>
                <b>
                    {data.name} :
                </b>
                {data.message}</span>    
        </div>
    )
}

export default Message
