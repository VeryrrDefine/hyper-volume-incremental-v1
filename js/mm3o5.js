function getMM3o5speed(){
    if (player.volumes.gte("1e120")){
        return E(1.5)
    }else{
        return E(1)
    }
}
function MM35(){
    player.mm3o5_volumes.points = player.mm3o5_volumes.points.mul(getMM3o5speed().pow((this_frame-last_frame)/1000))
}