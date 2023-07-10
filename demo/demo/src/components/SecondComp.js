import MyApp from "../contexts/MyApp";
const SecondComp = () => {
    const myApp = useContext(MyApp)
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {MyApp.text}
      </p>
    </>
  );
};
export default SecondComp;
