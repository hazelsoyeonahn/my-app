import {useState, useEffect} from "react";

function Hello(){
  function destroyFn(){
    console.log("destroyed");
  }
  function effectFn(){
    console.log("created");
    return destroyFn; //return cleanup function if destoryed
  }
  useEffect(effectFn,[]);
  return <h1>Hello</h1>;
}
//    return () => console.log("destroyed"); //clean up function: do something if component is destroyed


function App() {
  const[showing, setShowing] = useState(false);
  const onClick = () =>setShowing((prev) => !prev);
    /*
  //state
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  //function
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {setKeyword(event.target.value)};
  
  console.log("I run all the time");
  const onlyOnce = () => {
    console.log("I run only once");
  }

  //useEffect allows the code to run only once
  useEffect(onlyOnce, []);

  useEffect(() => {
    console.log("CALL THE API");
  }, []);

  useEffect(() => {
    if(keyword !== "" && keyword.length > 4){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]); //array is used when you would like the changes specifically*/

  return (
   /* <div>
      <input value = {keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me! </button>
      </div>*/

      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing? "Hiding" : "Show"}</button>
      </div>
  );
}

export default App;
