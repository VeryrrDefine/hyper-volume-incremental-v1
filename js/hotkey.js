
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
