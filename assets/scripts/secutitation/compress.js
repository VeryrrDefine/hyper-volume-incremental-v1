function tryUnlockCompress() {
    if (player.secutitation.mm57.gte(K9E15)){
        player.compress.unl = true;
    }
}
function compressButton() {
    if (player.compress.inCompress){
        return "Exit Compress, gain "+tmp.mm59.gain.format() + " mm<sup>5.9</sup>"
    }else{
        return "Enter Compress"
    }
}
function doubleExponentMult(x,mult){
    return E.pow(10,E.pow(10,x.logarithm(10).logarithm(10).mul(mult)))
}

function handleCompress(){
    if (player.compress.inCompress){
        player.compress.mm59 = player.compress.mm59.add(tmp.mm59.gain)
        player.compress.highestMM4inCompress = E.max(player.compress.highestMM4inCompress,player.volumes)
    }
    player.compress.inCompress = !player.compress.inCompress
    doMM5reset()
}