import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  render(){
    const image = this.imageData();
    return(
      <>
        <div id="parent">{
          image.map(element => {
            return(
              <img key={element.id} src={element.img} id={element.id}></img>)
              console.log(element);
          })
        }
        </div>
      </>
     )
  }
}

