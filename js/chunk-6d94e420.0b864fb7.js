(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d94e420"],{2048:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-animation-slide-bottom-medium"},[a("div",{staticClass:"uk-width-2-3 uk-align-center uk-align-center uk-margin-remove-top"},[e.data.logo?a("div",[a("div",{staticClass:"uk-flex uk-flex-center"},[a("div",{staticClass:"uk-width-1-3 uk-padding-small"},[a("img",{attrs:{src:"assets/images/logos/"+e.data.logo}})])])]):e._e(),0==e.data.finished?a("div",{staticClass:"uk-alert-warning",attrs:{"uk-alert":""}},[e._v("\n            Page is under construction and may contain spelling errors and/or missing files\n        ")]):e._e(),a("div",{staticClass:"uk-grid uk-grid-collapse",attrs:{"uk-grid":"","uk-height-match":"target: > div > .uk-card"}},[a("div",{staticClass:"uk-width-expand"},[a("div",{staticClass:"uk-card uk-card-small uk-card-default"},[a("div",{attrs:{"uk-slideshow":"animation: slide; ratio: 16:9"}},[a("div",{staticClass:"uk-position-relative uk-visible-toggle outlined",attrs:{tabindex:"-1"}},[a("ul",{staticClass:"uk-slideshow-items uk-background-secondary",attrs:{"uk-lightbox":""}},e._l(e.data.content,(function(t,o){return a("li",{key:o},["image"==t.type?a("a",{attrs:{href:"assets/images/screens/"+t.name}},[a("img",{staticClass:"uk-align-center",staticStyle:{height:"100% !important"},attrs:{src:"assets/images/screens/"+t.name}})]):e._e(),"video"==t.type?a("video",{attrs:{src:t.src,"uk-video":"","uk-cover":"",controls:""}}):e._e(),"iframe"==t.type||"youtube"==t.type?a("iframe",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.src,allowfullscreen:"",scrolling:"no"}}):e._e(),"model"==t.type?a("iframe",{attrs:{src:t.src,width:"100%",height:"100%",frameborder:"0"}}):e._e()])})),0),a("a",{staticClass:"uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover",attrs:{"uk-slidenav-previous":"","uk-slideshow-item":"previous"}}),a("a",{staticClass:"uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover",attrs:{"uk-slidenav-next":"","uk-slideshow-item":"next"}})]),e.data.content.length>1?a("div",[a("div",{staticClass:"uk-padding-small"},[a("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":"","uk-slider":"finite: true"}},[a("div",{staticClass:"uk-width-expand"},[a("ul",{staticClass:"uk-slider-items"},e._l(e.data.content,(function(t,o){return a("li",{key:o,staticClass:"outlined"},[a("a",{attrs:{"uk-slideshow-item":o}},[a("div",{staticClass:"uk-inline uk-dark"},[a("img",{staticClass:"uk-preserve-width",attrs:{src:"assets/images/previews/"+t.name,width:"120"}})])]),"youtube"==t.type?a("div",[a("div",{staticClass:"uk-position-center uk-panel"},[a("a",{staticClass:"uk-icon-button",attrs:{"uk-slideshow-item":o,"uk-icon":"icon: youtube;"}})])]):e._e(),"model"==t.type?a("div",[a("div",{staticClass:"uk-position-center uk-panel"},[a("a",{staticClass:"uk-icon-button",attrs:{"uk-slideshow-item":o,"uk-icon":"icon: video-camera;"}})])]):e._e()])})),0)])])]),e.data.content.length>8?a("div",{staticClass:"uk-flex uk-flex-center"},[a("span",{staticClass:"uk-text-muted"},[e._v("drag previews to scroll through")])]):e._e()]):e._e()])])]),a("div",{staticClass:"uk-width-1-5"},[a("div",{staticClass:"uk-card uk-card-small uk-card-default"},[a("img",{attrs:{src:"assets/images/sidepanel/"+e.data.name+".png"}}),a("div",{staticClass:"uk-text-small uk-padding-small"},[a("div",{staticClass:"uk-grid-collapse uk-child-width-1-1",attrs:{"uk-grid":""}},[e.data.title?a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":"","uk-tooltip":"Project title"}},[e._m(0),a("div",{staticClass:"uk-width-expand uk-text-bold uk-text-break"},[a("span",{domProps:{innerHTML:e._s(e.data.title)}})])]):e._e(),e.data.tools?a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":"","uk-tooltip":"Applications used"}},[e._m(1),a("div",{staticClass:"uk-width-expand uk-text-break"},[a("span",{domProps:{innerHTML:e._s(e.data.tools)}})])]):e._e(),e.data.team?a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":"","uk-tooltip":"Team"}},[e._m(2),a("div",{staticClass:"uk-width-expand uk-text-break"},[a("span",{domProps:{innerHTML:e._s(e.data.team)}})])]):e._e(),e.data.role?a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":"","uk-tooltip":"Role"}},[e._m(3),a("div",{staticClass:"uk-width-expand uk-text-break"},[a("span",{domProps:{innerHTML:e._s(e.data.role)}})])]):e._e(),e.data.category?a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":"","uk-tooltip":"Category"}},[e._m(4),a("div",{staticClass:"uk-width-expand uk-text-break"},[a("span",{domProps:{innerHTML:e._s(e.data.category)}})])]):e._e(),e.data.duration?a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":"","uk-tooltip":"Project duration"}},[e._m(5),a("div",{staticClass:"uk-width-expand uk-text-break"},[a("span",{domProps:{innerHTML:e._s(e.data.duration)}})])]):e._e(),e.data.year?a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":"","uk-tooltip":"Date"}},[e._m(6),a("div",{staticClass:"uk-width-expand uk-text-break"},[a("span",{domProps:{innerHTML:e._s(e.data.year)}})])]):e._e()]),a("hr"),e.data.shortDescription?a("div",{staticClass:"uk-margin uk-margin-right"},[a("span",{staticClass:"uk-text-small uk-text-justify"},[e._v("\n                                "+e._s(e.data.shortDescription)+"\n                            ")])]):e._e(),a("hr"),e.data.tags?a("div",{staticClass:"uk-margin uk-margin-right uk-margin-bottom"},[a("div",{staticClass:"uk-grid-collapse uk-width-1-1",attrs:{"uk-grid":""}},e._l(e.data.tags.split(","),(function(t,o){return a("div",{key:o,staticClass:"uk-margin-remove"},[a("span",{staticClass:"uk-label uk-margin-small-right uk-border-pill"},[e._v("\n                                        "+e._s(t)+"\n                                    ")])])})),0)]):e._e()])])])]),e.data.links.length>0?a("div",{staticClass:"uk-margin"},[a("div",{staticClass:"uk-grid uk-grid-small uk-flex uk-flex-center",attrs:{"uk-grid":""}},e._l(e.data.links,(function(t,o){return a("div",{key:o},[t.enabled?a("a",{staticClass:"uk-button uk-button-default uk-button-small",attrs:{href:t.url,target:"blank"}},[""!=t.icon?a("span",{attrs:{"uk-icon":t.icon}}):e._e(),e._v(" \n                        "),a("span",{staticClass:"uk-text-middle"},[e._v(e._s(t.name))])]):e._e()])})),0)]):e._e(),null!=e.data.achievements?a("div",{staticClass:"uk-margin"},[a("div",{staticClass:"uk-card uk-card-small uk-card-default uk-card-body"},[a("div",{staticClass:"uk-flex uk-flex-center"},[a("div",{staticClass:"uk-grid-medium uk-grid-divider",attrs:{"uk-grid":""}},[e.data.achievements.awards?a("div",{staticClass:"uk-width-auto"},[a("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},e._l(e.data.achievements.awards,(function(e,t){return a("div",{key:t,attrs:{"uk-tooltip":e.text}},[a("img",{attrs:{src:"assets/images/awards/leaf_L.png",width:"30"}}),a("img",{attrs:{src:e.img,width:"80"}}),a("img",{attrs:{src:"assets/images/awards/leaf_R.png",width:"30"}})])})),0)]):e._e(),e.data.achievements.nominations?a("div",{staticClass:"uk-width-expand"},[a("div",{staticClass:"uk-grid-collapse",attrs:{"uk-grid":""}},e._l(e.data.achievements.nominations,(function(e,t){return a("div",{key:t,attrs:{"uk-tooltip":e.text}},[a("img",{attrs:{src:e.img,width:"60"}})])})),0)]):e._e()])])])]):e._e(),e.data.description?a("div",{staticClass:"uk-margin"},[a("div",{staticClass:"uk-card uk-card-small uk-card-default uk-card-body"},[a("div",{staticClass:"uk-grid",attrs:{"uk-grid":""}},[e._m(7),a("div",{staticClass:"uk-width-expand"},[a("span",{domProps:{innerHTML:e._s(e.data.description)}})])])])]):e._e()])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("span",{attrs:{"uk-icon":"info"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("span",{attrs:{"uk-icon":"database"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("span",{attrs:{"uk-icon":"users"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("span",{attrs:{"uk-icon":"user"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("span",{attrs:{"uk-icon":"folder"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("span",{attrs:{"uk-icon":"clock"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("span",{attrs:{"uk-icon":"calendar"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"uk-width-auto"},[a("img",{attrs:{src:"assets/head.gif",width:"60"}})])}],s=(a("7f7f"),a("7c0f")),r={data:function(){return{}},computed:{data:function(){for(var e=0;e<s.portfolioData.length;e++)if(s.portfolioData[e].name==this.$route.params.name)return s.portfolioData[e]}},mounted:function(){window.scrollTo(0,0)}},n=r,l=(a("9c54"),a("2877")),d=Object(l["a"])(n,o,i,!1,null,"f1cb1c3e",null);t["default"]=d.exports},"7c0f":function(e){e.exports=JSON.parse('{"portfolioData":[{"name":"rogues","title":"Rogues with Benefits","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Team of 4, 2 external and <a href=\'https://www.manglemoose.com/\' target=\'blank\'>Manglemoose</a>","role":"Lead (technical) Artist/Animator","finished":true,"duration":"1 year","year":"2018","shortDescription":"Rogues with Benefits is a 4 player online roguelite in which players must work together to survive and gather loot for themself and for their clan hideout.","description":"Rogues with benefits is a game developed by a core team of 4, which consist of Sebastiaan Zwezerijnen, Lance Krasniqi, Viktor Trisjin and myself with additional help from Jaqceline van Rijn, Jom Semah for additional art and Manglemoose for everything audio related. We developed this game at the end of our third year going into our last year.<br><br>My role was being the bridge between coding and art. I developed a lot of the core style of the game, layed a lot of visual groundwork for the rest to work upon, developed the characters and animations and helped with the overall design of the game.<br><br>We took the game to a lot of events and have won quite some awards along the way. We won the Indigo audience award which gave us the opportunity to showcase our game at Central European Game Conference (CEGC) in Viennna. Where to our own surprise we also won the audience award. We also submitted the game for the Dutch Game Awards where we got 2 nominations and won the \'Best Student Art Direction\' award.","logo":"rogues.png","tags":"action, adventure, roguelite, online, multiplayer, low poly, procedural generated, 4 player","links":[],"achievements":{"awards":[{"img":"assets/gifs/awards/dga.gif","text":"Winner<br/>Best Student Art Direction</br>Dutch Game Awards</br>2016"},{"img":"assets/gifs/awards/cegc.gif","text":"Winner<br/>Audience Award</br>CEGC<br/>2016"},{"img":"assets/gifs/awards/indigo.gif","text":"Winner<br/>Audience Award</br>Indigo<br/>2015"}],"nominations":[{"img":"assets/images/awards/unity2.png","text":"Nominated<br/>Golden Cube</br>Unity Awards</br>2016"},{"img":"assets/images/awards/unity2.png","text":"Nominated<br/>Best Student Project</br>Unity Awards</br>2016"},{"img":"assets/images/awards/dga_outline1.png","text":"Nomination<br/>Best Student Game Design</br>Dutch Game Awards</br>2016"},{"img":"assets/images/awards/dga_outline1.png","text":"Nomination<br/>Best Student Technical</br>Dutch Game Awards</br>2016"},{"img":"assets/images/awards/indievelopment.png","text":"Runner Up<br/>Student Award</br>Indievelopment<br/>2015"},{"img":"assets/images/awards/indievelopment.png","text":"Runner Up<br/>Audience Award</br>Indievelopment<br/>2015"}]},"content":[{"type":"youtube","name":"rogues_youtube.png","src":"https://www.youtube.com/embed/Gxnbt_ZqJVw"},{"type":"youtube","name":"rogues_youtube.png","src":"https://www.youtube.com/embed/HI2dH6dS5t0"},{"type":"image","name":"rogues_promo_campfire.png"},{"type":"image","name":"rogues_promo_starwars.png"},{"type":"image","name":"rogues_promo_prometheus.png"},{"type":"image","name":"rogues_01.png"},{"type":"image","name":"rogues_02.png"},{"type":"image","name":"rogues_03.png"},{"type":"image","name":"rogues_04.png"},{"type":"image","name":"rogues_05.png"}]},{"name":"multi_viewer","title":"Multiviewer","tools":"HTML, VueJS, UIkit","category":"Software","team":"Solo project","role":"Developer","finished":true,"duration":"1 week","year":"2019","shortDescription":"A Twitch viewing client for viewing multiple streams at once, but retain focus on 1 stream. Like a very old television.","description":"I\'m a huge fan of Twitch and I always watched multiple tournament streams via <a href=\'http://www.multitwitch.tv/\' target=\'blank\'>multitwitch</a>. Having viewed a lot of tournaments I noticed I wanted to enhance this viewing experience. You mostly only view one stream with audio at a time, but you want to be able to easily switch between streams without having to mute the others. Then I came across an image online of a tv broadcast monitor having all camera angles on one screen. I wanted something like this for my viewing client, but only view one stream with audio/quality and manage all the settings for the other displays. Something like a television, but always having previews of other channels on screen. <br><br>So I combined both ideas and came to this viewing client, there is one main stream and 3 alternate streams. The main stream has audio and will be the best quality available, while the alternative streams will be 360p muted. You can switch streams by clicking on one of the preview streams on the side. I also included a screen to select streams, an overview of all my following channels to select and change the order of streams. Right now it works off a clientID and a Oauth token, eventually I would like to rework this to a more simple twitch login.<br><br>Nowadays there is squad stream from Twitch itself, but it isn\'t controllable by the viewer itself, only the streamers themself. So thats where my multiviewer comes in, now you can watch 4 random streams at once.","tags":"multi, twitch, viewer, tournaments, evo","links":[{"enabled":true,"name":"Application","icon":"code","url":"https://hetesaus.github.io/webapps/twitchV2.html"},{"enabled":false,"name":"Github","icon":"github","url":"https://github.com/hetesaus/webapps/blob/master/twitchV2.html"}],"content":[{"type":"image","name":"multiviewer_1.png"},{"type":"image","name":"multiviewer_2.png"}]},{"name":"scavenger","title":"Scavenger","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":true,"duration":"6 months","year":"2016","shortDescription":"Scavenger is a platformer with RPG elements. You’ve crashed on a unknown planet and you must find spare parts to repair your ship.","description":"Scavenger is a platformer with RPG elements. You’ve crashed on a unknown planet and you must find spare parts to repair your ship. Equipped with a blaster you must fight other scavengers trying to do the same. When you’ve collected enough spare parts, you can go back to your ship and fly off into space. Every level is randomly generated, similar to Spelunky’s generation. The generator creates a main path with percentages deciding the direction of the path. Every empty room gets filled up with a random room, which could either create an side(or dead end) path or just fill in the space. All of the required loot will spawn on the main path, while extra loot is spawning in other rooms.","logo":"scavenger.png","tags":"action, adventure, procedural generated, platformer, loot","links":[],"content":[{"type":"youtube","name":"scavenger_youtube.png","src":"https://www.youtube.com/embed/rdBITeJHVSs"},{"type":"image","name":"scavenger_1.png"},{"type":"image","name":"scavenger_2.png"}]},{"name":"freeplay","title":"Freeplay GBA","tools":"","category":"Build","team":"Solo project","role":"","finished":true,"duration":"3 days","year":"2018","shortDescription":"A custom built gameboy advance with a Raspberry Pi Zero for emulating on the go.","description":"One day I found a project of putting a Raspberry Pi Zero into a Gameboy Advance for emulating on the go. A company called <a href=\'https://www.freeplaytech.com/\' target=\'blank\'>Freeplay Tech</a> sells kits to get you started, all you need is a gameboy advance shell. <br/><br/>First you start off by scrapping plastic off the shell on the inside to make room for the Freeplay board, Raspberry and the backlit screen. Then there\'s some soldering required to hook the Raspberry Pi to the Freeplay board. The last step involves formatting a mini Sandisk with the emulation software and adding games. I recently updated the GBA with a Raspberry Pi W. This board includes Wi-Fi, so I can put games on the GBA via network instead of having to remove the disk","tags":"gameboy, advance, freeplay tech, cm3, custom, raspberry pi, mod","links":[],"content":[{"type":"image","name":"freeplay_1.png"},{"type":"image","name":"freeplay_2.png"},{"type":"image","name":"freeplay_3.png"},{"type":"image","name":"freeplay_4.png"},{"type":"image","name":"freeplay_5.png"}]},{"name":"action_farm","title":"Action Farm","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"4 weeks (part-time)","year":"2014","shortDescription":"short description","description":"description","tags":"action, survival, shooter","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/DSWLF5QnxQI"}]},{"name":"action_henk","title":"Action Henk (fanart)","tools":"Photoshop","category":"Fan art","team":"Solo project","role":"Artist","finished":true,"duration":"3 days (part time)","year":"2014","shortDescription":"Action Henk in the world of Sonic fanart.","description":"This artwork was part of my internship, as a member of the art team of Codeglue my first assignment was to make some fan art of a game they were helping out, called Action Henk. When I heard of the game, my first idea was making a Sonic crossover. I was a big fan of pixel art at the time and since Codeglue worked on the Terraria mobile version, I thought it would be a great way to show my skills and make a retro Sonic crossover.","tags":"art, fanart, internship, action henk, crossover","links":[],"content":[{"type":"image","name":"action_henk.png"}]},{"name":"arena_rage","title":"Arena Rage","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"1 week","year":"2013","shortDescription":"Workshop assignment about polishing games and making it juicy.","description":"This was part of a school workshop about making a game feel juicy. Our assignment was to make a game within a week and focus on polishing our core gameplay, making it feel as good as possible. I went totally overboard with the explosions, shaking and the super difficult enemies, charging right at you, deflecting every shot you make. The goal of the game is to eliminate every enemy within a randomly generated map. Every character offers a different playstyle, with one character being basicly hard-mode with one 1 hp.","logo":"","tags":"juicy, workshop, elimination, arena, rage","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/HPnn9zm0oy0"}]},{"name":"click_crafter","title":"Click Crafter","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"","year":"2016","shortDescription":"A clicker game about crafting and automation.","description":"This game is about clicking, collecting resources and crafting to automate and expand. Clicking a tree for instance will give you wood for every click, with this wood you can craft a new item that lets you gather wood at a faster pace and at some point even automate this proces. Every crafting block has an input/output area in which blocks need to be placed in order to craft blocks. The game has various types of blocks: resources, crafters (crafts specific blocks), usables (for new block recipes), utility (automation) and one huge stationary crafter for crafting most blocks.","tags":"crafting, clicker, sandbox","links":[],"content":[{"type":"youtube","name":"click_crafter_youtube.png","src":"https://www.youtube.com/embed/ADwqtf6WoF0"},{"type":"image","name":"click_crafter_1.png"},{"type":"image","name":"click_crafter_2.png"}]},{"name":"fat_spouse","title":"Fat Spouse","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Team of 2","role":"Artist, Developer","finished":false,"duration":"duration","year":"2012","shortDescription":"A short game about making food for your overweight spouse.","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/fP6pguXbT2Q"}]},{"name":"gabe_newell","title":"Gabe Newell","tools":"Photoshop","category":"Art","team":"Team of 2","role":"Artist","finished":true,"duration":"1 week","year":"2013","shortDescription":"Fan art of Gabe Newell, with his achievements on his chest.","description":"This was part of a school assignment to research a well-known person in the game industry and create a poster. We chose Gabe Newell and displayed his life on his shirt in a movie poster-like design.","tags":"gabe newell, steam, fanart","links":[],"content":[{"type":"image","name":"gabe_newell.png"}]},{"name":"l4d2","title":"L4D2 map mod","tools":"Hammer Editor","category":"Mod","team":"Team of 2","role":"","finished":false,"duration":"duration","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"loot_hero","title":"Loot Hero","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/3bQIFZQ3STk"}]},{"name":"mario_tf2","title":"Mario TF2","tools":"3d Studio Max, Photoshop","category":"Fan art","team":"Solo project","finished":false,"duration":"1 week (part time)","year":"2014","shortDescription":"short description","description":"The assignment was to visualize a game character in another game’s art style. I chose to make Mario in the style of Team Fortress 2.","tags":"art, fanart, crossover, mario, tf2","links":[],"content":[]},{"name":"mover","title":"Mover","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Game Jam","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"4 days","year":"2016","shortDescription":"A game about moving as fast as possible","description":"Mover is an 1 or 2 player game in which you must move furniture to your van as fast as possible. While it may sound simple to move everything from the main floor, you might need some extra help to get to the first floor. That’s where you can use the furniture that you have to move! Use a couch to jump to the next floor and pack that van! But make it quick, we all need those good reviews! The houses are entirely randomly generated, with a huge variety in the number of floors, size of the house and type of furniture.","tags":"moving, co-op, generated","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/yGDGuAghVWg"}]},{"name":"pixeldoom","title":"PIXELDOOM","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":true,"duration":"1 month","year":"2013","shortDescription":"A randomly generated Doom-like survival shooter.","description":"A tribute to retro shooters. Go from floor to floor and kill the enemies to get the best high score. Try to stay alive as long as possible and get the highest scores of all your friends. All levels are randomly generated.","tags":"shooter, survival, doom, generated, dual wield","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/WQRXHuqtMP4"}]},{"name":"pixel_hunter","title":"Pixel Hunter","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"ricochet","title":"Ricochet","tools":"Unity3D, Photoshop","category":"Game Jam","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"2 days","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/7neBEA89M_Y"}]},{"name":"rock_em_sock_em","title":"Rock Em Sock Em","tools":"Unity3D, Photoshop","category":"Game Jam","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2014","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/ud4li2M9S1k"}]},{"name":"rogues_2d","title":"Rogues with Benefits (prototype)","tools":"Unity3D, Photon Networking","category":"Group project","team":"Team of 5","role":"Network/Gameplay Programmer","finished":false,"duration":"10 weeks","year":"2015","shortDescription":"Rogues with Benefits prototype.","description":"Venture through the randomly generated dungeons with your friends in search of glory, loot and fame. Work together to survive the multiple enemies defending the treasures of the dungeon. Rogues with Benefits is an online multiplayer rogue-like and this was our first prototype for the idea of Rogues with Benefits.","tags":"","links":[],"content":[{"type":"youtube","name":"rogues2d_youtube.png","src":"https://www.youtube.com/embed/sdPgG7C7PJw"},{"type":"image","name":"rogues2d_1.png"},{"type":"image","name":"rogues2d_2.png"},{"type":"image","name":"rogues2d_3.png"}]},{"name":"samurai_fighter","title":"Samurai Fighter","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"1 year","year":"2017","shortDescription":"A samurai hack and slash fighting game.","description":"description","tags":"samurai, figher, hack and slash, japan, eutopia, ","links":[],"content":[{"type":"youtube","name":"samurai_fighter_youtube_2.png","src":"https://www.youtube.com/embed/JIG__HGxoFc"},{"type":"youtube","name":"samurai_fighter_youtube.png","src":"https://www.youtube.com/embed/AI6sXzo1sSI"}]},{"name":"space_deliver","title":"Space Deliver","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2018","shortDescription":"A game about managing a spaceship while making deliveries in space.","description":"A arcade simulator game about delivering packages in space. The player must manage resources (power, oxygen) and systems while controlling the ship. The more systems the player enables the more power consumption, but enabling systems can help make the flight easier. The player must also handle communications with the destination, allowing the player to make their delivery and open the spaceport gates.<br><br>The entire ship is built up modular, every interactable object can be linked to any system via drop and drag. With reflection I can pick any method of the system and call this method with the interactable and include a parameter. This allows me to quickly build additional systems for the player to interact with.<br><br>I tried to add to my existing simplistic flat shaded 3D style with a bit more realistic features (lighting/poly count) while retaining an easy workflow. Every detail is modeled in and colored using a single color pallete texture. ","tags":"space, delivery, systems, simulator, arcade","links":[],"content":[{"type":"youtube","name":"space_deliver_youtube.png","src":"https://www.youtube.com/embed/qs-oCU7qcvs"},{"type":"youtube","name":"space_deliver_systems_youtube.png","src":"https://www.youtube.com/embed/h1fsQjvF6p4"},{"type":"model","name":"space_deliver_1.png","src":"https://sketchfab.com/models/fba50d5bf4a1438c80f8bea1431d585f/embed"},{"type":"image","name":"space_deliver_1.png"},{"type":"image","name":"space_deliver_2.png"},{"type":"image","name":"space_deliver_3.png"}]},{"name":"speed_racer","title":"Speed Racer","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":true,"duration":"1 week","year":"2018","shortDescription":"A 4 player local co-op racing game.","description":"This game is about knocking each other off the road or surviving all laps to win. The ships are very fast, bouncy and maneuverable which make them difficult to control on the tight paths. The idea with the game was to make the straight ends of the circle random when every player has passed each lap, spawning obstacles or gaps in the road to knock players of the path. Every ship can jump, boost and perform tricks to maintain their boost and keep moving forward.","logo":"speed_racer.png","tags":"fast, local co-op, speed, f-zero, knockout, random","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/bKUNCqIG7uU"}]},{"name":"star_wars","title":"Star Wars","tools":"Unity3D, Photoshop","category":"Game Jam","team":"Solo project","role":"Artist, Developer","finished":true,"duration":"1 day","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/6pmvFugh1u8"}]},{"name":"super_lunchhour","title":"Super Lunchhour","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/B7ejcU9bTWM"}]},{"name":"the_signs","title":"The Signs","tools":"Unity3D","category":"Games","team":"Team of 5","role":"Developer","finished":false,"duration":"duration","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/zVZNE78qk5A"}]},{"name":"space_gta","title":"Space GTA","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2014","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/zbyam12zNII"}]},{"name":"homeshopper","title":"Homeshopper","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2016","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"triangleformer","title":"Triangleformer","tools":"Unity3D","category":"Games","team":"Solo project","role":"Developer","finished":false,"duration":"duration","year":"year","shortDescription":"short description","description":"description","tags":"","links":[],"content":[{"type":"youtube","name":"blank.png","src":"https://www.youtube.com/embed/9SEhdqP39_A"}]},{"name":"movieset","title":"Movieset","tools":"3D Studio Max","category":"Games","team":"Solo project","role":"Artist","finished":false,"duration":"duration","year":"year","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"gambler","title":"Gambler","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Developer","finished":false,"duration":"duration","year":"2015","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"card_trader","title":"Card Trader","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"2016","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"planet_cop","title":"Planet Cop","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"duration","year":"year","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"survivor","title":"Survivor","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Developer","finished":false,"duration":"duration","year":"year","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"cah","title":"Cards Against Humanity","tools":"Unity3D","category":"Games","team":"Solo project","role":"Developer","finished":false,"duration":"duration","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"fighter","title":"Fighter","tools":"Unity3D, Photoshop","category":"Games","team":"Solo project","role":"Developer","finished":false,"duration":"duration","year":"2013","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"bartop_2","title":"Bartop","tools":"","category":"Build","team":"Solo project","role":"","finished":false,"duration":"","year":"2018","shortDescription":"A unfinished modular bartop arcade machine","description":"The bartop arcade machine runs on Emulationstation and can run almost anything up to N64. The arcade machine runs on a Raspberry Pi 3. The machine is built modular so the control panel can be removed, the marquee can be removed and the monitor can be replaced. All the parts are connected with bolts to hold them firmly in place. I made this bartop modular because I wanted one that I could improve/upgrade as time goes by.","tags":"bartop, arcade, emulation, handmade","links":[],"content":[{"type":"image","name":"bartop_2_01.png"},{"type":"image","name":"bartop_2_02.png"},{"type":"image","name":"bartop_2_03.png"},{"type":"image","name":"bartop_2_04.png"}]},{"name":"bartop_1","title":"Bartop","tools":"","category":"Games","team":"Solo project","role":"","finished":false,"duration":"duration","year":"year","shortDescription":"short description","description":"description","tags":"","links":[],"content":[]},{"name":"internet_punch","title":"Internet Punch","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Solo project","role":"Artist, Developer","finished":false,"duration":"","year":"2016","shortDescription":"A game about downloading on the internet.","description":"The game is about finding a certain file on the internet, the player must download random files from the internet and check their validity. The player has an anti virus program, but it only has 30 seconds of protection, the player must use their anti virus wisely to protect their computer from virusses. Whenever the computer does get infected, the computer starts acting weird, showing messages on screen and locking the computer preventing the player from downloading. In this case the player must find the infected file hidden on the computer and delete it to prevent the system from being infected. Sometimes the computer can also act strange on its own, since its an old computer, the player then must exit the desktop screen and hit the monitor on the side to regain picture on the monitor.","tags":"internet, malware, virus, downloading","links":[],"content":[{"type":"youtube","name":"internet_punch_youtube.png","src":"https://www.youtube.com/embed/pvwLdu6PJ3c"}]},{"name":"philips_hue","title":"Philips Hue","tools":"HTML, UIkit","category":"Web","team":"Solo project","role":"Developer","finished":true,"duration":"1 week","year":"2019","shortDescription":"Web application to control Philips Hue lights.","description":"This is a webapp I made to control my Philips Hue lights from my computer. It loads every light bulb on the same network via the local Bridge api with an IP adress and Hue user Id. It displays all of the bulbs in an overview, easily switchable by toggling the buttons and with a slider for brightness. Every time the page gains focus, the overview updates the statuses of the bulbs. So when somebody else turns the light on/off, I can see the status updating.","tags":"philips, hue, control panel","links":[{"enabled":true,"name":"Application","icon":"code","url":"https://hetesaus.github.io/webapps/philipsHue.html"},{"enabled":false,"name":"Github","icon":"github","url":"https://github.com/hetesaus/webapps/blob/master/philipsHue.html"}],"content":[{"type":"image","name":"philipsHue_1.png"},{"type":"image","name":"philipsHue_2.png"}]},{"name":"gb_switch","title":"GB Switch","tools":"Unity3D, 3D Studio Max, Photoshop","category":"Games","team":"Team of 4","role":"Lead Artist/Programmer","finished":false,"duration":"1 month","year":"2013","shortDescription":"A game about switching between 2 different worlds via a gameboy.","description":"The game is about switching between 2 different worlds with the help of a gameboy. The player has 2 different cartridges resembling the 2 worlds, a normal and a glitched world. The player must defeat all enemies in each different zone to collect 3 keys to open the portal and defeat the final boss to save the princess. The player has different weapons depending on the cartridge and has to switch between them to defeat the enemies. The glitched world is more powerfull but has its disadvantages, you could end up facing a mini boss, spontaneously burst into flames or face an invisible enemy.","tags":"gameboy, switch, glitch, boss fight, princess","links":[],"content":[{"type":"youtube","name":"gb_switch_youtube.png","src":"https://www.youtube.com/embed/lZvJig9vAa4"}]}]}')},"7f7f":function(e,t,a){var o=a("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,r="name";r in i||a("9e1e")&&o(i,r,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},"9c54":function(e,t,a){"use strict";var o=a("a366"),i=a.n(o);i.a},a366:function(e,t,a){}}]);
//# sourceMappingURL=chunk-6d94e420.0b864fb7.js.map