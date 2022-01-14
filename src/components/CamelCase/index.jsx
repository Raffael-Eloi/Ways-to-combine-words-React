import "../../App.css";
import { useState } from "react";

function CamelCase() {
  const [inputValue, setInputValue] = useState("")

  function convertToCamelCase() {
    if (inputValue !== "") {
      let result = "";
      let splitInputValue = inputValue.split(" ");
      let first = true;
      for (let palavra of splitInputValue) {
        if (first) {
          let letras = palavra.split("");
          for (let letra of letras) {
            result += letra.toLowerCase();
          }
          first = false;
        }
        else {
          let letras = palavra.split("");
          let initialLetter = true;
          for (let letra of letras) {
            if (initialLetter === true) {
              result += letra.toUpperCase();
              initialLetter = false;
            }
            else {
              result += letra.toLowerCase();
            }
          }
        }
      }
      return result;
    }
  }

  function showAnswer() {
    document.getElementById("resultCamelcase").textContent = convertToCamelCase();
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <span>Type the name of your variable (two words or more): </span>
      <input type="text" onChange={(e) => handleChange(e)} value={inputValue} className="inputComponent" /> <button onClick={(showAnswer)} className="buttonVerify">Verify</button> <br />
      <strong>CAMELCASE:</strong> <span id="resultCamelcase" className="result"></span>
      <br /> <br />
    </div >
  )
}

export default CamelCase;