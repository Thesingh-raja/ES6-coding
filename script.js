


// coding#3
// var images = [
//     { height: '34px', width: '39px' },
//     { height: '54px', width: '19px' },
//     { height: '83px', width: '75px' },
//   ]; 
//   var newArray= images.map((el)=>{ return el.height});
// console.log(newArray);  

// coding#4
// var trips = [
//     { distance: 34, time: 10 },
//     { distance: 90, time: 50 },
//     { distance: 59, time: 25 }
//   ];

//   var speedArr = trips.map((el)=>{
//       var speed = el.distance/el.time;
//       return speed;
//   })
//   console.log(speedArr);

// coding#5
// var paints = [{color : 'red'} , {color : 'blue'} ,{color : 'yellow'}]
// const pluck=(a,b)=>
// {
//   let arr= a.map((el)=>{return el[b]})
//   console.log(arr);
// }
// pluck(paints,'color');

// coding#6
// var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
// const final = numbers.filter((el)=> {return el>50})
// console.log(final);

//coding#7
// var users = [
//     { id: 1, admin: true },  
//     { id: 2, admin: false },
//     { id: 3, admin: false },
//     { id: 4, admin: false },
//     { id: 5, admin: true },
//    ];
//    const final= users.filter(el=>{ return el.admin === true})
//    console.log(final);

// coding#8
// var newArray = []

// function reject(array, iteratorFunction) {
//     return array.filter(number =>{
//        return !iteratorFunction(number)
//     })
//   }
  
//   var numbers = [10,20,30]
//   var lessThanFifteen = reject(numbers, function(number){
     
//       return number>15
//   })
//   console.log(lessThanFifteen)

//coding#9
// var users = [
//     { id: 1, admin: false },
//     { id: 2, admin: false },
//     { id: 3, admin: true }
//   ];
  
//   var admin = users.find(el =>{
//       return el.admin === true
//   })
//   console.log(admin);

//   coding#10
// var accounts = [
//     { balance: -10 },
//     { balance: 12 },
//     { balance: 0 }
//   ];
  
//   var account = accounts.find(el =>{
//       return el.balance === 12
//   })
//   console.log(account);

  //coding#11
//   var ladders=[{id:1, height:20},{id:3,height:25}];
//   function findWhere(array, criteria) {
//     const arr = array.find((el)=>{return el.height==criteria.height})
//     console.log(arr);
//   }
//   findWhere(ladders,{height:25})

//coding#12
// var users = [
//     { id: 21, hasSubmitted: true },
//     { id: 62, hasSubmitted: false },
//     { id: 4, hasSubmitted: true }
//   ];
  
//   var hasSubmitted = users.every(user => {
//       return user.hasSubmitted
//   })
//   console.log(hasSubmitted);

  //coding#13
//   var requests = [
//     { url: '/photos', status: 'complete' },
//     { url: '/albums', status: 'pending' },
//     { url: '/users', status: 'failed' }
//   ];
  
//   var inProgress = requests.some(el =>{
//      return el.status === 'pending'  
//   })
//   console.log(inProgress);

//coding#14
// var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

// var totalDistance=trips.reduce((prev,trip)=>{ return prev+=trip.distance},0);
// console.log(totalDistance);

//coding#15
// var desks = [
//     { type: 'sitting' },
//     { type: 'standing' },
//     { type: 'sitting' },
//     { type: 'sitting' },
//     { type: 'standing' }
//   ];
  
// var deskTypes = desks.reduce(function(mem,desk) {
//     if (desk.type == 'sitting') 
//     { ++mem.sitting;}
//     else if (desk.type == 'standing')
//     { ++mem.standing;}
//     // console.log(mem)
//     return mem
// }, { sitting: 0, standing: 0 });
// console.log(deskTypes);

// coding#16
// var numbers=[1,2,1,1,2,3,4,4]
// function unique(array) {
//     return [...(new Set(array))]
//   }
// console.log(unique(numbers))

// var numbers=[1,2,1,1,2,3,4,4]
// function unique(array) {
//     const arr =array.reduce((acc,el)=>{ 
//         console.log(el)
//         console.log(acc);
//       if (!(acc.find((ele)=> ele==el))) acc.push(el)
//       else  console.log('no')
//     return acc
//     },[])
//     return arr;
//   }
// console.log(unique(numbers))


// coding#31
const arr=[3,1]
function unshift(array, ...numbers) {
    return [...array,...numbers];
  }
  const uns = unshift(arr,2);
  console.log(uns);