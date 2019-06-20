import React from "react";
import { connect } from 'react-redux';

import { getMenu, incrementQuantity, decrementQuantity, updateItem } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';
import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';


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
    if(!this.props.menu.loaded)
      return <div>Loading...</div>;
    console.log("the menu integration is.....", this.props.menu);
    const props = this.props.menu.menu[0];
    return (
        <Card
          props={props}
          count={this.props.menu.itemsQuantity[0]}
          plus={() => this.props.incrementQuantity(0)}
          minus={() => this.props.decrementQuantity(0)}
          updateInputValue={(e)=>this.props.updateItem(e,0)}
        />
    );
  }
}

const mapDispatchToProps = {
  getMenu: getMenu,
  incrementQuantity: incrementQuantity,
  decrementQuantity: decrementQuantity,
  updateItem: updateItem
};

function mapStateToProps (state){
  return {
    menu: state.menu,
  }
}

export default connect( mapStateToProps,mapDispatchToProps)(HomeScreen);

