var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
function ansone(a,b,d){
    
           var k = (((-b)+d)/(2*a));
speechSynthesis.speak(new SpeechSynthesisUtterance("your first answer is "+k));
    document.querySelector(".ansone").innerHTML=("your first answer is :"+k);
  secone(a,b,d);
          
}
function secone(a,b,d){
    var k =(((-b)-d)/(2*a));
    speechSynthesis.speak(new SpeechSynthesisUtterance("your secound answer is"+k));
     document.querySelector(".anstwo").innerHTML=("your secound answer is :"+k);
     speechSynthesis.speak(new SpeechSynthesisUtterance("THANKYOU FOR USING  our services"));
  
    
    
}

function speak(){
    
    
    speechSynthesis.speak(new SpeechSynthesisUtterance("TELL ME THE  COFFICIENT OF X SQUARE"));
  var recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();
  recognition.onresult = function(){   
var speechResult = event.results[0][0].transcript.toLowerCase();
document.querySelector(".sec").innerHTML=speechResult;
      }
  
  
  recognition.onspeechend = function() {
    recognition.stop();
    sprak();
  }

  
}


function sprak(){
    speechSynthesis.speak(new SpeechSynthesisUtterance("TELL ME THE COFFICIENT OF X"));
  var recognition= new SpeechRecognition();
  recognition.lang = 'en-US';
 
  recognition.start();
  recognition.onresult = function(){   
var Result = event.results[0][0].transcript.toLowerCase();
document.querySelector(".fort").innerHTML=Result;
     
      }
 recognition.onspeechend = function() {
    recognition.stop();
    opk();
  }  

  
}


function opk(){
    
    var k= new SpeechSynthesisUtterance("TELL ME THE CONSTANT");
speechSynthesis.speak(k);
    
    
  var rec= new SpeechRecognition();
  rec.lang = 'en-US';
  rec.start();
  rec.onresult = function(){   
var Result = event.results[0][0].transcript.toLowerCase();
      document.querySelector(".opr").innerHTML=Result;
    
     var a=Number(document.querySelector(".sec").innerHTML);
     var b=Number(document.querySelector(".fort").innerHTML);
    
    var c=Number(Result);
  var d=Math.sqrt((Math.pow(b,2) -(4*a*c)));     
ansone(a,b,d);
  }
     rec.onspeechend = function() {
    rec.stop();       
         
  }  
      
       }
   
    

 document.querySelector("button").addEventListener("click",speak);