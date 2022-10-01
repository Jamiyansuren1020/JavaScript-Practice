const xoCounter = (xo) => {
    sumx = 0
    sumo = 0
    for (i = 0; i < xo.length; i++) {
        if(xo.charAt(i) === "x")
            sumx += 1
        else if(xo.charAt(i) === "o")
            sumo += 1
    }
        if(sumx === sumo)
            console.log(true)
        else console.log(false)

}
xoCounter("huionuivtfxecftvgybhnjimko,jnbvftcdrxserdctfv")