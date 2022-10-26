const kingPieceE1 = document.getElementById("king-piece");

kingPieceE1.addEventListener("click", () => {
  console.log("click");
  if (kingPieceE1.classList.contains("selected")) {
    kingPieceE1.classList.remove("selected");
    kingPieceE1.innerHTML = "Piece";
  } else {
    kingPieceE1.classList.add("selected");
    kingPieceE1.innerHTML = "King Piece";
  }
})

// kingPieceE1.addEventListener('dblclick', () => {
//     kingPieceE1.classList.remove("selected")
// })
