let display = document.getElementById("display")

function appendToDisplay(value) {
  display.value += value
}

function clearDisplay() {
  display.value = ""
}

function calculate() {
  try {
    display.value = eval(display.value)
    // console.log(display)
  } catch (err) {
    display.value = "Error :)"
  }
}
