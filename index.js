
//input DOM element
const input1 = document.querySelector('input:nth-of-type(1)');
const input2 = document.querySelector('input:nth-of-type(2)');

// error and success DOM element
const errorEl = document.querySelector('.error');
const resultEl = document.querySelector('.result')

// input value string
let elStr1 ;
let elStr2 ;

//Error content to display
const contentString ={
  regexError:"Error: please clear symbol/Number in character",
  lengthError:"Error: strings not equal in length",
  mappError:`Error: Both strings differ in mapping so therefore:<br><span class="success">${false}</span>`,
  fillInput:'Please fill the input form',
  noClear:`Please Don't Clear the input before you submit`
  
}

// Catch the values from input element on keyup even
input1.addEventListener('keyup',()=>{
    elStr1 = input1.value;
});

input2.addEventListener('keyup',()=>{
    elStr2 = input2.value;
});


// Render function
const renderHtml = (el, tag , cls, html) => {
  let content;
  content = el.innerHTML = `<${tag} ${cls ?` class ="${cls}"`:` `} >${html}</${tag}>`
  return content
}

const renderText = (el, text) => {
  let content;
  content = el.textContent = `${text ? text :""}`
  return content
}


// The ismophicLogic Function recieves two parameters
const isomophicLogic = (str1,str2)=>{

  str1 = str1.split(' ').join('').toLowerCase();
  str2 = str2.split(' ').join('').toLowerCase();

const conString ={
  mappSuccess:` Congrat, strings (<i class="blue">${str1}, ${str2}</i>) are isomorphic <br><span class="success">${true}</span></p>`,
}

const regex = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/
const regNum = /^\d+$/;
const regNumLetter = /(?:[A-Za-z].*?\d|\d.*?[A-Za-z])/;

const str1Len = str1.length;
 
// Regular Expression to check for symbols in charater
if(regex.test(str1)|| regex.test(str2) ) return renderHtml(resultEl,'span','red',contentString.regexError);

// Regular Expression to check for first digit in numbers
if(regNum.test(str1) ||  regNum.test(str2)) return renderHtml(resultEl,'span','red',contentString.regexError);

// Regular Expression to check for both leter and digit in characters
if(regNumLetter.test(str1) || regNumLetter.test(str2)) return renderHtml(resultEl,'span','red',contentString.regexError);
 
//Check for unequal length in characters
if(str1Len != str2.length) return renderHtml(resultEl,'span','red',contentString.lengthError);

 const HashMapObj = {}
  
  for(let i=0; i < str1Len; i++){
    if(!HashMapObj[str1[i]]){
      HashMapObj[str1[i]] = str2[i]
    }
      else if( HashMapObj[str1[i]] !== str2[i]){
      
        return renderHtml(resultEl,'p','red',contentString.mappError); 
    }
  }

  return renderHtml(resultEl,'p','green',conString.mappSuccess); 
}

//Fire up the Event listener when the button is clicked and pass in the argument to the isomorphic function
document.querySelector('button').addEventListener('click',()=>{
    
        if(elStr1 === undefined || elStr2 === undefined ){
            return renderText(errorEl,contentString.fillInput);
        }
        else if(elStr1.length =="" || elStr1.length ==""){
          renderText(resultEl,"");
            return renderText(errorEl,contentString.noClear); 
        }
        else{
                isomophicLogic(elStr1,elStr2);
                renderText(errorEl);
        }
})