import React from "react";
import styled from "styled-components";
import AceContainer from './AceContainer'
import CytoGraph from './CytoGraph'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
    justify-content: space-between;
`;

export default class Home extends React.Component {

    render() {
        return (
        <Container>
                <AceContainer></AceContainer>
                <CytoGraph></CytoGraph>
        </Container>
           
        );
    }
}











