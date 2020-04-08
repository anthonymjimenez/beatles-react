import styled from '@emotion/styled'

const CustomLink = styled.ul`
  width: 75%;
  display: flex;
  justify-content: space-around;
    align-items: center;
    list-style: none;
  li:link{
    text-decoration:none;
    color:red;
  }
  li:visited{
    text-decoration: none;
    color: green;
  }
`

export default CustomLink;