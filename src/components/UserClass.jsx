import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
        count:0,
        count2:2,
        
    };
    console.log(this.props.name+"Child Constructor")
}

componentDidMount(){
  console.log(
    this.props.name+"Child Component did mount"
  )
}

  render() {
    const {name,location} = this.props;
    const {count,count2} = this.state;


    console.log(this.props.name+"Child Render")

    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button onClick={()=>{
          this.setState({count:this.state.count+1})
        }}> Count Increase </button>
        <h4>Name:{this.props.name} </h4>
        <h4>Location:{this.props.Location}</h4>
        <h4>Contact:{this.props.Contact}</h4>
      </div>
    );
  }
}

export default UserClass;
