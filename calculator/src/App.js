import "./App.css";
import { useState } from "react";
function App() {
  const [historyList,setHistoryList]=useState([]);

  const [x, setX] = useState("");


  
  const write = (val) => {
    setX(x + val);
  };

  const calcult = () => {
    var y = eval(x);
    setX(y);
   setHistoryList([...historyList,x+"="+y]);
  //  updateHistory();
  };
function updateHistory() {
  if(historyList.length>=3){
    var z=[...historyList];
    z.shift();
    setHistoryList(z);
   }
}
  return (
    <>
      <div className="container">
        <input className="display" type="text" value={x} />
        <div>
          <button onClick={() => write("1")}>1</button>
          <button onClick={() => write("2")}>2</button>
          <button onClick={() => write("3")}>3</button>
          <button onClick={() => write("+")}>+</button>
        </div>

        <div>
          <button onClick={() => write("4")}>4</button>
          <button onClick={() => write("5")}>5</button>
          <button onClick={() => write("6")}>6</button>
          <button onClick={() => write("-")}>-</button>
        </div>

        <div>
          <button onClick={() => write("7")}>7</button>
          <button onClick={() => write("8")}>8</button>
          <button onClick={() => write("9")}>9</button>
          <button onClick={() => write("/")}>/</button>
        </div>

        <div>
          <button onClick={() => write("0")}>0</button>
          <button onClick={() => setX("")}>C</button>
          <button onClick={() => write(".")}>.</button>
          <button onClick={() => write("*")}>*</button>
        </div>

        <button className="enter" onClick={calcult}>
          Enter
        </button>
        <div>
          <ul>
          {historyList.map(data => (  
          <li>  
            {data}  
          </li>  
        ))}  
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
