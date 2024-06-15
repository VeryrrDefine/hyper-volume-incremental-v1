"use strict";
function supsubtransfer(x) {
    let is_sup = 0;
    let is_sub = 0;
    let output = [];
    let in_supb_layer_reast = []
    for (let items of x.split("")) {

        if (is_sup === 1 && items === "{") {
            in_supb_layer_reast.push("sup")
            is_sup = 0;
            output.push("<sup>")
        } else if (is_sub === 1 && items === "{") {
            in_supb_layer_reast.push("sub")
            is_sub = 0;
            output.push("<sub>")
        } else if (items === "}") {
            if (in_supb_layer_reast[in_supb_layer_reast.length - 1] === "sup") {
                output.push("</sup>");
                in_supb_layer_reast = in_supb_layer_reast.slice(0, in_supb_layer_reast.length - 1)
            }
            if (in_supb_layer_reast[in_supb_layer_reast.length - 1] === "sub") {
                output.push("</sub>");
                in_supb_layer_reast = in_supb_layer_reast.slice(0, in_supb_layer_reast.length - 1)
            }
        } else if (items === "^") {
            is_sup = 1;
        } else if (items === "_") {
            is_sub = 1;
        } else {
            output.push(items);
        }

    }
    return output.join("")
}

document.onchange = () => {
    for (let items of document.querySelectorAll("supsubtransform")) {
        console.log(items)
        items.innerHTML = supsubtransfer(items.innerHTML).replace("approx", "≈") + "<br>";
    }
}