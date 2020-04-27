class FamilyTree {
  constructor(value) {
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
    return 1 + this.children.length;
  }

  findMember(value) {
    //return this.children.pop(value);
    if (this.value == value) {
      return this;
    } else {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].value == value) {
          return this.children[i];
        }
      }
    }

  }

  //let answer = "";
  log(answer = "") {
    // let answer = "";
    //if (this.children.length == 0) {
    var row = "--";
      if(answer == ""){
     // var  row =  "--";
      answer ="-- " + this.value;
     // console.log("111 == " + answer);
    }else{
      row = row+"--";
    }

    /*else{*/
    if (this.children.length > 0) {
      row = row+"-- ";
      for (let i = 0; i < this.children.length; i++) {
        answer = answer + "\n" + row+ this.children[i].value;
        //console.log("final111  ==>> " + answer);
         answer = this.children[i].log(answer);


       // answer = answer+"\n"+ row+ this.children[i].log(answer);
       // console.log("final222  ==>> " + answer);
      //  if (this.children[i].children.length > 0) {
         // for (let j = 0; j < this.children[i].length; j++) {
          // answer =  answer+"\n------"+this.children[j].value;
       // }
      }
       // answer =  "\n------"+this.children[i].log(answer);
      }
     // console.log("final == " + answer);
     // answer = answer+"`";
      return answer;
    }
   
  
  /* if(this.children.length > 0){
   //else{
     for(let i =0;i<this.children.length;i++){
       answer = answer+"\n-- "+(this.children[i]).value;
       answer=answer+"-- "+log(answer);
      // console.log("222 == "+ans);
     }
   }
  // console.log("final == "+ans);
   return answer;*/


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
  // }
}

module.exports = FamilyTree;
