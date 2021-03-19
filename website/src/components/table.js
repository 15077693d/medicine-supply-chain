import React from 'react';
import styled from 'styled-components';
import { theme, L1, L3 } from '../globalStyles'
import ProgressBar from '../components/progressBar'
import {InfoButton} from '../components/button'
const TableContainer = styled.div`
    grid-area:table;
    width: 100%;
    height:50vh;
    text-align:center;
    th, td {
    padding: 8px;
    }
    tr{
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

const TableWrapper = styled.div`
    width: 100%;
    height:100%;
    overflow-y:scroll;
`

const TableTitle = styled.tr`
    background-color:${theme.color.company_blue};
    width:100%;
    th{
        padding:10px;
    }
    th:nth-child(1){width:20%;}
    th:nth-child(2){width:10%;}
    th:nth-child(3){width:10%;}
    th:nth-child(4){width:60%;}
`
const _Table = styled.table`
    width: 100%;
    tr:nth-child(even) {background-color: ${theme.color.bar_grey};}
    tr{
        td:nth-child(1){width:20%;display:flex;justify-content:center;}
        td:nth-child(2){width:10%;}
        td:nth-child(3){width:10%;}
        td:nth-child(4){width:60%;}
        height:67px;
    }
`

//{flagObject,id,startObject,endObject}
const Table = ({supplyChains, openInfo}) => {
    return (
        <TableContainer>
        <table style={{width:"100%"}}>
        <tbody>
             <TableTitle>
                <th><L1>Address</L1></th>
                <th><L1>Start</L1></th>
                <th><L1>End</L1></th>
                <th><L1>Progress</L1></th>
            </TableTitle>
        </tbody>
        </table>
            
        <TableWrapper>
           <_Table>
           <tbody>
           {
            supplyChains?supplyChains.map(supplyChain => <tr>
                <td><InfoButton handleClick={() => openInfo(supplyChain)}>{supplyChain.address}</InfoButton></td>
                <td><L3>{supplyChain.start[0]}<br/>{supplyChain.start[1]}</L3></td>
                <td><L3>{supplyChain.end[0]}<br/>{supplyChain.end[1]}</L3></td>
                <td><ProgressBar {...supplyChain}/></td>
            </tr> ):null
           }
           </tbody>
        </_Table> 
        </TableWrapper>
        </TableContainer>
    );
};

export default Table;