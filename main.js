import "./style.css";

let fileButton = document.getElementById("albumBtn");
let coverDiv = document.getElementById("albumCover");

fileButton.addEventListener("change", function (event) {
  const file = fileButton.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    // imagePreview.src = e.target.result;
    coverDiv.innerHTML = `<img src=${e.target.result} />`;
    document.getElementById("inputWrapper").innerHTML = "";

    let app = document.getElementById("app");

    app.style.position = "absolute";
    app.style.inset = 0;
    app.style.backgroundImage = `url(${e.target.result})`;
    app.style.backgroundSize = "1px 1px";
    app.style.backgroundRepeat = "repeat";
  };
  reader.readAsDataURL(file);
});
