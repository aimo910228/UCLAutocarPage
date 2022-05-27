import React from 'react';
class Cardata extends React.Component {
    constructor(props) {
        super(props);
        this.state = { battery: '' };
    }

    tick() {
        //new Promise((resolve, reject) => {
        fetch('https://uclautocar.54ucl.com/carinfo', {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data.val);
                console.log(JSON.stringify(data, 0, 4));
                this.setState(() => ({
                    battery: data.val
                }));
            })
            .catch((error) => {
                console.log(`Error: ${error}`);
            });
        //})
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <p>車子{this.state.battery}</p>
        );


    }

}
export default Cardata;
