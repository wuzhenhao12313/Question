'use strict'
let _lazyman = function (name) {
  this.taskQuery=[];
  let self=this;
  let task=(function (name) {
      return function () {
          console.log(`hi,this is ${name}`);
          self.next();
      }
  })(name);

  this.taskQuery.push(task);

   setTimeout(function () {
      self.next();
   },0)


};

_lazyman.prototype.next = function () {
   let fn=this.taskQuery.shift();
   if(typeof fn ==="function") {
       fn();
   }
}

_lazyman.prototype.eat = function (name) {
    let self=this;
    let task=(function (name) {
        return function () {
            console.log(`eat ${name}`);
            self.next();
        }
    })(name);
    this.taskQuery.push(task);
    return this;
};

_lazyman.prototype.sleep = function (time) {
    let self=this;
    let task=(function (time) {
        return function () {
            setTimeout(function () {
                console.log(`sleep ${time}S`);
                self.next();
            },time*1000);
        }
    })(time);
    this.taskQuery.push(task);
    return this;
};

_lazyman.prototype.sleepFirst = function (time) {
    let self=this;
    let task=(function (time) {
        return function () {
            setTimeout(function () {
                console.log(`sleep ${time}S`);
                self.next();
            },time*1000);
        }
    })(time);
    this.taskQuery.unshift(task);
    return this;
};

var lazyman = function (name) {
    return new _lazyman(name);
}

lazyman("tom").eat('dinner').sleep(3).eat('shit').sleepFirst(1);
