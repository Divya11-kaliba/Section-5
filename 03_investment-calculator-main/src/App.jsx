import { useState } from "react";
import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Results from "./Components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000, 
    annualInvestment: 2000,  
    interestRate: 5,         
    duration: 10,            
});

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput, 
          [inputIdentifier]: +newValue  
      };
  });
}

  return (

    <div>
    <Header/>
    <UserInput  userInput={userInput} onchange={handleChange}/>
    <Results input={userInput}/>
    </div>
    
  )
}

export default App
