/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

/* Update Checker start */
(async () => { /* This is to prevent "identifier i is already declared errors" */
    let i = document.createElement('iframe');
    document.body.append(i);
    window.confirm = i.contentWindow.confirm.bind(window);
    i.remove();
    Object.values(webpackJsonp.push([[], { ['']: (_, a, b) => { a.cache = b.c }, }, [['']]]).cache).find(x => x.exports?.a?.get).exports.a.get("https://" + (location.host.startsWith("dashboard") ? location.host + "/api/games" : "play.blooket.com/api/gamequestionsets") + "?gameId=6463eb271c035a26d2cfff8a").then(x => parseInt(`0${x.data.questions.find(x => x.question == "../cheats/flappy/toggleGhost.js")?.answers?.[0]}`)).then(async x => {
        if (1684270001541 > x || confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")) {
            /* Update Checker end */
            Object.values(document.querySelector("#phaser-bouncy"))[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x.gameObject.frame.texture.key.startsWith("blook") && (x.checkCollision.none = x.gameObject.alpha == 1, x.gameObject.setAlpha(x.gameObject.alpha == 1 ? 0.5 : 1)));
        }
    });
})();