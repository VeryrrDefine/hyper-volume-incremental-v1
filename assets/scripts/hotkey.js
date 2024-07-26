const today = new Date();
hotkeys("*",function (event,handler){
    event.preventDefault();
    /*if (today.getMonth()-1===0){
        console.log("神金")
    }*/
})
hotkeys("m",function (event,handler){
    event.preventDefault();
    buyAll();
})

hotkeys("n",function (event,handler){
    event.preventDefault();
    if (tmp.mm3.resetable){
        doMM3resetManmade();
    }
})

hotkeys("ctrl+shift+c",function (event,handler){
    event.preventDefault();
    addNotify("No opening console.")
    clearInterval(window.qqq);
    clearInterval(window.www);
})
hotkeys("f12",function (event,handler){
    event.preventDefault();
    addNotify("No opening console.")
    clearInterval(window.qqq);
    clearInterval(window.www);
})