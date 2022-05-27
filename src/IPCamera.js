import React, { Component } from 'react';
import { Container, Ratio, Row, Spinner } from 'react-bootstrap';
// import { BehaviorSubject } from 'rxjs';
import './Camera.scss'

export default class IPCamera extends Component {
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
        // http://camera.buffalotrace.com/mjpg/video.mjpg
        // http://pendelcam.kip.uni-heidelberg.de/mjpg/video.mjpg
        return (
            <div>
                {
                    this.state.loading ? (
                        <Spinner animation="grow" variant="primary" />
                    ) : null
                }
                <Ratio aspectRatio="16x9">
                    <iframe
                        scrolling="no" frameBorder="0"
                        src="http://camera.buffalotrace.com/mjpg/video.mjpg"
                        title='UCL AutoCar Camera Page'
                        allow="camera *;microphone *"
                        onLoad={this.myframe}
                    />
                </Ratio>
            </div>
        )
    }

}