(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,a,t){e.exports=t(56)},30:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),c=t.n(r),s=t(3),m=(t(30),t(59)),o=t(58),i=t(60),u=t(2),d=t.n(u),v=t(9),p=d.a.load("bets")||!1;function E(e){var a=e.match,t=e.inputScoreA,r=e.inputScoreB,c=e.team,m=Object(n.useState)(Date.now()),o=Object(s.a)(m,1)[0],i=Object(n.useState)(Number.isInteger(a.startDate)?a.startDate:a.startDateTS),u=Object(s.a)(i,1)[0];return console.log(o-u),console.log(Number.isInteger(a.startDate)),console.log(a.startDate),console.log(a),o-u<=0?(console.log("PAS PASSER"),"A"===c?l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamA",className:"scoreInput",ref:t,disabled:!0,defaultValue:p&&p.hasOwnProperty(a.id)?p[a.id].scoreA:""}),l.a.createElement("div",{className:"lilbtn",onClick:function(){var e=parseInt(t.current.value);isNaN(parseInt(r.current.value))?r.current.value=0:r.current.value=parseInt(r.current.value),isNaN(e)?t.current.value=1:t.current.value=e+1>5?5:e+1}},"+"),l.a.createElement("div",{className:"lilbtn",onClick:function(){var e=parseInt(t.current.value);isNaN(parseInt(r.current.value))?r.current.value=0:r.current.value=parseInt(r.current.value),isNaN(e)||e-1<0?t.current.value=0:t.current.value=e-1}},"-")):l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamB",className:"scoreInput",ref:r,disabled:!0,defaultValue:p&&p.hasOwnProperty(a.id)?p[a.id].scoreB:""}),l.a.createElement("div",{className:"lilbtn",onClick:function(){var e=parseInt(r.current.value);isNaN(parseInt(t.current.value))?t.current.value=0:t.current.value=parseInt(t.current.value),isNaN(e)?r.current.value=1:r.current.value=e+1>5?5:e+1}},"+"),l.a.createElement("div",{className:"lilbtn",onClick:function(){var e=parseInt(r.current.value);isNaN(parseInt(t.current.value))?t.current.value=0:t.current.value=parseInt(t.current.value),isNaN(e)||e-1<0?r.current.value=0:r.current.value=e-1}},"-"))):"A"===c?l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamA",className:"scoreInput",ref:t,disabled:!0,defaultValue:p&&p.hasOwnProperty(a.id)?p[a.id].scoreA:""})):l.a.createElement("div",{className:"bet"},l.a.createElement("input",{type:"text",name:"TeamB",className:"scoreInput",ref:r,disabled:!0,defaultValue:p&&p.hasOwnProperty(a.id)?p[a.id].scoreB:""}))}var h=function(e){var a=e.match,t=a.competitors[0];t.score=a.scores[0].value;var r=a.competitors[1];r.score=a.scores[1].value;var c=Object(n.useRef)(),s=Object(n.useRef)();return l.a.createElement("div",{className:"Match flex",onMouseLeave:function(){d.a.load("login")&&v.post("../api/sendBet",{scoreA:c.current.value,scoreB:s.current.value,idMatch:a.id,user:d.a.load("user")}).then(function(e){d.a.save("bets",e.data,{path:"/"})}).catch(function(e){console.log(e)})}},l.a.createElement("div",{className:"TeamA flex"},l.a.createElement("img",{src:t.logo,alt:t.abbreviatedName}),l.a.createElement("div",{className:"tag"},t.abbreviatedName),l.a.createElement("div",{className:"score"},l.a.createElement("div",{className:"value"},t.score),d.a.load("login")?l.a.createElement(E,{inputScoreA:c,inputScoreB:s,match:a,team:"A"}):"")),l.a.createElement("div",{className:"separator"}),l.a.createElement("div",{className:"TeamB flex"},l.a.createElement("img",{src:r.logo,alt:r.abbreviatedName}),l.a.createElement("div",{className:"score"},l.a.createElement("div",{className:"value"},r.score),d.a.load("login")?l.a.createElement(E,{inputScoreA:c,inputScoreB:s,match:a,team:"B"}):""),l.a.createElement("div",{className:"tag"},r.abbreviatedName)),l.a.createElement("div",{className:"myBets"}))};function g(e){var a=e.week,t=e.current;function n(e){var a=new Date(e),t=a.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][a.getMonth()];return a.getDate()+" "+n+" "+t}var r=a.matches.map(function(e){return l.a.createElement(h,{match:e,key:e.id})});return l.a.createElement("div",{className:a.id===t?"Week show":"Week"},l.a.createElement("div",{className:"info flex "},l.a.createElement("div",{className:"name"},a.name),l.a.createElement("div",{className:"date start"},n(a.startDate)),l.a.createElement("div",{className:"date separator"},"-"),l.a.createElement("div",{className:"date end"},n(a.endDate))),l.a.createElement("div",{className:"Matchs flex center"},r))}var f=Object(i.a)(function(e){var a=e.weeks.length,t=Object(n.useState)(0),r=Object(s.a)(t,2),c=r[0],m=r[1],o=e.weeks.map(function(e){return l.a.createElement(g,{week:e,key:e.id,current:c})});return l.a.createElement("div",null,l.a.createElement("h2",null,"Matches"),l.a.createElement("div",{className:"changeWeek flex"},l.a.createElement("div",{className:"down"},l.a.createElement("i",{onClick:function(){0!==c&&m(c-1)}},"<")),l.a.createElement("div",{className:"up"},l.a.createElement("i",{onClick:function(){c+1!==a&&m(c+1)}},">"))),l.a.createElement("div",{className:"Weeks"},o))}),N=t(57),b=t(9);function w(e){var a=e.team;return l.a.createElement("div",{className:"team flex one"},l.a.createElement(N.a,{to:"/team/".concat(a.id)},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:a.logo,alt:a.alt})),l.a.createElement("div",{className:"name"},a.name)))}var y=Object(i.a)(function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1];if(null===t)return b.get("https://api.overwatchleague.com/teams?lang=fr").then(function(e){r(e.data.competitors)}).catch(function(e){console.log(e)}),l.a.createElement("div",null,l.a.createElement("h2",null,"Teams"));var c=t.map(function(e){return l.a.createElement(w,{team:e.competitor,key:e.competitor.id})});return l.a.createElement("div",{className:"Teams"},l.a.createElement("h2",null,"Teams"),l.a.createElement("div",{className:"listTEams flex center two three-600 six-1200"},c))});var O=function(e){var a=e.modal,t=e.toggleModal;return l.a.createElement("div",{className:a.show?"modal show":"modal hide"},l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"close",onClick:function(){t(!0)}},"X"),l.a.createElement("div",{className:"message"},a.message)))},j=t(9);var T=Object(i.a)(function(e){var a=e.history,t=Object(n.useState)({show:!1,message:""}),r=Object(s.a)(t,2),c=r[0],m=r[1],o=Object(n.useRef)(),i=Object(n.useRef)();return l.a.createElement("div",null,l.a.createElement(O,{modal:c,toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];m({show:!c.show,message:e?c.message:""})}}),l.a.createElement("h2",null,"Login"),l.a.createElement("div",{className:"loginFrom"},l.a.createElement("label",{htmlFor:"login"},"Pseudo :"),l.a.createElement("input",{type:"text",name:"login",id:"login",ref:o}),l.a.createElement("label",{htmlFor:"password"},"Password :"),l.a.createElement("input",{type:"password",name:"password",id:"password",ref:i}),l.a.createElement("div",{className:"btn",type:"submit",onClick:function(){m({show:!0,message:""}),j.post("api/login",{login:o.current.value,pass:i.current.value}).then(function(e){e.data.status?(d.a.save("login",!0,{path:"/"}),d.a.save("user",e.data.data,{path:"/"}),d.a.save("bets",e.data.data.bets,{path:"/"}),m({show:!0,message:e.data.message}),setTimeout(function(){a.push("/")},3e3)):m({show:!0,message:e.data.message}),setTimeout(function(){m({show:!1,message:""})},2500)}).catch(function(e){console.log(e)})}},"Validez"),l.a.createElement(N.a,{to:"/signIn"},l.a.createElement("div",{className:"btn",type:"submit"},"S'inscrire"))))}),k=t(9);var x=Object(i.a)(function(e){var a=e.history,t=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)(),m=Object(n.useState)({show:!1,message:""}),o=Object(s.a)(m,2),i=o[0],u=o[1];return l.a.createElement("div",null,l.a.createElement(O,{modal:i,toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];u({show:!i.show,message:e?i.message:""})}}),l.a.createElement("h2",null,"SIGNIN"),l.a.createElement("div",{className:"loginFrom"},l.a.createElement("label",{htmlFor:"login"},"Pseudo :"),l.a.createElement("input",{type:"text",name:"login",id:"login",ref:t}),l.a.createElement("label",{htmlFor:"password"},"Password :"),l.a.createElement("input",{type:"password",name:"password",id:"password",ref:r}),l.a.createElement("label",{htmlFor:"passwordtwo"},"Deux fois :"),l.a.createElement("input",{type:"password",name:"passwordtwo",id:"passwordtwo",ref:c}),l.a.createElement("div",{className:"btn",type:"submit",onClick:function(){!function(){console.log(t.current.value,r.current.value,c.current.value);var e=t.current.value,n=r.current.value,l=c.current.value;e.length>3&&n.length>3&&l.length>3?n.length===l.length?k.post("api/signIn",{login:t.current.value,pass:r.current.value}).then(function(e){e.data.status?(d.a.save("login",!0,{path:"/"}),d.a.save("user",e.data.data,{path:"/"}),d.a.save("bets",e.data.data.bets,{path:"/"}),console.log(e.data.data),u({show:!0,message:e.data.message}),setTimeout(function(){a.push("/")},5e3)):u({show:!0,message:e.data.message})}).catch(function(e){console.log(e)}):u({show:!0,message:"Les deux mot de passe que tu as rentr\xe9 ne sont pas identique "}):u({show:!0,message:"Ton Pseudo et/ou ton Mot de passe doivent faire plus de 3 caract\xe8res"})}()}},"Valider")))});var S=Object(i.a)(function(e){var a=e.history;return d.a.load("login")?l.a.createElement("nav",null,l.a.createElement("div",{className:"menu"},"Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(N.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"/matches"},"Matches")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"/teams"},"Teams")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"/leaderBoard"},"Classements")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"/profil/".concat(d.a.load("user").login)},"Profil")),l.a.createElement("li",{onClick:function(){d.a.remove("login"),d.a.remove("user"),d.a.remove("bets"),a.go("/")}},l.a.createElement("a",{href:"/"},"Logout")))):l.a.createElement("nav",null,l.a.createElement("div",{className:"menu"},"Menu"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(N.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"/matches"},"Matches")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"/teams"},"Teams")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"/login"},"Login"))))}),B=t(9),I="as9drzlxfqojhjzeomk8qtrrikcbss";function P(e){var a=e.player,t=Object(n.useState)(null),r=Object(s.a)(t,2),c=r[0],m=r[1];if(null==c)return B.get("https://api.overwatchleague.com/players/".concat(a.id)).then(function(e){m(e.data.data.player)}).catch(function(e){console.log(e)}),l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"playerName"},a.name),l.a.createElement("div",{className:"playerImg"},l.a.createElement("img",{src:a.headshot,alt:""})));var o=c.accounts.find(function(e){return"TWITCH"===e.accountType});return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"playerName"},a.name),l.a.createElement("div",{className:"playerImg"},l.a.createElement("img",{src:a.headshot,alt:""})),l.a.createElement(A,{urlTwitch:o}))}function A(e){var a=e.urlTwitch,t=void 0!==a?a.value.split("/").pop():null,r=Object(n.useState)(!1),c=Object(s.a)(r,2),m=c[0],o=c[1];return m||void 0===a||B.get("https://api.twitch.tv/kraken/streams/".concat(t,"?client_id=").concat(I)).then(function(e){null!=e.data.stream&&o(e.data.stream)}).catch(function(e){console.log(e)}),a?l.a.createElement("a",{href:a.value,target:"_blank",rel:"noopener noreferrer",className:m.game?"playerTwitch live":"playerTwitch"},t,m.game):l.a.createElement("div",{className:m.game?"playerTwitch live":"playerTwitch"},t)}var C=Object(i.a)(function(e){var a=e.match,t=e.history,r=Object(n.useState)(null),c=Object(s.a)(r,2),m=c[0],o=c[1],i=Object(n.useState)(a.params.idteam),u=Object(s.a)(i,1)[0];if(null===m)return B.get("https://api.overwatchleague.com/teams/".concat(u)).then(function(e){o(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",null,l.a.createElement("h2",null,"Teams"));var v=m.schedule.map(function(e){return l.a.createElement(h,{match:e,key:e.id})}),p=m.players.map(function(e){return l.a.createElement(P,{player:e,key:e.id})});return l.a.createElement("div",{className:"Team"},l.a.createElement("h2",null,m.name),l.a.createElement("div",{className:"body"},d.a.load("login")?l.a.createElement("div",{className:"loveTeam",onClick:function(){B.post("../api/loveTeam",{teamId:m.abbreviatedName,user:d.a.load("user").name}).then(function(e){d.a.save("user",e.data,{path:"/"}),t.push(t.location.pathname)}).catch(function(e){console.log(e)})}},d.a.load("user")?l.a.createElement("div",{className:d.a.load("user").loveTeam?d.a.load("user").loveTeam===m.abbreviatedName?"btnLoveTeam this":"btnLoveTeam":"btnLoveTeam empty"},"\u2764"):""):"",l.a.createElement("h3",null,"Planning"),l.a.createElement("div",{className:"shedule flex center"},v),l.a.createElement("h3",null,"Roster"),l.a.createElement("div",{className:"roster flex center six"},p)))});var M=Object(i.a)(function(){return l.a.createElement("div",{className:"Home"},l.a.createElement("div",{className:"alert"},l.a.createElement("p",null,"Bienvenue sur OW-BET,"),l.a.createElement("p",null,"Ce site est actuellement en BETA ferm\xe9 (d'o\xf9 l'adresse un peu bizarre)."),l.a.createElement("p",null,"Si vous trouvez un bug ou tout autre comportement inhabituel, faite le remonter a Hyst\xe9rias")),l.a.createElement("div",{className:"normal"},l.a.createElement("h3",null,"R\xe8gles"),l.a.createElement("h4",null,"Base :"),l.a.createElement("p",null,"Vous pronostiquez les r\xe9sultats des matches de l'overwatch league, chaque victoire pronostiqu\xe9 te rapporterons 10 points, chaque r\xe9sultat correct te rapporterons 10 points de plus. "),l.a.createElement("p",null,"C'est simple et compr\xe9hensible par tout le monde"),l.a.createElement("h4",null,"L'\xe9quipe Coeur"),l.a.createElement("p",null,"Chaque semaine, vous pourrez choisir une \xe9quipe qui doublera vos points, m\xeame en cas de d\xe9faite."),l.a.createElement("p",null,"Exemple :"),l.a.createElement("p",null,"Mon \xe9quipe Coeur : Shangai Dragon"),l.a.createElement("p",null,"Match : NYE / SHD"),l.a.createElement("p",null,"Prono : 4 / 0"),l.a.createElement("p",null,"Resultat : 4 / 0"),l.a.createElement("p",null,"J'ai donc pronostiqu\xe9 la d\xe9faite des SHD, j'ai la d\xe9faite (10 points) + le bon r\xe9sultat (10 points) = 20 points x 2 = 40 points"),l.a.createElement("h4",null,"R\xe9compenses :"),l.a.createElement("p",null,"Chaque fin de stage les trois premiers du classement recevront"),l.a.createElement("p",null,"1er : 11 loot box"),l.a.createElement("p",null,"2eme : 5 loot box"),l.a.createElement("p",null,"3eme : 2 loot box"),l.a.createElement("p",null,'(Certaine personne n\'ont que faire des loots box ils pourront donc refuser leurs gains, un tirage au sort auras donc lieux pour "offrir" cet r\xe9compense aune autre personne hors top 3)')),l.a.createElement("div",{className:"normal"},l.a.createElement("p",null,"Mercredi 19 D\xe9cembre 2018"),l.a.createElement("p",null,"Premi\xe8re mise en ligne, il y aura surement des bugs et si je l'ouvre en b\xe9ta ferm\xe9e et reserv\xe9e \xe0 la section FTG c'est pas pour rien je vous demande \xe0 tous de me remonter les bugs erreur , et m\xeame vos id\xe9es d'am\xe9lioration.")),l.a.createElement("div",{className:"normal"},l.a.createElement("p",null,"Samedi 19 Janvier 2019"),l.a.createElement("p",null,"Quel que bug fix on \xe9t\xe9 effectuer surtout un qui touchais la base de donn\xe9e, le site est officiellement fonctionnelle.")))}),R=t(9);function q(e){var a=e.team;return l.a.createElement("div",{className:"teamRanking flex"},l.a.createElement("div",{className:"placement"},a.placement),l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:a.competitor.logo,alt:""})),l.a.createElement("div",{className:"name"},a.competitor.name),l.a.createElement("div",{className:"win"},a.records[0].matchWin),l.a.createElement("div",{className:"draw"},a.records[0].matchDraw),l.a.createElement("div",{className:"lose"},a.records[0].matchLoss),l.a.createElement("div",{className:"play"},a.records[0].matchBye))}function D(e){var a=e.player,t=e.pos;return l.a.createElement("div",{className:"playerRanking flex"},l.a.createElement("div",{className:"placement"},t),l.a.createElement("div",{className:"loveTeam"},l.a.createElement("img",{src:"imgs/teams/".concat(a.loveTeam,".png"),alt:""})),l.a.createElement(F,{player:a}),l.a.createElement("div",{className:"score"},a.score))}function F(e){var a=e.player;return d.a.load("user")&&9==d.a.load("user").status?(console.log("admin"),l.a.createElement("div",{className:"name"},l.a.createElement(N.a,{to:"/profil/".concat(a.login)},a.name))):1==a.visibility?(console.log("public"),l.a.createElement("div",{className:"name"},l.a.createElement(N.a,{to:"/profil/".concat(a.login)},a.name))):l.a.createElement("div",{className:"name"},a.name)}var L=Object(i.a)(function(){var e,a,t=Object(n.useState)(null),r=Object(s.a)(t,2),c=r[0],m=r[1],o=Object(n.useState)(null),i=Object(s.a)(o,2),u=i[0],d=i[1];if(null===c&&null===u)return R.get("https://api.overwatchleague.com/ranking").then(function(e){var a=e.data.content.sort(function(e,a){return e.placement-a.placement});m(a)}).catch(function(e){console.log(e)}),R.get("api/getPlayersRanking").then(function(e){d(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",null,"LeaderBoard");if(null!==u&&null!==c){var v=1;e=u.map(function(e,a){return u[a-1]&&u[a-1].score!=u[a].score&&(v+=1),l.a.createElement(D,{player:e,key:e.name,pos:v})}),a=c.map(function(e){return l.a.createElement(q,{team:e,key:e.competitor.id})})}return l.a.createElement("div",{className:"LeaderBoard"},l.a.createElement("h2",null,"Classement"),l.a.createElement("div",{className:"flex center"},l.a.createElement("div",{className:"LeaderBoardTeams"},l.a.createElement("h3",null,"Teams"),l.a.createElement("div",{className:"teamRanking flex"},l.a.createElement("div",{className:"placement"},"pos"),l.a.createElement("div",{className:"img"}),l.a.createElement("div",{className:"name"},"Equipe"),l.a.createElement("div",{className:"win"},"W"),l.a.createElement("div",{className:"draw"},"D"),l.a.createElement("div",{className:"lose"},"L"),l.a.createElement("div",{className:"play"},"P")),a),l.a.createElement("div",{className:"LeaderBoardPlayers"},l.a.createElement("h3",null,"Players"),l.a.createElement("div",{className:"playerRanking flex"},l.a.createElement("div",{className:"placement"},"POS"),l.a.createElement("div",{className:"loveTeam"},"\u2764"),l.a.createElement("div",{className:"name"},"Pseudo"),l.a.createElement("div",{className:"score"},"Score")),e)))}),V=t(23),H=t.n(V),W=t(9);var z=Object(i.a)(function(e){var a=e.match,t=e.history;console.log(t);var r=Object(n.useState)(d.a.load("user")),c=Object(s.a)(r,2),m=c[0],o=c[1],i=Object(n.useState)({show:!1,message:""}),u=Object(s.a)(i,2),v=u[0],p=u[1];return d.a.load("user")&&d.a.load("user").login===a.params.user?l.a.createElement("div",{className:"Profil"},l.a.createElement(O,{modal:v,toggleModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];p({show:!v.show,message:e?v.message:""})}}),l.a.createElement("h2",null,"PROFIL User"),l.a.createElement("div",{className:"user flex two center"},l.a.createElement("div",{className:"name "},l.a.createElement("label",{htmlFor:"pseudo"},"Pseudo :",l.a.createElement("input",{type:"text",id:"pseudo",defaultValue:m.name,onBlur:function(e){m.name=e.target.value?e.target.value:m.name,d.a.save("user",m,{path:"/"}),o(m)}}),l.a.createElement("div",{className:"alert"},"Ton pseudo n'est pas ton login"))),l.a.createElement("div",{className:"password"},l.a.createElement("label",{htmlFor:"password"},"Password :",l.a.createElement("input",{type:"password",id:"password",placeholder:"*********",onBlur:function(e){m.mdp=e.target.value?e.target.value:m.mdp,d.a.save("user",m,{path:"/"}),o(m)}}),l.a.createElement("div",{className:"alert"},"Si tu change ton password, tu sera deconnect\xe9"))),l.a.createElement("div",{className:"email"},l.a.createElement("label",{htmlFor:"email"},"Email :",l.a.createElement("input",{type:"text",id:"email",defaultValue:m.mail,onBlur:function(e){m.mail=e.target.value?e.target.value:m.mail,d.a.save("user",m,{path:"/"}),o(m)}}),l.a.createElement("div",{className:"alert"},"Soit avertie de l'avanc\xe9 du projet"))),l.a.createElement("div",{className:"btag"},l.a.createElement("label",{htmlFor:"btag"},"Btag :",l.a.createElement("input",{type:"text",id:"btag",defaultValue:m.btag,onBlur:function(e){m.btag=e.target.value?e.target.value:m.btag,d.a.save("user",m,{path:"/"}),o(m)}}),l.a.createElement("div",{className:"alert"},"Sans btag pas de recompense possible"))),l.a.createElement("div",{className:"visibility"},"Profil Public : (A venir)",l.a.createElement("br",null),l.a.createElement(H.a,{onChange:function(){m.visibility=!m.visibility||!m.visibility,d.a.save("user",m,{path:"/"}),o(m)},checked:!!m.visibility&&m.visibility,onColor:"#cc682d",activeBoxShadow:"0 0 2px 3px #cc682d"})),l.a.createElement("div",null,"IMG (A venir)"),l.a.createElement("div",{className:"loveTeam"},"LoveTeam :",l.a.createElement("select",null,l.a.createElement("option",{value:m.loveTeam},m.loveTeam," "))),l.a.createElement("div",null),l.a.createElement("div",{className:"submit"},l.a.createElement("div",{className:"btn button",onClick:function(){console.log("CHANGE PROFIL",m),p({show:!0,message:""}),W.post("../api/updatePlayer",{user:m}).then(function(e){console.log(e),p({show:!0,message:e.data.message}),e.data.redirect&&setTimeout(function(){d.a.remove("login"),d.a.remove("user"),d.a.remove("bets"),t.push("/")},5e3),setTimeout(function(){p({show:!1,message:""})},4500)}).catch(function(e){console.log(e)})}},"Valider"))),l.a.createElement("h2",null,"Haut Fait"),l.a.createElement("div",{className:"achievement"},"A venir ;)")):(W.get("../api/getPlayer/".concat(a.params.user)).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",{className:"Profil"},l.a.createElement("h2",null,a.params.user),l.a.createElement("h2",null,"Haut Fait"),l.a.createElement("div",{className:"achievement"},"A venir ;)")))}),J=t(9);var G=function(){var e=Object(n.useState)(null),a=Object(s.a)(e,2),t=a[0],r=a[1];return null===t?(J.get("https://api.overwatchleague.com/schedule").then(function(e){r(e.data)}).catch(function(e){console.log(e)}),l.a.createElement("div",{className:"App"})):l.a.createElement(m.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"main"},l.a.createElement(S,null),l.a.createElement(o.a,{exact:!0,path:"/",render:function(){return l.a.createElement(M,null)}}),l.a.createElement(o.a,{path:"/matches",render:function(){return l.a.createElement(f,{weeks:t.data.stages[0].weeks})}}),l.a.createElement(o.a,{path:"/teams",render:function(){return l.a.createElement(y,null)}}),l.a.createElement(o.a,{path:"/login",render:function(){return l.a.createElement(T,null)}}),l.a.createElement(o.a,{path:"/signIn",render:function(){return l.a.createElement(x,null)}}),l.a.createElement(o.a,{path:"/team/:idteam",render:function(){return l.a.createElement(C,null)}}),l.a.createElement(o.a,{path:"/leaderBoard",render:function(){return l.a.createElement(L,null)}}),l.a.createElement(o.a,{path:"/stream",render:function(){return l.a.createElement("h2",null,"STREAM")}}),l.a.createElement(o.a,{path:"/profil/:user",render:function(){return l.a.createElement(z,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.e92430db.chunk.js.map