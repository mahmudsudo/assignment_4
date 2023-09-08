const personAccount = {
    firstName: "",
     lastName:"",
      incomes:[{type:"",desc:"",amount:2}], 
      expenses:[{type:"",desc:"",amount:2}],
      totalIncome : function () {
        
      }, 
      totalExpense: function () {
        
      },
       accountInfo: function () {
        
       },
       addIncome: function () {
        
       },
        addExpense: function () {
        
        },
         accountBalance: function () {
        
         },
}




const users = [

    {
  
      _id: 'ab12ex',
  
      username: 'Alex',
  
      email: 'alex@alex.com',
  
      password: '123123',
  
      createdAt: '08/01/2020 9:00 AM',
  
      isLoggedIn: false,
  
    },
  
    {
  
      _id: 'fg12cy',
  
      username: 'Asab',
  
      email: 'asab@asab.com',
  
      password: '123456',
  
      createdAt: '08/01/2020 9:30 AM',
  
      isLoggedIn: true,
  
    },
  
    {
  
      _id: 'zwf8md',
  
      username: 'Brook',
  
      email: 'brook@brook.com',
  
      password: '123111',
  
      createdAt: '08/01/2020 9:45 AM',
  
      isLoggedIn: true,
  
    },
  
    {
  
      _id: 'eefamr',
  
      username: 'Martha',
  
      email: 'martha@martha.com',
  
      password: '123222',
  
      createdAt: '08/01/2020 9:50 AM',
  
      isLoggedIn: false,
  
    },
  
    {
  
      _id: 'ghderc',
  
      username: 'Thomas',
  
      email: 'thomas@thomas.com',
  
      password: '123333',
  
      createdAt: '08/01/2020 10:00 AM',
  
      isLoggedIn: false,
  
    },
  
  ]
  
  
  
  const products = [
  
    {
  
      _id: 'eedfcf',
  
      name: 'mobile phone',
  
      description: 'Huawei Honor',
  
      price: 200,
  
      ratings: [
  
        { userId: 'fg12cy', rate: 5 },
  
        { userId: 'zwf8md', rate: 4.5 },
  
      ],
  
      likes: [],
  
    },
  
    {
  
      _id: 'aegfal',
  
      name: 'Laptop',
  
      description: 'MacPro: System Darwin',
  
      price: 2500,
  
      ratings: [],
  
      likes: ['fg12cy'],
  
    },
  
    {
  
      _id: 'hedfcg',
  
      name: 'TV',
  
      description: 'Smart TV:Procaster',
  
      price: 400,
  
      ratings: [{ userId: 'fg12cy', rate: 5 }],
  
      likes: ['fg12cy'],
  
    },
  
  ]
  


  function signUp(email , username , password){
    users.forEach(el => {
        if (el.username ==username || el.email == email ) {
            return "user exists";
        }
        
    });
    users.push({
        _id: Math.floor(Math.random()*100),
        email,username,password,createdAt:Date.now().toLocaleString()
    })
  }

  function signIn(username="",email="",password){
    if (!username && email){
      users.forEach(el => {
       if ( el.email == email && el.password == password) {
        return el;
       }else{
        return "user doesnt exist"
       }
      })
    }else if (username && !email){
        users.forEach(el => {
          if (el.username == username && el.password ==password){
            return el;
          }else {
            return "user doesnt exist";
          }
        })
    }else {
      return "sign in info incorrect";
    }
  }