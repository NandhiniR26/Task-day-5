

let myResume = [{
    Name : "Nandhini R",
    Age : "25",
    Email : "nandhinirameshrk@gmail.com",
    phone : "9659197766",
    DOB : "25.09.1998",
   
    Location : { 
    Area  : "Medavakkam",
    City : "Chennai",
    State : "Tamilnadu",
    Country : "India",
    Pincode : "600100"
},
    
    Education : {
    Degree: "BA in History & Tourism",
    College : "Stella Maris College ",
    },
    Languages : {
    Known : ["Tamil","English"]   
    },
    Interests : {
    Hobbies : ["Reading","Badminton","Swimming"]
    } 
}]
    
    


    //for loop 

    for (let ind = 0; ind < myResume.length; ind++) {
         
    console.log(myResume[ind]);
    }

    //for in loop

    for ( key in myResume) {
         {
            console.log(key,myResume[key]);
    }
}

    //for each loop

    myResume.forEach(function(Object)  
    {
        console.log(Object);
    });

    
   //for of loop

   for (let key of Object.keys(myResume))
   {
    console.log(key,myResume[key]);
};


