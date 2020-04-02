import React from 'react'
import ReadButton from '../components/style/readButton'
import BuyButton from '../components/style/buyButton'
import Quote from '../components/style/quote'
import Table from '../components/style/table'
import './Page.css'
import { Link } from 'react-router-dom'

//css margins etc ....general CSS 

export const Page = ({ title, quote, body, table, buyMore, readMore}) => {
    return (
        <>
         <div className = "page">
            <h1>{title}</h1>
            <Quote>{quote()}</Quote>
            <Link to = {readMore}> <ReadButton>Read more</ReadButton>
            </Link>
            <p>{body()}</p>
            <Table>{table()}</Table> 
            <Link to = {buyMore}><BuyButton>Buy more</BuyButton></Link> 
            </div>
        </>
    )
}
