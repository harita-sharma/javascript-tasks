const members = [
  
    {name: 'Laveesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma', age: 0},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];

  function Avg(arr) {
    return (members.reduce((acc, { age }) => (acc + age), 0)) / arr.length;
}
console.log(Avg(members)); 
