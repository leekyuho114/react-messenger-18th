import { ReactComponent as HomeBar } from "../assets/Iphone/HomeBar.svg";
import styled from "styled-components";
function HomeIndicator(){
    return(
        <HomeBarWrapper>
            <StyledHomeBar/>
        </HomeBarWrapper>
    );
}
const HomeBarWrapper = styled.div`
    width: 23.4375rem;
    height: 2.125rem;
`;
const StyledHomeBar = styled(HomeBar)`
    width: 8.375rem;
    height: 0.3125rem;
    padding: 1.3125rem 7.5rem 0.5rem 7.5625rem;
`;
export default HomeIndicator;
