import React from "react";
import { connect } from 'react-redux';

import { getMenu, incrementQuantity, decrementQuantity, updateItem } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';
import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMenu();
  }

  renderCards () {
    const menu = this.props.menu;
    return (menu.menu.map((element,i)=>{
      return <Card
        props={element}
        count={menu.itemsQuantity[i]}
        plus={() => this.props.incrementQuantity(i)}
        minus={() => this.props.decrementQuantity(i)}
        updateInputValue={(e)=>this.props.updateItem(e,i)}
      />
    }));
  }

  render() {
    if(!this.props.menu.loaded)
      return <div>Loading...</div>;
    return (
        <div>
          {this.renderCards()}
        </div>
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

