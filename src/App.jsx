
import MyClassComponent from "./components/MyClassComponets";

function App() {
   const setCount = (i,f)=>{
   f({count: i}); 
    console.log(this.state.count ,"this count value updated with  function came from props ")
   }

    return <MyClassComponent  />
}
export default App