import Styled from "styled-components";

/* Copy CSS props from .roomsHero in App.css */
const StyledHero = Styled.header`
   min-height: 60vh;
   background: url(${(props) => props.img}) center/cover no-repeat;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export default StyledHero;
