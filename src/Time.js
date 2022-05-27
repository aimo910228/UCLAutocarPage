import React from 'react';
class UpdateTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = { updateDateTime: Date().toLocaleString() };
    }

    tick() {
        //new Promise((resolve, reject) => {
        fetch('https://uclautocar.54ucl.com/carlocate', {
            method: "POST",
            headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
        })
            .then((res) => res.json())
            .then((location) => {
                console.log(location.time);
                console.log(JSON.stringify(location, 0, 4));
                this.setState(() => ({
                    updateDateTime: location.time
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

            <p>{this.state.updateDateTime}</p>
        );


    }

}
export default UpdateTime;
