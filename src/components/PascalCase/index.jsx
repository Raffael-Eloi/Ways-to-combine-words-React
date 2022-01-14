import "../../App.css";
import { useState } from "react";

function PascalCase() {
  const [inputValue, setInputValue] = useState("")

  function convertToPascalCase() {
    if (inputValue !== "") {
      let result = "";
      let splitInputValue = inputValue.split(" ");
      for (let palavra of splitInputValue) {
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
      return result;
    }
  }

  function showAnswer() {
    document.getElementById("resultPascalcase").textContent = convertToPascalCase();
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <span>Type the name of your variable (two words or more): </span>
      <input type="text" onChange={(e) => handleChange(e)} value={inputValue} className="inputComponent" /> <button onClick={(showAnswer)} className="buttonVerify">Verify</button> <br />
      <strong>PASCALCASE:</strong> <span id="resultPascalcase" className="result"></span>
      <br /><br />
    </div>
  )
}

export default PascalCase;