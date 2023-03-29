var obj = {
  name: 'Rohit',
  age: 28,
  nest: {
    city: 'Ahmed',
  },
};

var obj2 = obj; //normal copy
obj2.age = 29;

var obj3 = Object.assign({}, obj); //first level  //1st way to copy
var obj4 = { ...obj }; //2nd way to copy
obj3.name = 'Pooja';
obj3.nest.city = 'wai';

console.log('obj', obj);
console.log('obj2', obj2);
console.log('obj3', obj3);
console.log('obj4', obj4);

//shallow copy will copy upto first level.

var user = {
  name: 'Rohit',
  age: 28,
  nest: {
    city: 'Ahmed',
  },
};

var newUser = JSON.parse(JSON.stringify(user)); //3rd way to copy

newUser.nest.city = 'Pune';

console.log('newUser', newUser);
console.log('user', user);

//stringify method will copy upto deep level but it also has some disadvantages it will not copy symbol and function so we can use extenal loadsh libray deepclone method

var student = {
  name: 'Avi',
  age: 28,
  nest: {
    city: 'Shevgaon',
  },
  getDetails: function () {
    return this.age;
  },
};

var newStudent = JSON.parse(JSON.stringify(student));
console.log('newStudent', newStudent);
console.log('student', student);
