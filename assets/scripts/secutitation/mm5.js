function no_reward_mm5_reset(){
    no_reward_mm3_reset()
    player.mm3_volumes.challenges = []
    player.mm3_volumes.in_sacrifice = false
    player.mm3_volumes.mm45_points = E(0)
    player.mm3_volumes.mm45buyables = [0,0,0]
    player.mm3_volumes.points = E(0)
    player.mm3_volumes.sacrifice_times = E(0)
    player.mm3_volumes.upgrades = []

    player.mm35_volumes.points = E(1);
    player.mm35_volumes.san_xiang_bo_points = E(1);
    player.mm35_volumes.unl = false;
    player.auto = []
    player.secutitation.secutitation_reset_times = player.secutitation.secutitation_reset_times.add(1)

    player.upgrades = [];
}

function doMM5reset(){
    player.secutitation.points = player.secutitation.points.add(tmp.mm5.secu_gain)
    player.secutitation.mm5_volumes.points = player.secutitation.mm5_volumes.points.add(tmp.mm5.secu_gain)
    no_reward_mm5_reset()

}

function doMM5resetManmade(){
    if (player.secutitation.secutitation_reset_times.eq(0)){
        if (confirm("Do you want to reset? It'll reset your mm^3 challenges, mm^4.5 volumes mm^3 volumes and a lot of!!!")){
            doMM5reset()
        }
    }else{
        doMM5reset()
    }
    
}