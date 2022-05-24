import React from 'react';
import { Container, Col, Button, Row } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

// import { Connector } from 'mqtt-react';

export default function MQttButton() {
    var myInterval = null;
    function direction(btn) {
        fetch('https://uclautocar.54ucl.com/mqtt', { //http://163.18.26.225:8080/mqtt
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ "topic": "ucl/car/", "message": btn })
        }).then((res) => {
            res.json().then((ok) => { console.log(ok); })
            console.log(btn);
        }).catch((error) => {
            console.log(`Error: ${error}`);
        })
    }

    function press(btn) {
        direction(btn);
        if (btn !== "0") {
            myInterval = setInterval(direction, 200, btn);

        } else {
            stop()
        }
    }

    function stop() {
        function stopInterval() {
            clearTimeout(myInterval);
            //myInterval.unref();
        }
        setTimeout(stopInterval);
        direction("0")
    }

    function CancelEvent(e) {
        e.preventDefault();
    }

    // <input type="button" value="test"
    //     onMousedown={}
    //     onTouchstart="ButtonPressed(this);"
    //     onMouseup="ButtonReleased(this);"
    //     onMouseout="ButtonReleased(this);"
    //     onTouchend="ButtonReleased(this);"
    //     onTouchcancel="ButtonReleased(this);"
    //     onTouchmove="CancelEvent(event);"
    // />
    // var btnClass = classNames('btn', this.props.className, {
    //     'btn-pressed': this.state.isPressed,
    //     'btn-over': !this.state.isPressed && this.state.isHovered
    //   });
    return (

        <>
            <Container>
                <style type="text/css">
                    {`
                    .btn-car {
                        background-color: #81AAE8;
                        color: black;
                    }
                    .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                    }
                    `}
                </style>
                <Row>
                    <Col md={{ span: 2, offset: 3 }}></Col>
                    <Col md={2}>
                        <Button variant="car" size="lg" className="m-3"
                            // Mouse 滑鼠 Touch 觸控裝置
                            onMouseDown={(e) => press("1")}
                            onTouchStart={(e) => press("1")}
                            onMouseUp={(e) => press("0")}
                            onMouseOut={(e) => press("0")}
                            onTouchEnd={(e) => press("0")}
                            onTouchCancel={(e) => press("0")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-up"></i>
                        </Button>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={{ span: 2, offset: 3 }}>
                        <Button variant="car" size="lg" className="m-3"
                            onMouseDown={(e) => press("2")}
                            onTouchStart={(e) => press("2")}
                            onMouseUp={(e) => press("0")}
                            onMouseOut={(e) => press("0")}
                            onTouchEnd={(e) => press("0")}
                            onTouchCancel={(e) => press("0")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-left"></i>
                        </Button></Col>
                    <Col md={2}></Col>
                    <Col md={2}>
                        <Button variant="car" size="lg" className="m-3"
                            onMouseDown={(e) => press("3")}
                            onTouchStart={(e) => press("3")}
                            onMouseUp={(e) => press("0")}
                            onMouseOut={(e) => press("0")}
                            onTouchEnd={(e) => press("0")}
                            onTouchCancel={(e) => press("0")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 2, offset: 3 }}></Col>
                    <Col md={2}>
                        <Button variant="car" size="lg" className="m-3"
                            onMouseDown={(e) => press("4")}
                            onTouchStart={(e) => press("4")}
                            onMouseUp={(e) => press("0")}
                            onMouseOut={(e) => press("0")}
                            onTouchEnd={(e) => press("0")}
                            onTouchCancel={(e) => press("0")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-down"></i>
                        </Button></Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </>
    )

}