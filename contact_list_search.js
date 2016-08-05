var friends ={
    bill:{
        firstName:"Bill",
        lastName:"Gates",
        number:"(206)555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
        },
    steve:{
        firstName:"Steve",
        lastName:"Segal",
        number:"(206)555-5555",
        address: ['One Microsoft Way','Redmond','WA','98052']
        }
};

/*function list(friends)
{
    for(var key in friends){
       console.log(key); //vs console.log(friends[key])
    }
}*/

function search(name){
    for(var key in friends)
        {
          
             if (friends[key].firstName == name)
                {
                   console.log(friends[key])
                    return friends[key];
                 }
            
        }
};

search("Steve");
