const tarefas = process.argv[2]
let listaDeTarefas = ["Tomar Café da manhã", "Tomar Banho"]

const adicionarNovaTarefa = () => {
    const novaTarefa = [...listaDeTarefas, tarefas]
    console.log("Tarefa adicionada com sucesso!")
    console.log("Tarefas: ", novaTarefa)
}

adicionarNovaTarefa() 