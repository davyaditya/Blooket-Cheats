/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var e=document.createElement("iframe");if(document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",await Object.values(webpackJsonp.push([[],{"":(e,t,o)=>{t.cache=o.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6463eb271c035a26d2cfff8a").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/tower-defense/earthquake.js"==e.question)?.answers?.[0]))<1684269935774||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")){console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tearthquake.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");let a=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"],n=(a.setState({eventName:"Earthquake",event:{short:"e",color:"#805500",icon:"fas fa-mountain",desc:"All of your towers get mixed up",rate:.02},buyTowerName:"",buyTower:{}},()=>a.eventTimeout=setTimeout(()=>a.setState({event:{},eventName:""}),6e3)),a.tiles.forEach(o=>o.forEach((e,t)=>3===e&&(o[t]=0))),a.tiles.flatMap((e,o)=>e.map((e,t)=>0===e&&{x:t,y:o})).filter(Boolean).sort(()=>.5-Math.random()));a.towers.forEach(e=>{var{x:t,y:o}=n.shift();e.move(t,o,a.tileSize),a.tiles[o][t]=3})}})();