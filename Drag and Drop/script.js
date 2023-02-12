const containers = document.querySelectorAll(".container");
let srcElement = null;
let srcIndex = null;

containers.forEach((singleContainer) => {
  singleContainer.addEventListener("dragstart", dragStart, false);
  singleContainer.addEventListener("drop", dragDrop, false);
  singleContainer.addEventListener("dragend", dragEnd, false);
  singleContainer.addEventListener("dragover", dragOver, false);
})

function dragStart(e) {
  if (e.target.classList[1] === 'draggable') {
    e.target.style.opacity = '0.4';
    e.dataTransfer.setData('text/plain', e.target.innerText);
    srcElement = e.target;
    srcIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
    console.log(srcIndex);
  }
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnd(e) {
  if (e.target.classList[1] === 'draggable') {
    e.target.style.opacity = '1';
  }
}

function dragDrop(e) {
  if (e.target.classList[0] === 'container') {
    if (e.target === srcElement.parentElement) return;
    const newListText = e.dataTransfer.getData('text/plain');
    e.target.innerHTML += `<div class="item draggable" draggable="true">${newListText}</div>`;
    if (srcElement) {
      srcElement.remove();
    }
  }
  else if (e.target.classList[0] === 'item') {
    const currIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
    console.log(currIndex);
    if (srcIndex === currIndex) return;
    swapElements(srcElement, e.target);

  }
}

function swapElements(el1, el2) {
  var p2 = el2.parentNode, n2 = el2.nextSibling
  el1.parentNode.insertBefore(el2, el1);
  p2.insertBefore(el1, n2);
}