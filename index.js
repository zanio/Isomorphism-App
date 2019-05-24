
//input DOM element
const input1 = document.querySelector('input:nth-of-type(1)');
const input2 = document.querySelector('input:nth-of-type(2)');

// error and success DOM element
const errorEl = document.querySelector('.error');
const resultEl = document.querySelector('.result')

// input value string
let elStr1 ;
let elStr2 ;

// Catch the values from input element on keyup even
input1.addEventListener('keyup',()=>{
    elStr1 = input1.value;
    console.log(elStr1)
});

input2.addEventListener('keyup',()=>{
    elStr2 = input2.value;
    console.log(elStr2)
});


// The ismophicLogic Function recieves two parameters

const isomophicLogic = (str1,str2)=>{

  str1 = str1.split(' ').join('');
   str2 = str2.split(' ').join('')

    const str1Len = str1.length;

      if(str1Len != str2.length) return resultEl.innerHTML = `<span class="red">Error: strings not equal in length, please check for empty space</span>`;
    
      const HashMapObj = {}
    
      for(let i=0; i < str1Len; i++){
        if(!HashMapObj[str1[i]]){
          HashMapObj[str1[i]] = str2[i]
        }
         else if( HashMapObj[str1[i]] !== str2[i]){
          
           return resultEl.innerHTML = `<p class="red" >Both strings differ in mapping so therefore:</p><br><span class="success">${false}</span>`;
        }
      }
      
      console.log(HashMapObj)
      return resultEl.innerHTML = `<p  class="green" > Congrat, strings (${str1}, ${str2}) are isomorphic</p><br><span class="success">${true}</span>`
    }

//Fire up the Event listener when the button is clicked and pass in the argument to the isomorphic function

    document.querySelector('button').addEventListener('click',()=>{
    
        if(elStr1 === undefined || elStr2 === undefined ){
            return errorEl.textContent = "Please fill in the form"
        }
        else if(elStr1.length =="" || elStr1.length ==""){
            resultEl.textContent="";
            return errorEl.textContent = "Please Dont Clear the input before you submit"
        }
        else{
                isomophicLogic(elStr1,elStr2);
                errorEl.textContent = ""
        }
    })