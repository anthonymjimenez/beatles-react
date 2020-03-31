import React from 'react'
//css margins etc ....general CSS 

export const Page = ({ title, quote, body, table, buyMore, readMore}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{quote()}</h2>
            <button link={readMore}>Read more</button>
            <p>{body()}</p>
            <div>{table()}</div> 
            <button><a href = {buyMore}>Buy more</a></button>
        </div>
    )
}
