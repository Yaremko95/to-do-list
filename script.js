console.log("calling js");

const getValue = () => {
  let inputNode = document.getElementById("input-value");
  console.log(inputNode.value);
  generateLi(inputNode.value);
};

const generateLi = function (text) {
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  li.innerText = text;
  ul.appendChild(li);
};
