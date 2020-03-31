import React from 'react'
import { Body } from '../pageData/abbeyRoad/Body'
import { Quote } from '../pageData/abbeyRoad/Quote'
import { Table } from '../pageData/abbeyRoad/Table'

import { Page } from '../template/Page'

export const AbbeyRoad = () => {
    return (
        <div>
        <Page title={"Abbey Road"}
         body={Body}
         quote={Quote} 
         table={Table}
         buyMore={"anthonyjimenez.me"}
         readMore={"anthonyjimenez.me"}
        
        
        >

        </Page>
        </div>
    )
}
