const checkButton= document.querySelector('#check');
const name= document.querySelector('#name');
const gander= document.querySelector('#gander');
const age= document.querySelector('#age');
const result= document.querySelector('#result');

checkButton.addEventListener('click', ()=>{
        if(name.value== '' || age.value== '' || gander.value== ''){
        result.innerHTML= `<p class='alert alert-danger'>Please Put All Values</p>`
        
        }
        else{
        result.innerHTML= bibaho(name.value, age.value, gander.value);
        name.value= '';
        age.value= '';
        gander.value= '';
        }
});

