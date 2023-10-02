import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Menu = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    
`

export const MenuItem = styled(NavLink)`
font-size: 16px;
margin-left: -20px;
text-decoration: none;
color: black;
&.active {
    color: blue;
}
&:hover {
    text-decoration: underline;
}
`