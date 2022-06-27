const user =  {
    hello:'dadasdsa',
    sayW(){
        console.log(this.hello)
    }
}

setTimeout( user.sayW.bind(this), 1000);