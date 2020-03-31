import React from 'react'
import ReadButton from '../components/style/readButton'
import BuyButton from '../components/style/buyButton'
import Quote from '../components/style/quote'
import Table from '../components/style/table'
import './Page.css'
//css margins etc ....general CSS 

export const Page = ({ title, quote, body, table, buyMore, readMore}) => {
    return (
        <>
         <div className = "page">
            <h1>{title}</h1>
            <Quote>{quote()}</Quote>
            <ReadButton link={readMore}>Read more</ReadButton>
            <p>{body()}</p>
            <Table>{table()}</Table> 
            <BuyButton link = {buyMore}>Buy more</BuyButton>
            </div>
        </>
    )
}
