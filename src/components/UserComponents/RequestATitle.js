import React from 'react';
import styled from "styled-components";
import {useAuth0} from "@auth0/auth0-react";


function RequestATitle(props) {
    const {user} = useAuth0();
    return (
        <Container>
            TEST
        </Container>
    );
}

const Container = styled.div`
box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
`

export default RequestATitle;