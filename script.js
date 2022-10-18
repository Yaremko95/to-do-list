
console.log("calling js")

const getValue = () => {
  let inputNode = document.getElementById("input-value")
  console.log(inputNode.value)
}

const generateLi = function () {
  const ul = document.querySelector("#list");
  const li = document.createElement("li");
  li.innerText = "some task";
  ul.appendChild(li);
};

generateLi();

