// add solution here


/*var musicians = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

*/



function theBeatlesPlay(musicians, instruments)
{
  var statements = [];
  
  for(var x = 0; x < musicians.length; x++)
  {
    statements[x] = musicians[x] + ' plays ' + instruments[x];
  }
  return statements;
}

















//--------------------------------------------------------------------

function johnLennonFacts(facts)
{
  var x = 0;
  while (x < facts.length)
  {
  facts[x] = facts[x] + '!!!';
  x++;
  }
  return facts;
}


//-------------------------------------------------------------------

/*
describe('iLoveTheBeatles', function() {
    it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
    });

    it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
    });
  });
*/

//(15 - numero)

function iLoveTheBeatles(y) //declare function
{
<<<<<<< HEAD
    var emptyArray = []; //declare empty array
  do{
     emptyArray.push('I love the Beatles!'); //assign the string to variable
    
     y++; //increment parameter
=======
    var emptyArray = []; //declare array
  do{
     emptyArray.push('I love the Beatles!'); //assign the string to variable 0
    
     y++; //increment array location
>>>>>>> 4e2052401e2e25e6286e2446a93b0cb7c8131e56
    
    }
  while (y < 15); //check to see if requirements met
  
<<<<<<< HEAD
  return emptyArray; //print out the final
  }
=======
  }
  return emptyArray; //print out the final
}

>>>>>>> 4e2052401e2e25e6286e2446a93b0cb7c8131e56
