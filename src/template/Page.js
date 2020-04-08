import React from 'react'
import './Page.css'
import { Link } from 'react-router-dom'
import { Grid, Cell } from "styled-css-grid"

//css margins etc ....general CSS 

export const Page = ({ title, quote, body, table, buyMore, readMore}) => {
    return (
        <>
        <div className="layout">
            <h1 className="title">{title}</h1>
            <h4 className="quote">{quote()}</h4>
            <Link to = {readMore}> <button className="readBtn">Read more</button>
            </Link>
            <p className="Body">{body()}</p>
            <div className = "table" >{table()}</div>
            <Link to = {buyMore}><button className="buyBtn">Buy more</button></Link>
            </div>
        </>
    )
}
