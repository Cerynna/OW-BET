(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a){},111:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(47),r=t.n(s),c=t(3),m=(t(55),t(114)),o=t(113),i=t(112),u=t(115),d=t(1),v=t.n(d);var E=Object(u.a)(function(e){var a=e.history;return v.a.load("login")&&v.a.load("user")?l.a.createElement("nav",null,l.a.createElement("div",{className:"menu"},"Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/rules"},"Rules")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/matches"},"Matches")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/teams"},"Teams")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/leaderBoard"},"Classements")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/chat"},"Chat")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/myProfil/"},"Profil")),l.a.createElement("li",{onClick:function(){v.a.remove("login"),v.a.remove("user"),v.a.remove("bets"),a.go("/")}},l.a.createElement("a",{href:"/"},"Logout")))):l.a.createElement("nav",null,l.a.createElement("div",{className:"menu"},"Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/rules"},"Rules")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/matches"},"Matches")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/teams"},"Teams")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/login"},"Login"))))}),p=t(6);var g=function(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],s=a[1],r={37:"left",38:"up",39:"right",40:"down",65:"a",66:"b"},m=["up","up","down","down","left","right","left","right","b","a"],o=0;document.addEventListener("keydown",function(e){var a=r[e.keyCode];a==m[o]?(console.log("konami "+a+" tu es un petit malin toi"),++o==m.length&&(s(!t),o=0)):o=0});var i="Konami hide";return t&&(i="Konami show",v.a.load("login")&&v.a.load("user")&&p.post("../api/sendAchievement",{achievement:"konami",user:v.a.load("user").login}).catch(function(e){console.log(e)})),l.a.createElement("div",{className:i},"KONAMI CODE !!!!!")},h=t(6);function b(e){var a=e.match,t=e.inputScoreA,s=e.inputScoreB,r=e.team,m=e.bets,o=Object(n.useState)(Date.now()),i=Object(c.a)(o,1)[0];function u(e){console.log(e),e.current.className="scoreInput change",setTimeout(function(){e.current.className="scoreInput"},500)}var d=Object(n.useState)(Number.isInteger(a.startDate)?a.startDate:a.startDateTS);return i-Object(c.a)(d,1)[0]<=0?"A"===r?l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamA",className:"scoreInput",ref:t,disabled:!0,defaultValue:m&&m.hasOwnProperty(a.id)?m[a.id].scoreA:""}),l.a.createElement("div",{className:"lilbtn",onClick:function(){u(t);var e=parseInt(t.current.value);isNaN(parseInt(s.current.value))?s.current.value=0:s.current.value=parseInt(s.current.value),isNaN(e)?t.current.value=1:t.current.value=e+1>4?4:e+1}},"+"),l.a.createElement("div",{className:"lilbtn",onClick:function(){u(t);var e=parseInt(t.current.value);isNaN(parseInt(s.current.value))?s.current.value=0:s.current.value=parseInt(s.current.value),isNaN(e)||e-1<0?t.current.value=0:t.current.value=e-1}},"-")):l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamB",className:"scoreInput",ref:s,disabled:!0,defaultValue:m&&m.hasOwnProperty(a.id)?m[a.id].scoreB:""}),l.a.createElement("div",{className:"lilbtn",onClick:function(){u(s);var e=parseInt(s.current.value);isNaN(parseInt(t.current.value))?t.current.value=0:t.current.value=parseInt(t.current.value),isNaN(e)?s.current.value=1:s.current.value=e+1>4?4:e+1}},"+"),l.a.createElement("div",{className:"lilbtn",onClick:function(){u(s);var e=parseInt(s.current.value);isNaN(parseInt(t.current.value))?t.current.value=0:t.current.value=parseInt(t.current.value),isNaN(e)||e-1<0?s.current.value=0:s.current.value=e-1}},"-")):"A"===r?l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamA",className:"scoreInput",ref:t,disabled:!0,defaultValue:m&&m.hasOwnProperty(a.id)?m[a.id].scoreA:""})):l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamB",className:"scoreInput",ref:s,disabled:!0,defaultValue:m&&m.hasOwnProperty(a.id)?m[a.id].scoreB:""}))}var f=function(e){var a=e.match,t=e.bets,s=a.competitors[0];s.score=a.scores[0].value;var r=a.competitors[1];r.score=a.scores[1].value;var c=Object(n.useRef)(),m=Object(n.useRef)();return l.a.createElement("div",{className:"Match flex",onMouseLeave:function(){v.a.load("login")&&h.post("../api/sendBet",{scoreA:c.current.value,scoreB:m.current.value,idMatch:a.id,user:v.a.load("user")}).then(function(e){v.a.save("bets",e.data,{path:"/"})}).catch(function(e){console.log(e)})}},l.a.createElement("div",{className:"date"},function(e){var a=new Date(e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()];return a.getDate()+" "+n+" "+t+" - "+(a.getHours()<10?"0"+a.getHours():a.getHours())+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())}(a.startDateTS)),l.a.createElement("div",{className:"TeamA flex"},l.a.createElement("img",{src:s.logo,alt:s.abbreviatedName}),l.a.createElement("div",{className:"tag"},s.abbreviatedName),l.a.createElement("div",{className:"score"},l.a.createElement("div",{className:"value"},s.score),v.a.load("login")?l.a.createElement(b,{inputScoreA:c,inputScoreB:m,match:a,team:"A",bets:t}):"")),l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"TeamB flex"},l.a.createElement("img",{src:r.logo,alt:r.abbreviatedName}),l.a.createElement("div",{className:"score"},l.a.createElement("div",{className:"value"},r.score),v.a.load("login")?l.a.createElement(b,{inputScoreA:c,inputScoreB:m,match:a,team:"B",bets:t}):""),l.a.createElement("div",{className:"tag"},r.abbreviatedName)),l.a.createElement("div",{className:"myBets"}))},N=t(6);function y(e){var a=e.week,t=e.current,n=e.bets;function s(e){var a=new Date(e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()];return a.getDate()+" "+n+" "+t}var r=a.matches.map(function(e){return l.a.createElement(f,{match:e,key:e.id,bets:n})});return l.a.createElement("div",{className:a.id===t?"Week show":"Week"},l.a.createElement("div",{className:"info flex "},l.a.createElement("div",{className:"name"},a.name),l.a.createElement("div",{className:"date start"},s(a.startDate)),l.a.createElement("div",{className:"date separator"},"-"),l.a.createElement("div",{className:"date end"},s(a.endDate))),l.a.createElement("div",{className:"Matchs flex center"},r))}var O=Object(u.a)(function(e){var a=e.weeks.length,t=Object(n.useState)(0),s=Object(c.a)(t,2),r=s[0],m=s[1],o=Object(n.useState)(!!v.a.load("bets")&&v.a.load("bets")),i=Object(c.a)(o,2),u=i[0],d=i[1];v.a.load("login")&&0==u&&N.get("../api/getPlayer/".concat(v.a.load("user").login)).then(function(e){d(e.data.bets),console.log("VERIF BETS !!!!",e.data.bets)}).catch(function(e){console.log(e)});var E=e.weeks.map(function(e){return l.a.createElement(y,{week:e,key:e.id,current:r,bets:u})});return l.a.createElement("div",null,l.a.createElement("h2",null,"Matches"),l.a.createElement("div",{className:"changeWeek flex"},l.a.createElement("div",{className:"down"},l.a.createElement("i",{onClick:function(){0!==r&&m(r-1)}},"<")),l.a.createElement("div",{className:"up"},l.a.createElement("i",{onClick:function(){r+1!==a&&m(r+1)}},">"))),l.a.createElement("div",{className:"Weeks"},E))}),j=t(6);function w(e){var a=e.team;return l.a.createElement("div",{className:"team flex one"},l.a.createElement(i.a,{to:"/team/".concat(a.id)},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:a.logo,alt:a.alt})),l.a.createElement("div",{className:"name"},a.name)))}var k=Object(u.a)(function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],s=a[1];if(null===t)return j.get("https://api.overwatchleague.com/teams?lang=fr").then(function(e){s(e.data.competitors)}).catch(function(e){console.log(e)}),l.a.createElement("div",null,l.a.createElement("h2",null,"Teams"));var r=t.map(function(e){return l.a.createElement(w,{team:e.competitor,key:e.competitor.id})});return l.a.createElement("div",{className:"Teams"},l.a.createElement("h2",null,"Teams"),l.a.createElement("div",{className:"listTEams flex center two three-600 six-1200"},r))});var T=function(e){var a=e.modal,t=e.toggleModal;return l.a.createElement("div",{className:a.show?"modal show":"modal hide"},l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"close",onClick:function(){t(!0)}},"X"),l.a.createElement("div",{className:"message"},a.message)))},S=t(11),x=t.n(S),A=x()("http://localhost:5001"),B=t(6);var M=Object(u.a)(function(e){var a=e.history,t=Object(n.useState)({show:!1,message:""}),s=Object(c.a)(t,2),r=s[0],m=s[1],o=Object(n.useRef)(),u=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement(T,{modal:r,toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];m({show:!r.show,message:e?r.message:""})}}),l.a.createElement("h2",null,"Login"),l.a.createElement("div",{className:"loginFrom"},l.a.createElement("label",{htmlFor:"login"},"Pseudo :"),l.a.createElement("input",{type:"text",name:"login",id:"login",ref:o}),l.a.createElement("label",{htmlFor:"password"},"Password :"),l.a.createElement("input",{type:"password",name:"password",id:"password",ref:u}),l.a.createElement("div",{className:"btn",type:"submit",onClick:function(){m({show:!0,message:""}),B.post("api/login",{login:o.current.value,pass:u.current.value}).then(function(e){e.data.status?(console.log(e.data.data),v.a.save("bets",e.data.data.bets,{path:"/"}),delete e.data.data.mdp,e.data.data.bets="",v.a.save("login",!0,{path:"/"}),v.a.save("user",e.data.data,{path:"/"}),A.emit("login",e.data.data),m({show:!0,message:e.data.message}),setTimeout(function(){m({show:!1,message:""}),a.push("/")},3e3)):m({show:!0,message:e.data.message}),setTimeout(function(){m({show:!1,message:""})},2500)}).catch(function(e){console.log(e)})}},"Validez"),l.a.createElement(i.a,{to:"/signIn"},l.a.createElement("div",{className:"btn",type:"submit"},"S'inscrire"))))}),P=t(6);var C=Object(u.a)(function(e){var a=e.history,t=Object(n.useRef)(),s=Object(n.useRef)(),r=Object(n.useRef)(),m=Object(n.useState)({show:!1,message:""}),o=Object(c.a)(m,2),i=o[0],u=o[1];return l.a.createElement("div",null,l.a.createElement(T,{modal:i,toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];u({show:!i.show,message:e?i.message:""})}}),l.a.createElement("h2",null,"SIGNIN"),l.a.createElement("div",{className:"loginFrom"},l.a.createElement("label",{htmlFor:"login"},"Pseudo :"),l.a.createElement("input",{type:"text",name:"login",id:"login",ref:t}),l.a.createElement("label",{htmlFor:"password"},"Password :"),l.a.createElement("input",{type:"password",name:"password",id:"password",ref:s}),l.a.createElement("label",{htmlFor:"passwordtwo"},"Deux fois :"),l.a.createElement("input",{type:"password",name:"passwordtwo",id:"passwordtwo",ref:r}),l.a.createElement("div",{className:"btn",type:"submit",onClick:function(){!function(){console.log(t.current.value,s.current.value,r.current.value);var e=t.current.value,n=s.current.value,l=r.current.value;e.length>3&&n.length>3&&l.length>3?n.length===l.length?P.post("api/signIn",{login:t.current.value,pass:s.current.value}).then(function(e){e.data.status?(v.a.save("login",!0,{path:"/"}),v.a.save("user",e.data.data,{path:"/"}),v.a.save("bets",e.data.data.bets,{path:"/"}),console.log(e.data.data),u({show:!0,message:e.data.message}),setTimeout(function(){a.push("/")},5e3)):u({show:!0,message:e.data.message})}).catch(function(e){console.log(e)}):u({show:!0,message:"Les deux mot de passe que tu as rentr\xe9 ne sont pas identique "}):u({show:!0,message:"Ton Pseudo et/ou ton Mot de passe doivent faire plus de 3 caract\xe8res"})}()}},"Valider")))}),I=t(29),L=t.n(I),R=t(6),D="as9drzlxfqojhjzeomk8qtrrikcbss";function F(e){var a=e.player,t=Object(n.useState)(null),s=Object(c.a)(t,2),r=s[0],m=s[1],o=Object(n.useState)(!1),i=Object(c.a)(o,2),u=i[0],d=i[1];if(null==r)return R.get("https://api.overwatchleague.com/players/".concat(a.id)).then(function(e){m(e.data.data.player)}).catch(function(e){console.log(e)}),l.a.createElement(L.a,{isFlipped:u,key:a.name},l.a.createElement("div",{key:"front",className:"player",onMouseEnter:function(){d(!u)},onMouseLeave:function(){d(!u)}},l.a.createElement("div",{className:"playerName"},a.name),l.a.createElement("div",{className:"playerImg"},l.a.createElement("img",{src:a.headshot,alt:""}))),l.a.createElement("div",{key:"back"},"This is the back of the card.",l.a.createElement("button",{onClick:function(){d(!u)}},"Click to flip")));var v=r.accounts.find(function(e){return"TWITCH"===e.accountType}),E=a.attributes.heroes?a.attributes.heroes.map(function(e){return l.a.createElement("div",{className:"ohi ".concat(e.name),key:e.name})}):null;return l.a.createElement(L.a,{isFlipped:u},l.a.createElement("div",{key:"front",className:"player",onMouseEnter:function(){d(!u)}},l.a.createElement("div",{className:"playerImg"},l.a.createElement("img",{src:a.headshot,alt:""})),l.a.createElement(q,{urlTwitch:v,name:a.name})),l.a.createElement("div",{key:"back",className:"player",onMouseLeave:function(){d(!u)}},l.a.createElement("div",{className:"playerName"},a.givenName,' "',a.name,'" ',a.familyName," "),l.a.createElement("div",{className:"playerInfo"},l.a.createElement("div",{className:"heroPlayed"},null!=E?E.slice(0,4):E)),l.a.createElement(q,{urlTwitch:v,name:a.name})))}function q(e){var a=e.urlTwitch,t=e.name,s=void 0!==a?a.value.split("/").pop():null,r=Object(n.useState)(!1),m=Object(c.a)(r,2),o=m[0],i=m[1];return o||void 0===a||R.get("https://api.twitch.tv/kraken/streams/".concat(s,"?client_id=").concat(D)).then(function(e){null!=e.data.stream&&i(e.data.stream)}).catch(function(e){console.log(e)}),a?l.a.createElement("a",{href:a.value,target:"_blank",rel:"noopener noreferrer",className:o.game?"playerTwitch live":"playerTwitch"},t,o.game):l.a.createElement("div",{className:o.game?"playerTwitch live":"playerTwitch"},t)}var H=Object(u.a)(function(e){var a=e.match,t=e.history,s=Object(n.useState)(null),r=Object(c.a)(s,2),m=r[0],o=r[1],i=Object(n.useState)(a.params.idteam),u=Object(c.a)(i,1)[0];if(null===m)return R.get("https://api.overwatchleague.com/teams/".concat(u)).then(function(e){o(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",null,l.a.createElement("h2",null,"Teams"));var d=m.schedule.map(function(e){return l.a.createElement(f,{match:e,key:e.id})}),E=m.players.map(function(e){return l.a.createElement(F,{player:e,key:e.id})});return l.a.createElement("div",{className:"Team"},l.a.createElement("h2",null,m.name),l.a.createElement("div",{className:"body"},v.a.load("login")?l.a.createElement("div",{className:"loveTeam",onClick:function(){R.post("../api/loveTeam",{teamId:m.abbreviatedName,user:v.a.load("user").name}).then(function(e){v.a.save("user",e.data,{path:"/"}),t.push(t.location.pathname)}).catch(function(e){console.log(e)})}},v.a.load("user")?l.a.createElement("div",{className:v.a.load("user").loveTeam?v.a.load("user").loveTeam===m.abbreviatedName?"btnLoveTeam this":"btnLoveTeam":"btnLoveTeam empty"},"\u2764"):""):"",l.a.createElement("h3",null,"Planning"),l.a.createElement("div",{className:"shedule flex center"},d),l.a.createElement("h3",null,"Roster"),l.a.createElement("div",{className:"roster flex center five"},E)))});var V=Object(u.a)(function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"normal"},"Le site est actuellement en BETA inscrit toi pour en savoir plus et participer a ce projet."),v.a.load("login")?l.a.createElement("div",{className:"alert"},l.a.createElement("ul",null,l.a.createElement("li",null,"Ajout d'un Chat"),l.a.createElement("li",null,"Ajout des bets pass\xe9 dans le profil public"),l.a.createElement("li",null,"Acces au profil public des joueurs"),l.a.createElement("li",null,"Ajout de plusieur HF"),l.a.createElement("li",null,"Correction de bug si et la"))):"")}),J=t(6);function U(e){var a=e.team;return l.a.createElement("div",{className:"teamRanking flex"},l.a.createElement("div",{className:"placement"},a.placement),l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:a.competitor.logo,alt:""})),l.a.createElement("div",{className:"name"},a.competitor.name),l.a.createElement("div",{className:"win"},a.records[0].matchWin),l.a.createElement("div",{className:"draw"},a.records[0].matchDraw),l.a.createElement("div",{className:"lose"},a.records[0].matchLoss),l.a.createElement("div",{className:"play"},a.records[0].matchBye))}function W(e){var a=e.player,t=e.pos;return l.a.createElement("div",{className:"playerRanking flex"},l.a.createElement("div",{className:"placement"},t),l.a.createElement("div",{className:"loveTeam"},l.a.createElement("img",{src:"imgs/teams/".concat(a.loveTeam,".png"),alt:""})),l.a.createElement(z,{player:a}),l.a.createElement("div",{className:"score"},a.score))}function z(e){var a=e.player;return v.a.load("user")?l.a.createElement("div",{className:"name"},l.a.createElement(i.a,{to:"/profil/".concat(a.login)},a.name)):1==a.visibility?(console.log("public"),l.a.createElement("div",{className:"name"},a.name)):l.a.createElement("div",{className:"name"},a.name)}var K=Object(u.a)(function(){var e,a,t=Object(n.useState)(null),s=Object(c.a)(t,2),r=s[0],m=s[1],o=Object(n.useState)(null),i=Object(c.a)(o,2),u=i[0],d=i[1];if(null===r&&null===u)return J.get("https://api.overwatchleague.com/ranking").then(function(e){var a=e.data.content.sort(function(e,a){return e.placement-a.placement});m(a)}).catch(function(e){console.log(e)}),J.get("api/getPlayersRanking").then(function(e){d(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",null,"LeaderBoard");if(null!==u&&null!==r){var v=1;e=u.map(function(e,a){return u[a-1]&&u[a-1].score!=u[a].score&&(v+=1),l.a.createElement(W,{player:e,key:e.name,pos:v})}),a=r.map(function(e){return l.a.createElement(U,{team:e,key:e.competitor.id})})}return l.a.createElement("div",{className:"LeaderBoard"},l.a.createElement("h2",null,"Classement"),l.a.createElement("div",{className:"flex center"},l.a.createElement("div",{className:"LeaderBoardTeams"},l.a.createElement("h3",null,"Teams"),l.a.createElement("div",{className:"teamRanking flex"},l.a.createElement("div",{className:"placement"},"pos"),l.a.createElement("div",{className:"img"}),l.a.createElement("div",{className:"name"},"Equipe"),l.a.createElement("div",{className:"win"},"W"),l.a.createElement("div",{className:"draw"},"D"),l.a.createElement("div",{className:"lose"},"L"),l.a.createElement("div",{className:"play"},"P")),a),l.a.createElement("div",{className:"LeaderBoardPlayers"},l.a.createElement("h3",null,"Players"),l.a.createElement("div",{className:"playerRanking flex"},l.a.createElement("div",{className:"placement"},"POS"),l.a.createElement("div",{className:"loveTeam"},"\u2764"),l.a.createElement("div",{className:"name"},"Pseudo"),l.a.createElement("div",{className:"score"},"Score")),e)))}),Y=t(28),Z=t.n(Y),G=(t(106),t(6));function _(e){var a=e.data,t=e.user,s=Object(n.useState)(!1),r=Object(c.a)(s,2),m=r[0],o=r[1];if(0==a.valid&&1==a.hide)return"";var i=a.messag.split("/");return t.login&&(t.achievement&&t.achievement[a.name]||G.post("../api/sendAchievement",{achievement:a.name,user:t.login}).catch(function(e){console.log(e)})),l.a.createElement("div",{className:a.valid?"Badge true":"Badge false",onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)}},l.a.createElement("div",{className:1==m?"messag show":"messag"},l.a.createElement("div",{className:"title"},a.title),a.state?l.a.createElement("div",null,l.a.createElement("img",{src:"../imgs/hf/T".concat(a.state,".png"),alt:""}),i.length>1?l.a.createElement("progress",{id:"file",max:i[1],value:i[0]}," ",i[0]):""):a.messag),l.a.createElement("img",{src:"../imgs/hf/".concat(a.icon),alt:""}),a.state?l.a.createElement("div",{className:"state"},l.a.createElement("img",{src:"../imgs/hf/T".concat(a.state,".png"),alt:""})):"")}var X=function(e){var a=Object(n.useState)(e.user),t=Object(c.a)(a,1)[0],s=[],r={valid:t.inscript/1e3<1551398400,icon:"01.png",title:"First",name:"beta",hide:!0,messag:"Attribu\xe9 au joueur inscrit avant le 01/3/2019 (pendant la B\xe9ta)"};s.push(l.a.createElement(_,{data:r,user:t,key:r.name})),t.achievement&&t.achievement.konami&&(r={valid:t.inscript/1e3<1551398400,icon:"konami.png",title:"OldSchool",name:"konami",hide:!0,messag:"U | U | D | D | L | R | L | R | B | A"},s.push(l.a.createElement(_,{data:r,user:t,key:r.name}))),r={valid:!!t.btag,icon:"03.png",title:"Loot'O'Vor",hide:!0,name:"btag",messag:"Miam"},s.push(l.a.createElement(_,{data:r,user:t,key:r.name})),r={valid:!(!t.btag||!t.mail),icon:"02.png",title:"ValidUser",name:"validUser",hide:!0,messag:"Attribu\xe9 au joueur ayant rempli leurs profil"},s.push(l.a.createElement(_,{data:r,user:t,key:r.name})),r={valid:!!t.loveTeam,icon:"05.png",title:"Mon Equipe de Coeur",name:"loveTeam",hide:!0,messag:"Attribu\xe9 au joueur ayant choisie une Equipe de Coeur"},s.push(l.a.createElement(_,{data:r,user:t,key:r.name})),r={valid:!!t.bets,state:0,icon:"bet.png",title:"Pronostiqueur en herbe",name:"bets-0",hide:!1,messag:"Pronostiqu\xe9 1 match"},t.bets&&Object.keys(t.bets).length>=1&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/5",r.title="Sorti de l'Iceberg",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=5&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/10",r.title="Paresseux",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=10&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/15",r.title="Initi\xe9",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=15&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/25",r.title="Pile AA",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=25&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/50",r.title="Un million de frappes",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=50&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/100",r.title="D\xe9lit d'acharnement",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=100&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/150",r.title="A rythme de 7H par jour",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=150&&(r.state+=1,r.messag=Object.keys(t.bets).length+"/250",r.title="A rythme de 12H par jour",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=250&&(r.state=8,r.messag=Object.keys(t.bets).length+"/500",r.title="A rythme de 20H par jour",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=500&&(r.state=8,r.messag=Object.keys(t.bets).length+"/1000",r.title="?? ?? ??",r.name="bets-"+r.state),t.bets&&Object.keys(t.bets).length>=1e3&&(r.state=8,r.messag=Object.keys(t.bets).length+"/\u221d",r.title="Error 404",r.name="bets-"+r.state),s.push(l.a.createElement(_,{data:r,user:t,key:r.name}));var m=Object.keys(t.bets),o=0,i=0;return m.map(function(e){t.bets[e].valid&&((t.bets[e].resultA>t.bets[e].resultB?"A":"B")==(t.bets[e].scoreA>t.bets[e].scoreB?"A":"B")?o+=1:i+=1)}),o>=1&&(r={valid:!0,state:1,icon:"bet-true.png",title:"Le d\xe9but de la gloire",name:"bets-true-1",hide:!1,messag:"".concat(o,"/5")}),o>=5&&(r={valid:!0,state:2,icon:"bet-true.png",title:"Un Pas de plus",name:"bets-true-2",hide:!1,messag:"".concat(o,"/10")}),o>=10&&(r={valid:!0,state:3,icon:"bet-true.png",title:"Le chemin est long",name:"bets-true-3",hide:!1,messag:"".concat(o,"/25")}),s.push(l.a.createElement(_,{data:r,user:t,key:r.name})),i>=1&&(r={valid:!0,state:1,icon:"bet-false.png",title:"Boulet de Bronze",name:"bets-false-1",hide:!1,messag:"".concat(i,"/5")}),i>=5&&(r={valid:!0,state:2,icon:"bet-false.png",title:"Boulet d'Argent",name:"bets-false-2",hide:!1,messag:"".concat(i,"/10")}),i>=10&&(r={valid:!0,state:3,icon:"bet-false.png",title:"Boulet d'Or",name:"bets-false-3",hide:!1,messag:"".concat(i,"/25")}),i>=25&&(r={valid:!0,state:4,icon:"bet-false.png",title:"Boulet de Platine",name:"bets-false-4",hide:!1,messag:"".concat(i,"/50")}),s.push(l.a.createElement(_,{data:r,user:t,key:r.name})),l.a.createElement("div",{className:"achievement flex"},l.a.createElement("h3",null,"Haut Fait"),s)};var $=function(e){var a=e.user,t=Object.keys(a.bets).map(function(e){var t=a.bets[e];if(t.valid){var n="bet flex three";return 0==t.score&&(n+=" null"),l.a.createElement("div",{className:n,key:e},l.a.createElement("div",{className:"TeamA"},t.TeamA),l.a.createElement("div",null,"R : "),l.a.createElement("div",null,t.resultA),l.a.createElement("div",null,t.resultB),l.a.createElement("div",null,"P :"),l.a.createElement("div",null,t.scoreA),l.a.createElement("div",null,t.scoreB),l.a.createElement("div",{className:"TeamB"},t.TeamB),l.a.createElement("div",{className:"score"},t.score))}});return l.a.createElement("div",{className:"UserBets"},l.a.createElement("h3",null,"Pronostic"),l.a.createElement("div",{className:"flex center six"},t))},Q=t(6);var ee=Object(u.a)(function(e){var a=e.match,t=(e.history,Object(n.useState)({show:!1,message:""})),s=Object(c.a)(t,2);s[0],s[1],console.log("Profil",a.params.user);var r=Object(n.useState)(a.params.user),m=Object(c.a)(r,2),o=m[0],i=m[1],u=Object(n.useState)(null),d=Object(c.a)(u,2),v=d[0],E=d[1];return null!=v&&o==a.params.user?v.error?l.a.createElement("div",{className:"Profil"},l.a.createElement("h2",null,v.login)):l.a.createElement("div",{className:"Profil"},l.a.createElement("h2",null,v.name),l.a.createElement(X,{user:v}),v.bets?l.a.createElement($,{user:v}):""):o==a.params.user?(null!=o&&Q.get("../api/getPlayer/".concat(o)).then(function(e){E(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",{className:"Profil"},l.a.createElement("h2",null,a.params.user))):void i(a.params.user)}),ae=t(6);var te,ne=Object(u.a)(function(e){var a=e.history,t=Object(n.useState)({show:!1,message:""}),s=Object(c.a)(t,2),r=s[0],m=s[1];console.log(v.a.load("user"));var o=Object(n.useState)(v.a.load("user").login),i=Object(c.a)(o,2),u=i[0],d=(i[1],Object(n.useState)(null)),E=Object(c.a)(d,2),p=E[0],g=E[1];return null!=p?(console.log("USER !!!!!",p),l.a.createElement("div",{className:"Profil"},l.a.createElement(T,{modal:r,toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];m({show:!r.show,message:e?r.message:""})}}),l.a.createElement("h2",null,u),l.a.createElement("div",{className:"user flex two center"},l.a.createElement("div",{className:"name "},l.a.createElement("label",{htmlFor:"pseudo"},"Pseudo :",l.a.createElement("input",{type:"text",id:"pseudo",defaultValue:p.name,onBlur:function(e){p.name=e.target.value?e.target.value:p.name,v.a.save("user",p,{path:"/"}),g(p)}}),l.a.createElement("div",{className:"alert"},"Ton pseudo n'est pas ton login"))),l.a.createElement("div",{className:"password"},l.a.createElement("label",{htmlFor:"password"},"Password :",l.a.createElement("input",{type:"password",id:"password",placeholder:"*********",onBlur:function(e){p.mdp=e.target.value?e.target.value:p.mdp,v.a.save("user",p,{path:"/"}),g(p)}}),l.a.createElement("div",{className:"alert"},"Si tu change ton password, tu sera deconnect\xe9"))),l.a.createElement("div",{className:"email"},l.a.createElement("label",{htmlFor:"email"},"Email :",l.a.createElement("input",{type:"text",id:"email",defaultValue:p.mail,onBlur:function(e){p.mail=e.target.value?e.target.value:p.mail,v.a.save("user",p,{path:"/"}),g(p)}}),l.a.createElement("div",{className:"alert"},"Soit avertie de l'avanc\xe9 du projet"))),l.a.createElement("div",{className:"btag"},l.a.createElement("label",{htmlFor:"btag"},"Btag :",l.a.createElement("input",{type:"text",id:"btag",defaultValue:p.btag,onBlur:function(e){p.btag=e.target.value?e.target.value:p.btag,v.a.save("user",p,{path:"/"}),g(p)}}),l.a.createElement("div",{className:"alert"},"Sans btag pas de recompense possible"))),l.a.createElement("div",{className:"visibility"},"Profil Public : (A venir)",l.a.createElement("br",null),l.a.createElement(Z.a,{onChange:function(){p.visibility=!p.visibility||!p.visibility,v.a.save("user",p,{path:"/"}),g(p)},checked:!!p.visibility&&p.visibility,onColor:"#cc682d",activeBoxShadow:"0 0 2px 3px #cc682d"})),l.a.createElement("div",null,"IMG (A venir)"),l.a.createElement("div",{className:"loveTeam"},"LoveTeam :",l.a.createElement("select",null,l.a.createElement("option",{value:p.loveTeam},p.loveTeam," "))),l.a.createElement("div",null),l.a.createElement("div",{className:"submit"},l.a.createElement("div",{className:"btn button",onClick:function(){console.log("sendProfil"),m({show:!0,message:""}),ae.post("../api/updatePlayer",{user:p}).then(function(e){m({show:!0,message:e.data.message}),e.data.redirect&&setTimeout(function(){v.a.remove("login"),v.a.remove("user"),v.a.remove("bets"),a.push("/")},3e3),setTimeout(function(){m({show:!1,message:""})},4500)}).catch(function(e){console.log(e)})}},"Valider"))),l.a.createElement("h2",null,"Haut Fait"),l.a.createElement(X,{user:p}))):null!=u?(ae.get("../api/getPlayer/".concat(u)).then(function(e){console.log("RESPONSE !!!!",e),g(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",null)):l.a.createElement("div",null)});t(108);function le(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],s=a[1];te.on("newUser",function(e){console.log("newUser"),s(e)});var r=null;return null!=t&&(r=t.map(function(e,a){return l.a.createElement("li",{key:a},e.name)})),l.a.createElement("ul",{className:"ListUser"},r)}function se(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],s=a[1];te.on("newMessages",function(e){s(e);var a=document.querySelector(".ZoneMessage");a.scrollTop=a.scrollHeight});var r=null;null!=t&&(r=Object.keys(t).map(function(e){if(null!=t[e].message)return l.a.createElement("li",{key:e,className:"LiMessage"},l.a.createElement("div",{className:"name"},t[e].user.name),l.a.createElement("div",{className:"date"},function(e){var a=new Date(e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()];return a.getDate()+" "+n+" "+t+" - "+(a.getHours()<10?"0"+a.getHours():a.getHours())+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())}(t[e].date)),l.a.createElement("div",{className:"message"},t[e].message))}));return l.a.createElement("ul",{className:"ZoneMessage"},r)}document.URL.indexOf("localhost")>0?(console.log("LOCAL"),te=x()("localhost:5001")):(console.log("WEB"),te=x()("163.172.159.99:5001"));var re=Object(u.a)(function(e){e.match,te.emit("sendLogin",v.a.load("user"));var a=Object(n.useRef)();function t(){te.emit("sendMessage",a.current.value,v.a.load("user")),a.current.value="",a.current.focus()}return l.a.createElement("div",{className:"Chat"},l.a.createElement("h2",null,"Chat"),l.a.createElement("div",{className:"flex"},l.a.createElement(le,null),l.a.createElement(se,null)),l.a.createElement("div",{className:"ZoneSend"},l.a.createElement("div",{className:"btn",onClick:function(){t()}},"send"),l.a.createElement("input",{type:"text",ref:a,onKeyPress:function(e){"Enter"==e.key&&t()}})))});var ce=Object(u.a)(function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"normal"},l.a.createElement("h3",null,"R\xe8gles"),l.a.createElement("h4",null,"Base :"),l.a.createElement("p",null,"Vous pronostiquez les r\xe9sultats des matches de l'overwatch league, chaque victoire pronostiqu\xe9 te rapporterons 10 points, chaque r\xe9sultat correct te rapporterons 10 points de plus. "),l.a.createElement("p",null,"C'est simple et compr\xe9hensible par tout le monde"),l.a.createElement("h4",null,"L'\xe9quipe Coeur"),l.a.createElement("p",null,"Chaque semaine, vous pourrez choisir une \xe9quipe qui doublera vos points, m\xeame en cas de d\xe9faite."),l.a.createElement("p",null,"Exemple :"),l.a.createElement("p",null,"Mon \xe9quipe Coeur : Shangai Dragon"),l.a.createElement("p",null,"Match : NYE / SHD"),l.a.createElement("p",null,"Prono : 4 / 0"),l.a.createElement("p",null,"Resultat : 4 / 0"),l.a.createElement("p",null,"J'ai donc pronostiqu\xe9 la d\xe9faite des SHD, j'ai la d\xe9faite (10 points) + le bon r\xe9sultat (10 points) = 20 points x 2 = 40 points"),l.a.createElement("h4",null,"R\xe9compenses :"),l.a.createElement("p",null,"Chaque fin de stage les trois premiers du classement recevront"),l.a.createElement("p",null,"1er : 11 loot box"),l.a.createElement("p",null,"2eme : 5 loot box"),l.a.createElement("p",null,"3eme : 2 loot box"),l.a.createElement("p",null,'(Certaine personne n\'ont que faire des loots box ils pourront donc refuser leurs gains, un tirage au sort auras donc lieux pour "offrir" cet r\xe9compense aune autre personne hors top 3)')))}),me=x()("http://localhost:5001"),oe=t(6);me.emit("LOL",1e3);var ie=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],s=a[1];return null===t?(oe.get("https://api.overwatchleague.com/schedule").then(function(e){s(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",{className:"App"})):l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(g,null),l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("span",null,"O"),"ver",l.a.createElement("span",null,"B"),"ets")),l.a.createElement("div",{className:"main"},l.a.createElement(E,null),l.a.createElement(o.a,{exact:!0,path:"/",render:function(){return l.a.createElement(V,null)}}),l.a.createElement(o.a,{path:"/matches",render:function(){return l.a.createElement(O,{weeks:t.data.stages[0].weeks})}}),l.a.createElement(o.a,{path:"/teams",render:function(){return l.a.createElement(k,null)}}),l.a.createElement(o.a,{path:"/login",render:function(){return l.a.createElement(M,null)}}),l.a.createElement(o.a,{path:"/signIn",render:function(){return l.a.createElement(C,null)}}),l.a.createElement(o.a,{path:"/team/:idteam",render:function(){return l.a.createElement(H,null)}}),l.a.createElement(o.a,{path:"/leaderBoard",render:function(){return l.a.createElement(K,null)}}),l.a.createElement(o.a,{path:"/stream",render:function(){return l.a.createElement("h2",null,"STREAM")}}),l.a.createElement(o.a,{path:"/profil/:user",render:function(){return l.a.createElement(ee,null)}}),l.a.createElement(o.a,{path:"/myProfil",render:function(){return l.a.createElement(ne,null)}}),l.a.createElement(o.a,{path:"/chat",render:function(){return l.a.createElement(re,null)}}),l.a.createElement(o.a,{path:"/rules",render:function(){return l.a.createElement(ce,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,a,t){e.exports=t(111)},55:function(e,a,t){}},[[50,2,1]]]);
//# sourceMappingURL=main.7dee7738.chunk.js.map