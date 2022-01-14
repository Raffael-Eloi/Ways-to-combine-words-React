import "../../App.css";
import { useState } from "react";

function SnakeCase() {
  const [inputValue, setInputValue] = useState("")

  function convertToSnakeCase() {
    if (inputValue !== "") {
      let result = "";
      let splitInputValue = inputValue.split(" ");
      for (let palavra of splitInputValue) {
        palavra = palavra.toLowerCase();
        result += palavra + "_";
      }
      result = result.slice(0, result.length - 1);
      return result;
    }
  }

  function showAnswer() {
    document.getElementById("resultSnakecase").textContent = convertToSnakeCase();
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <span>Type the name of your variable (two words or more): </span>
      <input type="text" onChange={(e) => handleChange(e)} value={inputValue} className="inputComponent" /> <button onClick={(showAnswer)} className="buttonVerify">Verify</button> <br />
      <strong>SNAKECASE:</strong> <span id="resultSnakecase" className="result"></span>
      <br /><br />
    </div>
  )
}

export default SnakeCase;