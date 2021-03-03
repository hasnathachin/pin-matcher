const displayBox = document.getElementById('genarate-display');
const inputDisplay = document.getElementById('input-display')

// Genarate Button Event Handler
document.getElementById('genarateButton').addEventListener('click', function(){
    // console.log('You have clicked Genarate Button');
    displayBox.value = Math.floor(1000 + Math.random() * 9000);
})

// Key Button Event Handler
function buttonClickDisplay(x){
    inputDisplay.value = inputDisplay.value + x;
}

// Clear Button Event Handler
document.getElementById('clear-button').addEventListener('click', function(){
    inputDisplay.value = ''
})

// Backspace Button Event Handler
document.getElementById('backspace-btn').addEventListener('click', function(){
    let value = inputDisplay.value    
    inputDisplay.value = value.substr(0, value.length - 1);
})

//Submit Button Event Handler
document.getElementById('submitBtn').addEventListener('click', function(){
    let genarateValue = parseInt(displayBox.value);
    let inputValue = parseInt(inputDisplay.value);

    if(genarateValue == inputValue){
        document.getElementById
        ('success-msg').style.display = 'block';
        document.getElementById('error-msg').style.display = 'none';
    } else{
        document.getElementById('error-msg').style.display = 'block';
        document.getElementById
        ('success-msg').style.display = 'none';
    }

    inputDisplay.value = '';
    displayBox.value = '';

})

