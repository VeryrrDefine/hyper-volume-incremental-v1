
hotkeys("*",function (event,handler){
    event.preventDefault();
})
hotkeys("m",function (event,handler){
    event.preventDefault();
    buyAll();
})

hotkeys("d",function (event,handler){
    event.preventDefault();
    if (tmp.dimensionBoost.boostable) dimensionBoost()
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