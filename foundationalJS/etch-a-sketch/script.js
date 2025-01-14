// Set back to default values on page refresh
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");
const penColorPicker = document.querySelector("#pen-color");
slider.value = 16;
penColorPicker.value = "#000000"; // Reset color picker to black

const gridWidth = getComputedStyle(document.body).getPropertyValue("--grid-width");
const accentColor = getComputedStyle(document.body).getPropertyValue("--accent-color");
const inactiveColor = getComputedStyle(document.body).getPropertyValue("--inactive-color");

const sketchPad = document.querySelector("#sketchpad");
const gridToggle = document.querySelector("#grid-toggle");
const rainbowColorToggle = document.querySelector("#rainbow");
const shadingToggle = document.querySelector("#gradient");
const eraserToggle = document.querySelector("#eraser");
const clearSketchButton = document.querySelector("#clear");

let squaresPerSide = 16;
let gridLinesVisible = false;
let eraserVisible = false;
let rainbowVisible = false;
let sketching = false;
let previousPenColor = "";
let shadeVisible = false;

let penColor = penColorPicker.value;
penColorPicker.addEventListener("input", (e) => {
  penColor = e.target.value; // Update penColor when the user selects a new color
});

eraserToggle.addEventListener("click", () => {
  eraserVisible = !eraserVisible;
  if (eraserVisible) {
    previousPenColor = penColor; // Store current pen color
    penColor = ""; // Set pen color to empty if eraser is active
    shadeVisible = false; // Turn off shading mode
    shadingToggle.style.color = inactiveColor; // Update shading button color
  } else {
    penColor = previousPenColor; // Restore previous pen color
  }
  eraserToggle.style.color = eraserVisible ? accentColor : inactiveColor;
});

rainbowColorToggle.addEventListener("click", () => {
  rainbowVisible = !rainbowVisible;
  if (rainbowVisible) {
    previousPenColor = penColor; // Store current pen color
  } else {
    penColor = previousPenColor; // Restore previous pen color
  }
  rainbowColorToggle.style.color = rainbowVisible ? accentColor : inactiveColor;
});

shadingToggle.addEventListener("click", () => {
  shadeVisible = !shadeVisible;
  if (shadeVisible) {
    previousPenColor = penColor; // Store current pen color
  } else {
    penColor = previousPenColor; // Restore previous pen color
  }
  shadingToggle.style.color = shadeVisible ? accentColor : inactiveColor;
});

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(e) {
  if (rainbowVisible) {
    penColor = getRandomRGB();
  }

  if (shadeVisible) {
    e.target.style.backgroundColor = penColor;
    let opacity = e.target.style.opacity;
    if (Number(opacity) < 1) {
      e.target.style.opacity = Number(opacity) + 0.1;
    }
  } else {
    e.target.style.backgroundColor = penColor;
  }
}

function setBackgroundColor(e) {
  if (e.type === "mousedown") {
    sketching = true;
    changeColor(e);
  } else if (e.type === "mouseover" && sketching) {
    changeColor(e);
  } else {
    sketching = false;
  }
}

function clearGrid() {
  sketchPad.innerHTML = '';
}

function clearBtn() {
  if (confirm("Your Sketch Wound Be Deleted!")) {
    clearGrid();
    createGridCells();
  }
}
clearSketchButton.addEventListener("click", clearBtn);

function toggleGridLinesVisibility() {
  gridLinesVisible = !gridLinesVisible;
  gridToggle.style.color = gridLinesVisible ? accentColor : inactiveColor;
  const widthOrHeight = `${parseInt(gridWidth) / squaresPerSide - (gridLinesVisible ? 2 : 0)}px`;
  sketchPad.childNodes.forEach((square) => {
    square.style.border = gridLinesVisible ? "1px solid whitesmoke" : "none";
    square.style.width = square.style.height = widthOrHeight;
  });
}
gridToggle.addEventListener("click", toggleGridLinesVisibility);

function createGridCells() {
  const numOfSquares = squaresPerSide * squaresPerSide;
  const widthOrHeight = `${parseInt(gridWidth) / squaresPerSide - (gridLinesVisible ? 2 : 0)}px`;
  for (let i = 0; i < numOfSquares; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = gridSquare.style.height = widthOrHeight;
    gridSquare.style.border = gridLinesVisible ? "1px solid whitesmoke" : "none";
    gridSquare.addEventListener("mousedown", setBackgroundColor);
    gridSquare.addEventListener("mouseover", setBackgroundColor);
    gridSquare.addEventListener("mouseup", setBackgroundColor);
    sketchPad.appendChild(gridSquare);
  }
}

slider.oninput = function () {
  squaresPerSide = this.value;
  sliderValue.textContent = `${this.value} x ${this.value} (Resolution)`;
  clearGrid();
  createGridCells();
};

createGridCells();
