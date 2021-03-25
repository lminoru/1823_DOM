const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');

    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = ' DONE';

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
};

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;

    const tarefaCompleta = botaoConclui.parentElement; //pai do botao

    tarefaCompleta.classList.toggle('done');
};

export default BotaoConclui;