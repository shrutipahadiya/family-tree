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

  log(answer,this){
      answer = "--";
      if(this.children.length == 0){
          ans = ans+this.value;
         // console.log("111 == "+ans);
      }
      
      if(this.children.length > 0){
      //else{
        for(let i =0;i<this.children.length;i++){
          ans = ans+"-- "+(this.children[i]).value;
          ans=ans+"-- "+log(answer,this.children[i]);
         // console.log("222 == "+ans);
        }
      }
     // console.log("final == "+ans);
      return ans;


   /* if (this.children != null) {
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
    }*/
  }
}

module.exports = FamilyTree;
