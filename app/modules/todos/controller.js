class FireTestController {
  constructer($firebaseObject) {


   this.list = $firebaseArray


    this.random = "";

    addToList() {
      this.list.$add( {
        name: this.item,
        picked.false
      });
    }


    togglePurchased(item) {
      item.picked = !item.bought;
      this.list.$save(item);
    }

  ]
}

export default FireTestController;
