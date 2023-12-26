
import MyClassComponent from "./components/MyClassComponets";

function App() {
    const kvArray = [
        { key: 1, value: 10 },
        { key: 2, value: 20 },
        { key: 3, value: 30 }
      ];
    return (
    <>
    <MyClassComponent  />


   
    { kvArray.map((e)=> (
        <div key={e.key} >{e.value}</div>
    ))}
    </>)}

   


   

export default App