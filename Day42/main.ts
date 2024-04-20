// Question 124:
const obj = {
    name: "Ali",
    age: 19,
    getDetail: function () {
        console.log(this.name);
        console.log(this.age);
        
    }
}
obj.getDetail()

// Question 125:
const rectangle = {
    lenght: 10,
    width: 30,
    calArea: function () {
        return this.lenght * this.width
    }
}
console.log(rectangle.calArea());

// Question 126: