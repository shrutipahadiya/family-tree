class FamilyTree {
  constructor (value) {
    if (value == undefined) {
      throw "value is undefined"
    } else if (typeof value != 'string') {
      throw "value is not a String";
    } else {
      this.value = value;
    }
    this.children = [];
  }

  insert(value) {
    this.children.push(new FamilyTree(value));
    //this.children.length++;
  }


  familySize() {
    return  1+this.children.length;
  }

  findMember(value) {
    return this.children.pop(value);
  }

  log(){
    if (this.children != null) {
      for (var x = 0; x <= this.children.length; x++) {
        if (this.children[x] != null) {
          for (var y = 0; y <= this.children[y].length; y++) {
            console.log(" ------ " + this.children[y].value);
          }
        } else {
          console.log("---- " + this.children[x].value);
        }
      }
    } else {
      console.log("-- " + this.value);
    }
  }
}

module.exports = FamilyTree;
