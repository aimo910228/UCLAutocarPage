import React from 'react';
import { Container, Col, Button, Row } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";

// import { Connector } from 'mqtt-react';

export default function Around() {
    // var myInterval = null;
    function direction(btn) {
        fetch('https://uclautocar.54ucl.com/mqtt', { //http://163.18.26.225:8080/mqtt
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({ "topic": "ucl/cam/", "message": btn })
        }).then((res) => {
            res.json().then((ok) => { console.log(ok); })
            console.log(btn);
        }).catch((error) => {
            console.log(`Error: ${error}`);
        })
    }

    function press(btn) {
        direction(btn);
        // if (btn !== "stop") {
        //     myInterval = setInterval(direction, 200, btn);

        // } else {
        //     stop()
        // }
    }

    // function stop() {
    //     function stopInterval() {
    //         clearTimeout(myInterval);
    //         //myInterval.unref();
    //     }
    //     setTimeout(stopInterval);
    //     direction("stop")
    // }

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
            <style type="text/css">
                {`
                .btn-cam {
                    background-color: #27EEEE;
                    color: black;
                }
                `}
            </style>

            <Container className='textcenter'>
                {/* <div class="position-relative" >
                <Button size="lg" className=" m-3"
                    onClick={(e) => press("up")}
                    onTouchMove={CancelEvent}
                >
                    <i className="bi bi-arrow-up"></i>
                </Button>
                <Button size="lg" className=" m-3"
                    onClick={(e) => press("left")}
                    onTouchMove={CancelEvent}
                >
                    <i className="bi bi-arrow-left"></i>
                </Button>
                <Button size="lg" className=" m-3"
                    onClick={(e) => press("right")}
                    onTouchMove={CancelEvent}
                >
                    <i className="bi bi-arrow-right"></i>
                </Button>
                <Button size="lg" className="m-3"
                    onClick={(e) => press("down")}
                    onTouchMove={CancelEvent}
                >
                    <i className="bi bi-arrow-down"></i>
                </Button>
            </div> */}
                <Row>
                    <Col md={{ span: 2, offset: 3 }}></Col>
                    <Col md={2}>
                        <Button variant="cam" size="lg" className=" m-3"
                            // Mouse 滑鼠 Touch 觸控裝置
                            onClick={(e) => press("up")}
                            // onMouseDown={(e) => press("up")}
                            // onTouchStart={(e) => press("up")}
                            // onMouseUp={(e) => press("stop")}
                            // onMouseOut={(e) => press("stop")}
                            // onTouchEnd={(e) => press("stop")}
                            // onTouchCancel={(e) => press("stop")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-up"></i>
                        </Button>
                    </Col>
                    <Col md={2}></Col>
                </Row>
                <Row>
                    <Col md={{ span: 2, offset: 3 }}>
                        <Button variant="cam" size="lg" className=" m-3"
                            onClick={(e) => press("left")}
                            // onMouseDown={(e) => press("left")}
                            // onTouchStart={(e) => press("left")}
                            // onMouseUp={(e) => press("stop")}
                            // onMouseOut={(e) => press("stop")}
                            // onTouchEnd={(e) => press("stop")}
                            // onTouchCancel={(e) => press("stop")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-left"></i>
                        </Button>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={2}>
                        <Button variant="cam" size="lg" className=" m-3"
                            onClick={(e) => press("right")}
                            // onMouseDown={(e) => press("right")}
                            // onTouchStart={(e) => press("right")}
                            // onMouseUp={(e) => press("stop")}
                            // onMouseOut={(e) => press("stop")}
                            // onTouchEnd={(e) => press("stop")}
                            // onTouchCancel={(e) => press("stop")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-right"></i>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 2, offset: 3 }}></Col>
                    <Col md={2}>
                        <Button variant="cam" size="lg" className="m-3"
                            onClick={(e) => press("down")}
                            // onMouseDown={(e) => press("down")}
                            // onTouchStart={(e) => press("down")}
                            // onMouseUp={(e) => press("stop")}
                            // onMouseOut={(e) => press("stop")}
                            // onTouchEnd={(e) => press("stop")}
                            // onTouchCancel={(e) => press("stop")}
                            onTouchMove={CancelEvent}
                        >
                            <i className="bi bi-arrow-down"></i>
                        </Button>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container >
        </>
    )

}