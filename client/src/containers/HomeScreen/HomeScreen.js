import React from "react";
import { connect } from 'react-redux';

import { getMenu } from '../../actions';
import Card from '../../components/FoodCard/FoodCard';
import veg from '../../assets/veg.png';
import nonveg from '../../assets/nonveg.png';

const menulist=[
    {
        name:"pizza ",
        price:"100",
        type:"nonveg",
        details:"Finger Licking pizza",
        "image_url":"https://i0.wp.com/lazizkhana.com/wp-content/uploads/2015/09/momos.jpg?w=640&ssl=1"
    },
    {
        
        name:"combo pizza ",
        price:"200",
        type:"veg",
        details:"Finger Licking pizza",
        "image_url":"http://www.theterracekitchen.in/wp-content/uploads/2017/09/LREdit_Wordpress-5638.jpg"
    },
    {
    
        name:"double pizza",
        price:"300",
        type:"veg",
        details:"Finger Licking pizza",
        "image_url":"http://www.theterracekitchen.in/wp-content/uploads/2017/09/LREdit_Wordpress-5638.jpg"
    },
    {
        
        name:"burger",
        price:"125",
        type:"nonveg",
        details:"Finger Licking pizza",
        "image_url":"http://www.theterracekitchen.in/wp-content/uploads/2017/09/LREdit_Wordpress-5638.jpg"
    }
  ]
  
// <CardComponent key={0}  details={menulist[0]} veg={veg} nonveg={nonVeg}/>


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.props.getMenu();
  }
  updateInputValue(val) {
    this.setState({
      count:val
    })
  }
  handleIncreament() {
    this.setState({
      count: parseInt(this.state.count) + 1
    });
  }
  handleDecreament() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0
    });
  }
  render() {
    console.log("the menu integration is.....", this.props.menu);
    const props = menulist[0];
    const image = props.type == "veg" ? veg : nonveg;
    const cardBgColor = props.type == "veg" ? "#008200" : "#BF3304";
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          margin: 20,
          width: 400,
          backgroundColor: "powderblue",
          border: `5px solid ${cardBgColor}`
        }}
      >
        <Card
          props={props}
          logo={image}
          count={this.state.count}
          plus={() => this.handleIncreament()}
          minus={() => this.handleDecreament()}
          updateInputValue={(e)=>this.updateInputValue(e)}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getMenu: getMenu,
};

function mapStateToProps (state){
  return {
    menu: state.menu.menu,
  }
}

export default connect( mapStateToProps,mapDispatchToProps)(HomeScreen);

