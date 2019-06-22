import React from "react";
import { connect } from 'react-redux';

import { getMenu, incrementQuantity, decrementQuantity, updateItem, addToCart } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';
import Navbar from "../../components/NavBar/NavBar";
import CartSummaryCard from '../../components/CartSummaryCard/CartSummaryCard';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCartBlades() {
    return (
      this.props.menu.menu.map((elem,i) => {
        return (
          <CartSummaryCard
            cartItem={elem}
            quantity={this.props.menu.cart[i]}
            key={i}
          />
        );
      })
    );
  }

  render() {
    if (!this.props.menu.loaded)
      return <div>Loading...</div>;
    return (
      <div>
        <Navbar cart={false} history={this.props.history} />
        <div style={{ marginRight: 150, marginLeft: 150, flexDirection: "row", marginTop: 100, display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, alignItems: "space-between", flexDirection:"column" }}>
              {this.renderCartBlades()}
            </div>
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
