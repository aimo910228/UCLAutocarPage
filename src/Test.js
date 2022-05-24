import React, { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import _ from 'lodash';
import { Provider } from 'react-redux'
import SnakeGame from './map/containers/SnakeGame';
import store from './map/store';

export default function Testmap() {
    const [car, setCar] = useState(0);
    useEffect(() => {

    })



    const mapWH = (1286 / 2048 * 100);
    const blockWH = (1042 / 2048 * 100);
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