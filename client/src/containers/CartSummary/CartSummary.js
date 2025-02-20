import React from "react";
import { connect } from 'react-redux';

import { getMenu, incrementQuantity, decrementQuantity, updateItem, addToCart } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';
import Navbar from "../../components/NavBar/NavBar";
import CartSummaryCard from '../../components/CartSummaryCard/CartSummaryCard';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.props.getMenu();
  }

  renderCartBlades() {
    return (
      this.props.menu.menu.map((elem,i) => {
        if(this.props.menu.cart[i]==0) return null;
        return (
          <CartSummaryCard
            cartItem={elem}
            quantity={this.props.menu.cart[i]}
            count={this.props.menu.cart[i]}
            key={i}
            addToCart={(data)=>this.props.addToCart(data, i)}
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
        <div style={{ marginRight: "5rem", marginLeft: "5rem", flexDirection: "column", marginTop: "6rem", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flex: 1 }}>
            <div style={{ display: "flex", flexWrap: "wrap", flex: 1, alignItems: "space-between", flexDirection:"column" }}>
              {this.renderCartBlades()}
            </div>
          </div>
          <div style={{fontSize:40,display:"flex",justifyContent:"flex-end"}}><b>Total: {this.props.menu.total}</b></div>
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
