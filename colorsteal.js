// ==UserScript==
// @name         colorsteal
// @namespace    https://multiplayerpiano.org/#
// @version      v1.0-alpha3 - stats edition
// @description  steal colorssss >:)))))
// @author       You
// @match        https://multiplayerpiano.org/*
// @match        https://multiplayerpiano.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=multiplayerpiano.org
// @grant        none
// ==/UserScript==
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
                localStorage.setItem("fave", null)
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
        if (cmd == "back") {
            MPP.chat.send("reset")
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
                name: "circjit",
                color: '#007bff'
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
                name: m.a.substring(5).trim()
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
