// 1. Add an event listener to the button on click
// 2. If either select box does not have an option selected, surface an error
// 3. When you click the button, make a change to the changing element
//   (a) If 'Color' is selected, change the color of the text
//   (b) If 'Background Color' is selected, change the background-color
//   (c) If 'Font Style' is selected, change the font-style
//   (d) If 'Font Weight' is selected, change the font-weight
// 4. Run the transitions in order. Make sure to nest the timeouts!
// 5. When you click the "Go!" button again, it should clear out the styles first before transition to new styles.

const button = document.querySelector("#transition")
const text = document.querySelector("#changing")
const changeA = document.querySelector("#change-A")
const changeB = document.querySelector("#change-B")
const err = document.querySelector("#error")

const delay = 1000;

button.addEventListener("click",()=>{
  valueA = changeA.options[changeA.selectedIndex].value
  valueB = changeB.options[changeB.selectedIndex].value
  if (valueA || valueB){
    if (valueA && valueB){
      changeProperty(text,valueA)
      setTimeout(()=>{
        changeProperty(text,valueB)
      },delay)
    } else {
      changeProperty(text,valueA || valueB)
    }
  } else {
    console.log("please select something!")
    document.querySelector("body").classList.add("error")
    error.innerText = "ERROR"
    setTimeout(()=>{
      document.querySelector("body").classList.remove("error")
      error.innerText = ""
    },700)
  }
})

function changeProperty(element,property){
  text.classList.contains(property) ? element.classList.remove(property) : element.classList.add(property)
}
