const nameEl = document.querySelector("#input-delName input");

// // Get
// // console.log(nameEl.className);

// //To OverWrite ClassName :
// // To SetAttribute :
// nameEl.setAttribute("class", "newClass");

// nameEl.className += " newClass2 newClass3 newClass4";

// // console.log(nameEl.classList);

// // for (let cssStyle of nameEl.classList) {
// //   console.log(cssStyle);
// // }

// console.log(nameEl.classList.length);
// nameEl.classList.add("newClass5");
// console.log(nameEl.classList.contains("newClass3"));
// console.log(nameEl.classList.replace("newClass3", "newClass33"));
// nameEl.classList.remove("newClass4");
// console.log(nameEl.classList);

// setTimeout(() => {
//   console.log(nameEl.classList.toggle("classToggle"));
// }, 5000);
// setTimeout(() => {
//   console.log(nameEl.classList.toggle("classToggle"));
// }, 20000);
const textEl = document.querySelector("#input-delName");
const showBtn = document.querySelector("#showBtn");

showBtn.addEventListener("click", () => {
  textEl.style.display = "none";
});
