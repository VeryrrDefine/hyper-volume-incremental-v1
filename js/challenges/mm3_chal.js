var mm3_challenges = [
    {
        name: "",
        unlocked: true,
        desc: "mm<sup>3.5</sup> to mm<sup>4</sup>'s multiplier is always ×1",
        complete_requirement: E("1e720"),
        reward: "mm<sup>3.5</sup> to mm<sup>4</sup>'s multiplier ×1.000e4"
    },
    {
        name: "I don't know",
        unlocked: false,
        desc: "I don't know",
        complete_requirement: E("1e1919810"),
        reward: "mm<sup>3.5</sup> to mm<sup>4</sup>'s multiplier ×1.000e4"
    },
]

function mm3doChalText(){
    /*let a = player.inMM3Challenge == 0 ?
    "Enter challenge" : 
    (
        player.volumes.gte(
            mm3_challenges[player.selectedMM3Challenge-1].complete_requirement
        ) ? "Complete challenge and exit" : 
        "Exit challenge"
    )
    player.selectedMM3Challenge == 0 ? 
    "Select a challenge and start" :
    (
        
    )*/
    let a =""
    if (player.inMM3Challenge){
        a = "You're running challenge "+player.inMM3Challenge.toString()+". "
        a += player.volumes.gte(
            mm3_challenges[player.inMM3Challenge-1].complete_requirement
        ) ? "Complete challenge and exit" : 
        "Exit challenge"
    }else{
        if (player.selectedMM3Challenge == 0){
            a = "Select a challenge and start"
        }else{
            a = "Enter Challenge"
        }
    }
    return a
}
function hasMM3Chal(id){
    return player.mm3_volumes.challenges.includes(id)
}
function mm3ChallengeText(){
    //selectedMM3Challenge
    if (player.selectedMM3Challenge == 0){
        return ""
    }
    else {
        let chal = mm3_challenges[player.selectedMM3Challenge-1]
        let b = "[mm<sup>3</sup> Challenge "
        b = b.concat(player.selectedMM3Challenge.toString());
        b = b.concat("]")
        b = b.concat(chal.name)
        b = b.concat("<br>")
        b = b.concat(chal.desc)
        b = b.concat("<br>Complete Requirement: ")
        b = b.concat(chal.complete_requirement.format())
        b = b.concat("<br>Reward:")
        b = b.concat(chal.reward)
        return b
    }

}
function mm3HandleChallenge(){
    if (player.selectedMM3Challenge != 0 && !player.inMM3Challenge){
        doMM3reset();
        player.inMM3Challenge = player.selectedMM3Challenge
        return;
    }
    if (player.inMM3Challenge){
        if (player.volumes.gte(mm3_challenges[player.inMM3Challenge-1].complete_requirement)){
            player.mm3_volumes.challenges.push(player.inMM3Challenge);
        }
        doMM3reset();
        player.inMM3Challenge = 0

    }
}

function getMM3ChalClass(id){
    let a = "mm3_chal ";
    if (hasMM3Chal(id)){
        a+="mm3_chal_completed"
    }
    return a;
}
function mm3ShowChallenge(id){
    player.selectedMM3Challenge=id;
}