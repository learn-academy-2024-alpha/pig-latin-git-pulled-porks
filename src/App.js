import React, { useState } from "react"
import "./App.css"
import pullPork from "./assets/pullpork.webp"

const App = () => {
  // ACTION ITEM: to make the development process easier there are some preassigned words in the input field, when you are ready for your full user experience delete the test words passed to useState and pass an empty string
  const [userInput, setUserInput] = useState(
    " "
  )
  const [inputTranslated, setInputTranslated] = useState("")

  // ACTION ITEM: the "myPigLatinCodeHere" function is where you will put your logic to translate the sentence entered by the user into Pig Latin
  const myPigLatinCodeHere = () => {
    // NO MODIFICATION NEEDED: the variable "arrayOfUserInput" will contain the text input from the user split into an array of words
    const arrayOfUserInput = userInput.split(" ")
    console.log("arrayOfUserInput:", arrayOfUserInput)

    // NO MODIFICATION NEEDED: now that we have an array of words, we can map over the array and look at each word
    const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
      console.log("eachWord:", eachWord)

      // NO MODIFICATION NEEDED: this code will look at each word and identify the vowels
      const vowelsArray = eachWord.split("").filter((vowel) => {
        return (
          vowel === "a" ||
          vowel === "e" ||
          vowel === "i" ||
          vowel === "o" ||
          vowel === "u"
        )
      })
      console.log("vowelsArray:", vowelsArray)

      // ACTION ITEM: your Pig Latin logic goes here!

      // Input: userInput which a string
      // Output: word that begins with vowel and adds way to the end  
      // if word begin with "a" "e" "i" "o" "u" add "way" to the end.
      // Return that word 
      //Part 2
      // Input: If userInput contains "qu" in begining of the word.
      // Output: "qu" needs to be pushed to the end of the word and concat "ay"
      // Return the word
      //part 3
      // input: userInput contains no vowels but has a 'y'
      // output: moves all contonants to the end and adds ay to end of word

// console.log(eachWord.indexOf("q"))

let notConsonants = "aeiou"
let consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';


    if(eachWord.slice(0,3).includes("qu")) {
      let slicePoint = eachWord.indexOf("q") + 2
      return eachWord.slice(slicePoint) + (eachWord.slice(0, slicePoint)) + "ay"

    } else if (eachWord[0] === vowelsArray[0]){
      return eachWord + "way"
    
    } else if (eachWord.includes("y") && !notConsonants.includes()){
      let slicePointY = eachWord.indexOf("y")
      return eachWord.slice(slicePointY) + (eachWord.slice(0, slicePointY)) + "ay"
    } else if (consonants.includes(eachWord[0])) {
      let slicePointVowel = eachWord.search(/[aeiou]/i)
      return eachWord.slice(slicePointVowel) + eachWord.slice(0, slicePointVowel) + "ay"
    }
    //   // ACTION ITEM: this return will be the output of your Pig Latin'd code
      return eachWord
    })

    // NO MODIFICATION NEEDED: once the code has been modified it gets joined from an array back to a string
    const translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // NO MODIFICATION NEEDED: this will update the inputTranslated variable in state
    setInputTranslated(translatedWords)
  }

  // ACTION ITEM: this method restarts the game by setting the original state, when you are ready for your full user experience delete the test words in setUserInput and pass an empty string
  const restartGame = () => {
    setUserInput("  ")
    setInputTranslated("")
  }

  // NO MODIFICATION NEEDED: this method prevents React from refreshing the page unnecessarily
  const setUpPreventDefault = (e) => {
    e.preventDefault()
    myPigLatinCodeHere()
  }

  // NO MODIFICATION NEEDED: this method takes the value of the input and saves it in state
  const handleInput = (e) => {
    setUserInput(e.target.value)
  }

  return (
    <div className="page-container">
      <div className="body-container">
       <img src={pullPork} ></img>
        <h1>Pig Latin Translator</h1>
       

        <div className="input-section">
          <h4>Enter phrase to be translated:</h4>
          <input
            type="text"
            className="user-input"
            onChange={handleInput}
            value={userInput}
          />
          <br />
          <button onClick={setUpPreventDefault}>Submit</button>
          <button onClick={restartGame}>Clear</button>
        </div>
        <p>{inputTranslated}</p>
      </div>
      <footer>&copy; 2023 | Coded by: Ryan and Mark!</footer>
    </div>
  )
}

export default App
