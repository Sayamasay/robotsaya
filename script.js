document.getElementById("submit").addEventListener("click", RandomWord)
document.getElementById("submit").addEventListener("click", GetPh)

function RandomWord() {  
   var message = document.getElementById('message').value;
   var tolower = message.toLowerCase();
   var arr1 = tolower.split(' ');    
   
   if (arr1.length > 20)     
   {
   
   document.getElementById("result").innerHTML = arr1;
   
   var numberOfWordsInTheMessage = 1;
   var m = 0;
   let theMostFrequentWord;   
   
  
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (numberOfWordsInTheMessage<m)
                {
                  numberOfWordsInTheMessage=m; 
                  theMostFrequentWord = arr1[i];
                }
				
        }
        m=0;
}
console.log(`The most frequent word of the message is "${theMostFrequentWord}"`) ;
console.log(`The number of words in the message is ${arr1.length}`) ;
}

else{	
	console.log('Please, type 20+ word');
}

}

function GetPh(){

const randomPhrasesAndPictures = [
    {
        phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
        imageURL: "https://pbs.twimg.com/media/EDOLVnWVAAAsPjL.jpg"
    },
    {
        phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
        imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
    },
    {
        phrase: "You are a wizard, Harry (c) Hagrid",
        imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
    }
]

let i = Math.floor(Math.random() * 3);

phrase.innerHTML=randomPhrasesAndPictures[i].phrase;
picture.src=randomPhrasesAndPictures[i].imageURL;

}