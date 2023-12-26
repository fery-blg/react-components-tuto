import IsAuth from "./components/IsAuth";
import MyClassComponent from "./components/MyClassComponets";
const login = () => {
  localStorage.setItem("islogin", true);
  window.location.reload();
};

const logout = () => {
  localStorage.setItem("islogin", false);
  window.location.reload();
};
function App() {
  let isSunny = true;
  const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  return (
    <>
      <IsAuth>
        <MyClassComponent />

        {kvArray.map((e) => (
          <div key={e.key}>{e.value}</div>
        ))}
        {isSunny && <div>Today is Sunday</div>}

        {isSunny ? <>isSunny today </> : <> is not sunny</>}
      </IsAuth>
      <button onClick={login}>login</button>
      <button onClick={logout}>logout </button>
    </>
  );
}

export default App;
