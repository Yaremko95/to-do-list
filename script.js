const generateLi = function () {
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  li.innerText = "some task";
  ul.appendChild(li);
};

generateLi();
