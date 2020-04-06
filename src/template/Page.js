import React from 'react'
import ReadButton from '../components/style/readButton'
import BuyButton from '../components/style/buyButton'
import Quote from '../components/style/quote'
import Table from '../components/style/table'
import Body from '../components/style/Body'
import './Page.css'
import { Link } from 'react-router-dom'
import { Grid, Cell } from "styled-css-grid"

//css margins etc ....general CSS 

export const Page = ({ title, quote, body, table, buyMore, readMore}) => {
    return (
        <>
        <Grid columns={"1fr 1fr "}
            rows={"200px 50px  "} 
            areas={["albumTitle albumTitle",
                    "quote table",
                    "bodyText table",
                    "readBtn buyBtn"]}
        >
            <Cell area="albumTitle"><h1>{title}</h1></Cell>
            <Cell area="quote" ><Quote>{quote()}</Quote></Cell>
            <Cell area="readBtn"><Link to = {readMore}> <ReadButton>Read more</ReadButton>
            </Link></Cell>
            <Cell area="bodyText" ><Body>{body()}</Body></Cell>
            <Cell area="table"><Table>{table()}</Table></Cell> 
            <Cell area="buyBtn"><Link to = {buyMore}><BuyButton>Buy more</BuyButton></Link></Cell>    
            </Grid>
        </>
    )
}
