
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //debugger;
    //if empty
    if (this.head === null && this.tail === null) {
      //create new node to initalize Linkedlist
      var newNode = Node(value);
      this.head = newNode;
      this.tail = newNode;
      //if not empty aka single node
    } else if (this.head === this.tail) {
      //create node for new tail with value passed in
      var newTail = Node(value);
      this.tail = newTail;
      this.head.next = newTail;
      //if more than one node
    } else {
      var newTail = Node(value);
      this.tail.next = newTail;
      this.tail = newTail;
    }
  };

  list.removeHead = function() {
    //declare variable to store this.head.next
    var remove = this.head.value;
    var newHead = this.head.next;
    //delete this.head
    delete this.head;
    //reassign this.head to newHead
    this.head = newHead;
    return remove;


  };

  list.contains = function(target) {

    var search = this.head;
    var isDone = false;
    while (isDone !== true) {
      //check if value is = to target
      //debugger;
      if (search === this.tail) {
        if (search.value === target) {
          return true;
        } else {
          isDone = true;
        }
      }
      if (search.value === target) {
        return true;
      }
      search = search.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
