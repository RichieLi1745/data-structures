var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToHead = function(value) {

    var newHead = Node(value);

    if (this.tail === null) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head.previous = newHead;
      this.head = newHead;
    }

  };

  list.removeTail = function(value) {

    var remove = this.tail.value;
    var newTail = this.tail.previous;
    delete this.tail;
    this.tail = newTail;
    return remove;

  };

  list.addToTail = function(value) {

    var newTail = Node(value);

    // if empty
    if (this.head === null) {
      //create new node to initalize Linkedlist
      this.head = newTail;
      this.tail = newTail;
      //if not empty aka single node
    } else {
      newTail.previous = this.tail;
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
    while (search) {
      //check if value is = to target
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
