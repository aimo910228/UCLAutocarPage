import React from 'react';
class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentDateTime: Date().toLocaleString() };
    }

    tick() {
        this.setState(state => ({
            currentDateTime: Date().toLocaleString()
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            
            <p>{this.state.currentDateTime}</p>
        );


    }

}
export default Time;
