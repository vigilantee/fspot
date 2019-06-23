import React from "react";


class AddToCartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered:false
    }
  }
  setHover() {
    this.setState({ hovered: true });
  }
  cancelHover() {
    this.setState({ hovered: false });
  }
  render() {
    return (
      <button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          marginBottom: 8,
          height: 30,
          borderRadius: 5,
          outline: "none",
          backgroundColor: this.state.hovered?"#4CA82C":"white",
          opacity: this.state.hovered?0.7:1,
        }}
        onClick={() => this.props.addToCart(this.props.count==0?1:this.props.count)}
        onMouseEnter={()=>this.setHover()}
        onMouseLeave={()=>this.cancelHover()}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          Add to cart
      </div>
      </button>
    );
  }
}

export default AddToCartButton;