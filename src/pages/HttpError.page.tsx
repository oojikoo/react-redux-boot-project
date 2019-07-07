import React, { Component, useEffect } from 'react';
import { STATUS_CODES } from 'http';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 50px;
    background: ${(props) => props.theme.background};
`;

const HttpErrorCode = styled.div`

    height: 100%;
    font-size: 1.5rem;

    em {
        font-style: normal;
        font-weight: 400;
    }

    span {
        font-weight: 300;
    }
`;

interface IProps {
  history?: any;
  location?: any;
  match?: any;
}

function HttpError(props: IProps) {
    const { history, location, match: {
        params: { code }
    }

    } = props;
    useEffect(() => {
        console.log('code:', code);
        // return () => { clearTimeout(redirecting);};
    }, [code, history]);

    return (
        <Container>
            <HttpErrorCode>
                <em>{code}</em>
                &nbsp;
                <span>{STATUS_CODES[code]}</span>
            </HttpErrorCode>
        </Container>
    );
}

export default withRouter(HttpError);
