import React from "react";
import Camera from "./Camera";
import MQttButton from "./Buttons";
// import MyMap from "./Map";
import { Container, Col, Row } from "react-bootstrap";
import Time from "./Time";
import Around from "./Around";
import Testmap from "./Test";
import MyMap from "./Map";



// https://stackoverflow.com/questions/70705818/react-router-dom-displays-nothing-when-using-route

export default function Page() {
	return (
		<>
			<Container fluid className="text-center w-auto p-3">
				<Row className="">
					<Col md={12} lg={6} className="">
						<Row className="m-1" style={{ border: '1px solid #dadada' }}>
							<h3 style={{ borderBottom: '3px solid #81AAE8' }}>車子前鏡頭</h3>
							<Camera />
						</Row>
						<Row className="m-1" style={{ border: '1px solid #dadada' }}><MQttButton /></Row>
					</Col>
					<Col md={12} lg={6} className="">
						<Row className="m-1" style={{ border: '1px solid #dadada' }}>
							<h3 style={{ borderBottom: '3px solid #27EEEE' }}>周遭環境鏡頭</h3>
							<Camera />
						</Row>
						<Row className="m-1" style={{ border: '1px solid #dadada' }}><Around /></Row>
					</Col>
				</Row>
				<hr style={{ border: '1px solid #BAA9DA', opacity: 1 }} />
				<Row >
					<Row className="m-1" style={{ backgroundColor: "#BAA9DA", textAlign: "left" }}>
						<p>Tip</p>
						<span><span className="text-danger">紅色點</span>：車子</span>
						<span><span className="text-primary">藍色點</span>：定位點</span>
						車子更新時間：<Time />
					</Row>
					<Row className="m-1 justify-content-center"><Testmap /></Row>
				</Row>
			</Container >
		</>
	);

}
