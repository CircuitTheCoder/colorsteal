// ==UserScript==
// @name         colorsteal
// @namespace    https://multiplayerpiano.org/#
// @version      1.0
// @description  steal colorssss >:)))))
// @author       ccjt
// @match        https://multiplayerpiano.org/*
// @match        https://multiplayerpiano.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=multiplayerpiano.org
// @grant        none
// ==/UserScript==
// "u": "n", derwear haha gottem
// (^preserve^)
MPP.client.on('a', function(m) {
    var args = m.a.split(' ');
    var cmd = args[0];
    // cmds
    if (m.p.id == MPP.client.participantId) {
        if (cmd == "fave") {
            localStorage.setItem("fave", localStorage.fave + ", " + m.a.substring(4).trim())
            MPP.chat.send("faved!")
        }
        if (cmd == "faves") {
            if (localStorage.fave == "") {
                MPP.chat.send("you have no faves! (maybe you wiped your faves..?)")
            } else {
                MPP.chat.send(localStorage.fave)
            }
        }
        if (cmd == "wipefaves") {
            if (args.length == 0) {
                MPP.chat.send("ARE YOU SURE? [y/n]")
            } else {
                if (args[1] == "y") {
                MPP.chat.send("wiped!")
                localStorage.setItem("fave", "")
                } else {
                if (args[1] == "n") { MPP.chat.send("ok!") }
                }
            }
        }
        if (cmd == "afk") {
            MPP.client.sendArray([{
                m: 'userset',
                set: {
                    name: m.p.name + " [AFK]",
                    color: "#004794"
                }
            }]);
        }
        if (cmd == "favestats") {
            MPP.chat.send(localStorage.stat)
        }
        if (cmd == "stat") {
            if (m.a.substring(4).trim().length + m.p.name + 2 > 39) {
                MPP.chat.send("stat too long!! (final name length: " + (m.a.substring(4).trim().length + m.p.name + 2) + ")")
            } else {
                MPP.chat.send("name " + m.p.name + " [" + m.a.substring(4).trim() + "]")
                MPP.chat.send("set!")
            }
        }
        if (cmd == "favestat") {
            let stat = localStorage.stat
            localStorage.setItem("stat", localStorage.stat + ", " + m.a.substring(8).trim())
            MPP.chat.send("set!")
        }
        if (cmd == "wipestats") {
            localStorage.setItem("stat", "")
            MPP.chat.send("wiped!")
        }
        if (cmd == "back") {
            MPP.chat.send("reset")
        }
        if (cmd == "dice") {
            MPP.chat.send(`${Math.floor(Math.random()*parseInt(args[1]))}`)
        }

        if (cmd == "flip") {
            if (Math.random() < (69/100)) {
                MPP.chat.send("\*flips*")
            } else {
                MPP.chat.send("\*fails*")
            }

        }
        if (cmd == "steal") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                color: MPP.client.ppl[args[1]].color
            }
        }]);
    }
    if (cmd == "reset") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                name: "ccjt 🏳️‍⚧️",
                color: '#ec98e1'
            }
        }]);
    }
    if (cmd == "mycolor") {
        MPP.chat.send(MPP.client.ppl[MPP.client.participantId].color)
    }
    if (cmd == "settings") {
        console.log(JSON.stringify(MPP.client.channel.settings))
    }
    if (cmd == "about") {
        MPP.chat.send(JSON.stringify(MPP.client.ppl[args[1]]))
    }
    if (cmd == "goto") {
        MPP.client.setChannel(args[1])
    }
    if (cmd == "whereami") {
        MPP.chat.send(MPP.client.channel._id)
    }
    if (cmd == "name") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                name: m.a.substring(4).trim()
            }
        }]);
    }
    if (cmd == "color") {
        MPP.client.sendArray([{
            m: 'userset',
            set: {
                color: args[1]
            }
        }]);
    }
    }
});
// 100
