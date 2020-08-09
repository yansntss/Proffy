const Database = require('./db')
const createProffy = require('./createProffy')




Database.then(async(db) => {
    //inserir dados
    proffyValue = {
        name: "Yann Santos",
        avatar: "https://avatars0.githubusercontent.com/u/40508828?s=460&u=702278204e2e93c5e17e4214e6ce3d945661dfc2&v=4 ",
        whatsapp: "(075)98860-6100",
        bio: "Ensina Física Quântica na pratica (literalmente).<br/><br/>Ao final do curso, tem sorteio de uma viagem no tempo(passado ou futuro), quebrando qualquer teoria ja vista atualmente."

    }

    classValue = {
        subject: 1,
        cost: "20"
        //o proffy_id virá pelo banco de dados

    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 722,
            time_to: 1774
        },
        {
            weekday: 0,
            time_from: 442,
            time_to: 1254
        }
    ]

//    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id) WHERE classes.proffy_id = 1;
    
    `)
    // console.log(selectedClassesAndProffys)

    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "472"
        AND class_schedule.time_to > "472"
    
    `)
    console.log(selectClassesSchedule)


})