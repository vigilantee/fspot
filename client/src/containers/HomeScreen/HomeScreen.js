import React from "react";
import { connect } from 'react-redux';

import { getMenu, incrementQuantity, decrementQuantity, updateItem, addToCart } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';



class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMenu();
  }

  renderCards() {
    const menu = this.props.menu;
    return (menu.menu.map((element, i) => {
      return <Card
        props={element}
        count={menu.itemsQuantity[i]}
        plus={() => this.props.incrementQuantity(i)}
        minus={() => this.props.decrementQuantity(i)}
        updateInputValue={(e) => this.props.updateItem(e, i)}
        addToCart={(e) => this.props.addToCart(e, i)}
        key={i}
      />
    }));
  }

  render() {
    if (!this.props.menu.loaded)
      return <div>Loading...</div>;
    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", flex: 1 }}>
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  getMenu: getMenu,
  incrementQuantity: incrementQuantity,
  decrementQuantity: decrementQuantity,
  updateItem: updateItem,
  addToCart: addToCart
};

function mapStateToProps(state) {
  return {
    menu: state.menu,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
