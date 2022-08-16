const members = [
  
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
  let array2 = members.map(a => {return {...a}})

    array2.find(a => a.age == 20).name = "lavi";

    console.log(members);
    console.log(array2);