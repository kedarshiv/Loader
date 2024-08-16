function createEle(ele) {
  return document.createElement(ele);
}

const div = createEle("div");
div.classList.add("loader__wrapper");

const child1 = createEle("div");
child1.classList.add("loader");

const child2 = createEle("div");
child2.classList.add("loader");

const child3 = createEle("div");
child3.classList.add("loader");

div.appendChild(child1);
div.appendChild(child2);
div.appendChild(child3);
document.body.appendChild(div);
