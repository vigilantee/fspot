import React from "react";
import { connect } from 'react-redux';

import { getMenu } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.props.getMenu();
  }
  updateInputValue(val) {
    const re = /^[0-9\b]+$/;
    if (val === '' || re.test(val)) {
      this.setState({
        count:val
      })
    }
  }
  handleIncreament() {
    const currentVal = (isNaN(parseInt(this.state.count)))?0:parseInt(this.state.count);
    this.setState({
      count: currentVal + 1
    });
  }
  handleDecreament() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0
    });
  }
  render() {
    if(!this.props.menu.loaded) return <div>loading...</div>;
    console.log("the menu integration is.....", this.props.menu);
    const props = this.props.menu.menu[1];
    
    return (
        <Card
          props={props}
          count={this.state.count}
          plus={() => this.handleIncreament()}
          minus={() => this.handleDecreament()}
          updateInputValue={(e)=>this.updateInputValue(e)}
        />
    );
  }
}

const mapDispatchToProps = {
  getMenu: getMenu,
};

function mapStateToProps (state){
  return {
    menu: state.menu,
  }
}

export default connect( mapStateToProps,mapDispatchToProps)(HomeScreen);

