let date = new Date();
let dayNumber = date.getDay();
let dayIs;
let quote;

switch(dayNumber){
    case 0: 
    dayIs="Sunday";
    quote="Please keep going never give up"; 
      
       break;

    case 1:
        dayIs="Monday";
        quote="In the middle of struggle";
           break;
    case 2: 

        dayIs="Tuesday";
        quote="Well done you almost there"; 
            break;
    case 3:

          dayIs="Wednesday";
          quote="80% you did it!, come you can believe yourself.";
              break;
    case 4: 
          dayIs="Thursday";
          quote="Almost done...............yeah";
             break;
    case 5:
        dayIs="Friday";
        quote="Finally you ended it ....time to chill";
            break;
    case 6:
        dayIs="Saturday";
        quote="the begining of the week , more energy please";
            break;
        }

        let dayOfWeek = document.getElementById("weekday");
        dayOfWeek.innerHTML= dayIs;
        let quoteOfDay = document.getElementById("quote");
        quoteOfDay.innerHTML= quote;