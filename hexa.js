window.onload = () =>{
    main();
}
function main(){

    const root = document.getElementById('root')
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const name = document.getElementById('name');
    const h2 = document.getElementById('h2');
    const btn1 = document.getElementById('btn1')
    btn.addEventListener('click',function(){
        const bgcolor = genaratehexacolor()
        root.style.backgroundColor = bgcolor;
        output.value = bgcolor;
    })
    btn1.addEventListener('click',function(){
        const color = genaratehexacolor()
        h2.style.color= color;
        name.value = color;
    })

}

function genaratehexacolor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
// window.onload = () =>{
//     Name();
// }



// function hexacolor() {
//     const red = Math.floor(Math.random()*255);
//     const green = Math.floor(Math.random()*255);
//     const blue = Math.floor(Math.random()*255);
//     return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
// }