let btn = document.getElementById("btn");
let url = "https://reqres.in/api/users";
let mainBox = document.querySelector(".userData");
btn.addEventListener("click", fetchingg);
// document.getElementById("userData");
function fetchingg() {
  btn.removeEventListener("click", fetchingg);
  mainBox.innerHTML = ``;
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let user = data.data;
      user.forEach((info) => {
        let box = document.createElement("div");
        box.className = "boxy";
        box.innerHTML = `
   <img src="${info.avatar}" alt="${info.first_name} ${info.last_name}">
    <p><span>Name:-</span>${info.first_name} ${info.last_name}</p>
    <p><span>Email:-</span>${info.email}</p>
   `;
        mainBox.appendChild(box);
        btn.addEventListener("click", fetchingg);
      });
    })
    .catch((error) => console.log("There Is An Error", error));
}
