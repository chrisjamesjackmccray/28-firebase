class FireTestController {
  constructor($firebaseArray) {
    let ref = new Firebase("https://jmtodos.firebaseio.com/list");
    this.list = $firebaseArray(ref);
    this.random = "";
    this.item = "";
  }

  addToList() {
    this.list.$add( {
      name: this.item,
      picked: false
    });
  }

  togglepicked(item) {
    item.picked = !item.picked;
    this.list.$save(item);
  }

  delete(item) {
    this.list.$remove(item);
  }

}

export default FireTestController;
