class Counter{
    constructor(initial=0){
        this.count = initial;
    }
   increment(){
        this.count++
   }
   decrement(){
    this.count--;
   }

   getCount(){
    return this.count;
   }
}

const counter = new Counter(5);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount())
counter.decrement()
counter.decrement()
counter.decrement()
console.log(counter.getCount())


