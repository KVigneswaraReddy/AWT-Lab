// let emp = function (id, name, salary) {
//     this.id = id,
//         this.name = name,
//         this.salary = salary,
//         console.log(this);
//     this.display = function () {
//         setTimeout(function () {
//             //console.log(this);
//             console.log("emp id " + this.id + " getting " + this.salary);
//         }.bind(this), 1000);
//     }
// }
// let emp1 = new emp(1201, "ABC", 10000);
// emp1.display();


let emp = function (id, name, salary) {
    this.id = id,
        this.name = name,
        this.salary = salary,
        console.log(this);
    this.display = function () {
        setTimeout(() => {
            //console.log(this);
            console.log("emp id " + this.id + " getting " + this.salary);
        }, 1000);
    }
}
let emp1 = new emp(1201, "ABC", 10000);
emp1.display();