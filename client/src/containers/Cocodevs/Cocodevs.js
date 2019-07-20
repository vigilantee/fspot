import React from "react";


class Cocodevs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch('http://www.fspot.in/api/v1/cocodevs')
      .then(response => response.json())
      .then(data => this.setState({ data }, () => console.log("data is ....", this.state.data)));
  }

  renderCartBlades() {
    if (!this.state.data) return <div>Loading....</div>;
    return (
      this.state.data.map((elem, i) => {
        return (
          <div>
            {elem.name}
            <br />
            <br />
            <a href={elem.url} target='_blank'>
              {elem.description}
            </a>
            <br/>
            {elem.title}
            <br />
            <br />
            <br />
          </div>
        );
      })
    );
  }

  render() {
    return (
      <div>
        {this.renderCartBlades()}
      </div>
    );
  }
}

export default Cocodevs;
