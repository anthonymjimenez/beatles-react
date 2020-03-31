import React from 'react'
import { Body } from '../pageData/revolver/Body'
import { Quote } from '../pageData/revolver/Quote'
import { Table } from '../pageData/revolver/Table'

import { Page } from '../template/Page'

export const Revolver = () => {
    return (
        <div>
        <Page title={"Revolver"}
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
