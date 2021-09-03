const LinkedList = require("./linkedList");

const linkedList = new LinkedList();

linkedList.insert("One");
linkedList.insert(2);
linkedList.insert(1.5, (node) => node.value === "One");


// You can use `find()` to update the value of a node in the list.
linkedList.find((node) => node.value === "One").value = 1;

console.log(linkedList);

console.log(
  "find 2",
  linkedList.find((node) => node.value === 2)
);

console.log(
  "find 3",
  linkedList.find((node) => node.value === 3)
);

//You can find a node by index as follows:
console.log(
    linkedList.find((node, index) => index === 1));