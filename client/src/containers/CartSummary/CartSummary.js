import React from "react";
import { connect } from 'react-redux';

import { getMenu, incrementQuantity, decrementQuantity, updateItem, addToCart } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';
import Navbar from "../../components/NavBar/NavBar";


class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMenu();
  }

  render() {
    if (!this.props.menu.loaded)
      return <div>Loading...</div>;
    return (
      <div>
        <Navbar cart={false}/>
        <div style={{ marginRight: 150, marginLeft: 150, flexDirection: "row", marginTop: 100, display: "flex", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, justifyContent: "center" }}></div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
