const proffys = [{
        name: "Yann Santos",
        avatar: "https://avatars0.githubusercontent.com/u/40508828?s=460&u=702278204e2e93c5e17e4214e6ce3d945661dfc2&v=4 ",
        whatsapp: "(075)98860-6100",
        bio: "Ensina Física Quântica na pratica (literalmente).<br/><br/>Ao final do curso, tem sorteio de uma viagem no tempo(passado ou futuro), quebrando qualquer teoria ja vista atualmente.",
        subject: "Física",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [722],
        time_to: [1774]
    },
    {
        name: "Marcos yan",
        avatar: "https://avatars0.githubusercontent.com/u/40508828?s=460&u=702278204e2e93c5e17e4214e6ce3d945661dfc2&v=4 ",
        whatsapp: "(075)98860-6100",
        bio: "Ensina Física Quântica na pratica (literalmente).<br/><br/>Ao final do curso, tem sorteio de uma viagem no tempo(passado ou futuro), quebrando qualquer teoria ja vista atualmente.",
        subject: "Física",
        cost: "20",
        weekday: [
            0
        ],
        time_from: [722],
        time_to: [1774]
    }
]


const subjects = [
    "Biologia",
    "Artes",
    "Ciência",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", {
        proffys,
        filters,
        subjects,
        weekdays
    })
}


function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)
        return res.redirect("/study")
    }

    //adicionar a lista de proffys
    return res.render("give-classes.html", {
        subjects,
        weekdays
    })
}

const express = require('express')
const server = express()

//configurando nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,

})

server
    //configurando arquivos estáticos(css, scripts, imagens)
    .use(express.static("public"))
    //rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)

    .listen(5500)

//01:05