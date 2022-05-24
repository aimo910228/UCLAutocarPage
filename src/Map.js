import React, { useState } from "react";
import SnakeGame from './map/containers/SnakeGame';
import { Provider } from 'react-redux'
// import * as serviceWorker from './map/serviceWorker';
import { Row } from 'react-bootstrap';

import store from './map/store';

export default function MyMap() {

	return (
		<Row
			style={{
				width: '100%',
				justifyContent: 'center',
			}}
		>
			<Provider store={store}>
				<SnakeGame />
			</Provider>

		</Row>
	)

}