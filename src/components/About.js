import { Component } from "react";
import UserClass from "./UserClass";




class About extends Component {
  constructor(props){
    super(props);

    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent Component Did Mount")
  }

  render(){
    console.log("Parent Render")
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Kala learning Namaste React Web Series </h2>      
        <UserClass  name={"First" }Location={"Thrissur class"} Contact={"kalartisko@gmail.com class"}   />
    
      </div>
    );

  }
 
};

export default About;
