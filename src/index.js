function sayHi(){
    var hello = document.createElement('div');
    hello.innerHTML = 'Hi Js!';
    return hello;
}

document.body.appendChild(sayHi());