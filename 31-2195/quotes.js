
var db = require('./db.js');


 function getElementByIndexElseRandom (array ,index){

 	if (index==null){
      var x = Math.floor(Math.random()*array.length);
       var y = array[x];


 } 	
   else{
   	var y= array[index];
   }
   return y;

}


//console.log(getElementByIndexElseRandom([1,2,3,5]));


function getQuotesFromJSON(){

var obj = require("/home/tasneem/Downloads/se-assignment-master/quotes.json");
return obj;
}

//console.log(getQuotesFromJSON());

function getQuoteFromJSON(index){

	var quote =getElementByIndexElseRandom(getQuotesFromJSON(),index);
	return quote;
}


//console.log(getQuoteFromJSON());

function cb (err , seeded){

}

function seed(cb){

	if(db==null){
		cb(true,false);
	}
	else{
		
		var i=0;
		var quotes=getQuotesFromJSON();
		while(i<quotes.length){
			db[i]=quotes[i];
			i++;
		}
		
		cb(false,true);
		
	}
	return db;
}
  
function cb2 (err,quotes){
    if(err==null){
    	var quote = getElementByIndexElseRandom(quotes,null);
    	return quote;
    }

}
	
exports.getQuotesFromDB=function(cb){
   if(db==null){

	 cb(true,null); }
	else{
		var array=[''];
		var i=0;
		while(db[i]!=null){
			array[i] =db[i];
			i++;
		}
		//var quote = 
		cb(null,array);
		return array;
	}
}

function cb3 (err,quote){

    //if(err==null){
	//return quote;}
}

exports.getQuoteFromDB=function(cb,index){
	if(db!=null){
		var array=[''];
		var i=0;
		while(db[i]!=null){
			array[i] =db[i];
			i++;
		}
      var quote = getElementByIndexElseRandom(array,index);
      cb(null,quote);
    }
    else{
    	quote=null;
    	cb(true,null);
    }
  return quote;
}

console.log(seed(cb));
//console.log(getQuotesFromDB(cb2));
//console.log(getQuoteFromDB(cb3,2));