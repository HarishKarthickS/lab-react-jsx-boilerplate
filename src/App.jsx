import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  const image = imageData();
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
export default App
