import React, { useState } from "react";
import SnakeGame from './map/containers/SnakeGame';
import { Provider } from 'react-redux'
// import * as serviceWorker from './map/serviceWorker';
import { Row } from 'react-bootstrap';

import store from './map/store';

export default function MyMap() {

    return (
        <Row style={{
            position: 'relative',
            width: '90vw',
            height: 'calc(1286 / 2048 * 90vw)',
            justifyContent: 'center',
            backgroundImage: `url(c2n.png)`,
            backgroundSize: "cover",
            // backgroundColor: 'black',
            display: 'block',
            paddingLeft: '0',
            paddingRight: '0',
        }}>
            <Provider store={store}>
                <SnakeGame />
            </Provider>
        </Row>
    )


}