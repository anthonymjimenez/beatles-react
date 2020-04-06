import styled from '@emotion/styled'

const Table = styled.table`
    display: flex;
    justify-content: center;
    
    
    
    margin-bottom: 50px;
    border-collapse: collapse;
   
    tr, td, th{
        background-color:grey;
        padding-left:15px;
        padding-right: 15px;
        padding-top: 10px;
        padding-bottom: 5px;   
        
    }
    th{
        font-weight:bold;
    }
    
`

export default Table;