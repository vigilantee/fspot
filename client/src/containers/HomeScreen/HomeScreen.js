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

