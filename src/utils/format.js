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
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

function getSubject(subjectNumber){
    const position = +subjectNumber -1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    //      [0]   [1]
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}


module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}