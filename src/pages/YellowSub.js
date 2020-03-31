import React from 'react'
import { Body } from '../pageData/yellowSub/Body'
import { quote } from '../pageData/yellowSub/quote'
import { table } from '../pageData/yellowSub/table'

import { buyButton } from '../components/buyButton'
import { readButton } from '../components/readButton'

import { Page } from '../template/Page'
export const YellowSub = () => {
    return (
        <Page title={"Yellow Submarine"}
         body={Body}
         quote={quote} 
         table={table}
        buyMore={"anthonyjimenez.me"}
        readMore={"anthonyjimenez.me"}
        
        
        >

        </Page>
    )
}
