import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SimpleLink = styled(Link)`
text-decoration: none;
&:hover {
    color: blue;
    text-decoration: underline;
}`

