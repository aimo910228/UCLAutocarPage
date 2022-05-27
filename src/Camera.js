import React, { Component } from 'react';
import { Container, Ratio, Row, Spinner } from 'react-bootstrap';
// import { BehaviorSubject } from 'rxjs';
import './Camera.scss'

export default class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
        // this.myRef = React.createRef();
    }

    myframe = () => {
        this.hideSpinner();
    }

    hideSpinner = () => {
        this.setState({ loading: false });
    };


    render() {

        return (
            <Row style={{ maxWidth: '1024px', justifyContent: 'center' }}>
                {
                    this.state.loading ? (
                        <Spinner animation="grow" variant="primary" />
                    ) : null
                }
                <Ratio aspectRatio="16x9" style={{ maxWidth: '1024px', justifyContent: 'center' }}>
                    <iframe
                        scrolling="no" frameBorder="0"
                        src="https://uclautocar.54ucl.com:8086/#/"
                        title='UCL AutoCar Camera Page'
                        allow="camera *;microphone *"
                        onLoad={this.myframe}
                        style={{ display: 'block' }}

                    />
                </Ratio>
            </Row>
        )
    }

}