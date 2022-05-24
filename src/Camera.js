import React, { Component } from 'react';
import { Container, Ratio, Row, Spinner } from 'react-bootstrap';
// import { BehaviorSubject } from 'rxjs';
import './Camera.css'

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
                <div>
                    {
                        this.state.loading ? (
                            <Spinner animation="grow" variant="primary" />
                        ) : null
                    }
                    <Ratio aspectRatio="16x9">
                        <iframe
                            scrolling="no" frameBorder="0"
                            src="https://uclautocar.54ucl.com:8086/#/"
                            title='UCL AutoCar Camera Page'
                            allow="camera *;microphone *"
                            onLoad={this.myframe}
                        />
                    </Ratio>
                </div>
        )
    }

}