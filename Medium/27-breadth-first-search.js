// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
  
    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }
  
    breadthFirstSearch(array) {
        // Write your code here.
        let queue = [this];

        while (queue.length) {
            let current = queue.shift();
            if (current === null) {
                continue;
            }
            array.push(current.name);
            current.children.forEach(child => {
                queue.push(child);
            });
        }
        
        return array
    }
}