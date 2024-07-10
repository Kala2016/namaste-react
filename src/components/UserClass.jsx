import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"Dummy",
        location:"Default"

      }
      // count:0,
      // count2:2,
    };
    console.log(this.props.name + "Child Constructor");
  }

   async componentDidMount() {
     console.log(this.props.name + "Child Component did mount");
    
    const data = await fetch("https://api.github.com/users/Kala2016") 
    const json = await data.json();

    this.setState({
      userInfo:json,

    })
    console.log(json);
    
  }

  componentDidUpdate(){
    console.log("Component did Update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");

  }

  render() {
    // const { name, location } = this.props;
    // const {count,count2} = this.state;

     console.log(this.props.name+"Child Render")

    const {name,location,avatar_url} = this.state.userInfo

    return (
      <div className="user-card">
        {/* <h1>Count:{count}</h1>
        <button onClick={()=>{
          this.setState({count:this.state.count+1})
        }}> Count Increase </button> */}
        <h4>Name:{name} </h4>
        <img src={avatar_url} />
        <h4>Location:{location}</h4>
        <h4>Contact:kalartisko@gmail.com</h4>
        
      </div>
    );
  }
}

export default UserClass;
