
function GroupByDepartment(){
    const employees = [
  { name: 'Riya', department: 'HR' },
  { name: 'Aman', department: 'Finance' },
  { name: 'Vikas', department: 'HR' },
  { name: 'Neel', department: 'Engineering' },
  { name: 'Zara', department: 'Finance' },
];
    const grouped = employees.reduce((accumulator,currentValue)=>{
        const department = currentValue.department;
        if(!accumulator[department]){
            accumulator[department] = [];
        }
        accumulator[department].push(currentValue.name);
        return accumulator;
    },{});
    console.log(grouped);
}
GroupByDepartment();