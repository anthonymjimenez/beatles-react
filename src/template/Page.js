import React from 'react'
import ReadButton from '../components/style/readButton'
import BuyButton from '../components/style/buyButton'
import Quote from '../components/style/quote'

//css margins etc ....general CSS 

export const Page = ({ title, quote, body, table, buyMore, readMore}) => {
    return (
        <div>
        
            <h1>{title}</h1>
            <Quote>{quote()}</Quote>
            <ReadButton link={readMore}>Read more</ReadButton>
            <p>{body()}</p>
            <div>{table()}</div> 
            <BuyButton link = {buyMore}>Buy more</BuyButton>
        </div>
    )
}
