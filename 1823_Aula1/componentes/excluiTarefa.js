const BotaoExcluir = () => {
    const botaoExcluir = document.createElement('button');
    
    botaoExcluir.classList.add('delete-button');
    botaoExcluir.innerText = 'DELETE';

    botaoExcluir.addEventListener('click', excluirTarefa)

    return botaoExcluir;
}

const excluirTarefa = (evento) => {
    const botaoExluir = evento.target;

    const tarefaCompleta = botaoExluir.parentElement;

    tarefaCompleta.remove();
}

export default BotaoExcluir;