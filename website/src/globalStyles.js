// globalStyles.js
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body{
        font-family:Helvetica, Arial;
    }
`
const theme = {
    color:{
        company_blue:"#1F689E",
        btn_blue:"#0087FF",
        btn_red:"#FF003C",
        btn_grey:"#908E8E",
        bar_grey:"#F2F2F2"
    }
}
export {GlobalStyles, theme};