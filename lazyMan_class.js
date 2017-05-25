//定义类_layzman
class _lazyman {
    //构造器
    constructor(name) {
        this.name = name;
        this.init();
    }

    //初始化
    init() {
        this.taskQuery = [];
        let task = ((name) => {
            return () => {
                console.log(`hi this is ${name}`);
                this.next();
            }
        })(this.name);
        this.taskQuery.push(task);
        setTimeout(() => {
            this.next();
        }, 0)
    }

    //流程执行方法
    next() {
        let fn = this.taskQuery.shift();
        if (typeof fn === "function")
            fn();
    }

    //吃
    eat(name) {;
        let task = ((name) => {
            return () => {
                console.log(`eat ${name}`);
                this.next();
            }
        })(name);
        this.taskQuery.push(task);
        return this;
    }

    sleep(time) {
        let task = ((time) => {
            return () => {
                setTimeout(() => {
                    console.log(`sleep ${time}S`);
                    this.next();
                }, time * 1000);
            }
        })(time);
        this.taskQuery.push(task);
        return this;
    }

    sleepFirst(time) {
        let self = this;
        let task = ((time) => {
            return () => {
                setTimeout(() => {
                    console.log(`sleep ${time}S first`);
                    this.next();
                }, time * 1000);
            }
        })(time);
        this.taskQuery.unshift(task);
        return this;
    }

}

var lazyman=(name)=>{
    return new _lazyman(name);
}

lazyman("tom").eat("dinner").sleep(4).eat("supper").sleepFirst(3);
