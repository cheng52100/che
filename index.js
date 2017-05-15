function Hello() {
    var name;
    this.setName = function (tempName) {
        name = tempName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
}
// exports.H = Hello;
// exports.H 中的H就是Hello；

module.exports = Hello;
// module.exports 中的exports就是指Hello；
