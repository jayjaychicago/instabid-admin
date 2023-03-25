import React from 'react';
// import { CopyBlock } from "react-code-blocks";
import { CodeSection } from "react-code-section-lib"

import { useAuth0 } from '@auth0/auth0-react';

import Button from 'react-bootstrap/Button';

import '../assets/styles/LandingPage.scss';

export function LandingPage() {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();

    return (
        <body className="landing">
            <div className="centered-vertical-container">
                <div className="instabid-heading">
                    <h1>Instabid</h1>
                    <h3><em>A fast, scalable trading API</em></h3>
                    <Button variant="primary" size="lg" onClick={() => { loginWithRedirect({}) }}>Login</Button>
                    <div className="code-block">
                        <CodeSection theme="dark" lang="bash">
                            {`curl https://api.instabid.io/order --request POST --data '{"exchange" : "Insta", "product": "prod", "side": "B", "qty": 1, "price": 6, "user": "julien", "apiKey": "123456"}' --header "Content-Type: application/json"`}
                        </CodeSection>
                    </div>
                </div>
            </div>
        </body>
    );
    // <CopyBlock
    //     text={`curl https://api.instabid.io/order --request POST --data '{ "exchange" : "Insta", "product" : "prod", "side" : "B", "qty" : 1, "price" : 6, "user" : "julien", "apiKey" : "123456"}' --header "Content-Type: application/json"`}
    //     language={'javascript'}
    //     showLineNumbers={false}
    //     theme={`codepen`}
    // />
}