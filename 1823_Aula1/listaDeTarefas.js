(() => {
    const criarTarefa = (evento) => {

        evento.preventDefault();
       
        const lista = document.querySelector('[data-list]');
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;    
    
        
        const tarefa = document.createElement('li');
        tarefa.classList.add('task');
    
        const conteudo = `<p class="content">${valor}<p/>`;
        // const box = `<li class="task">${conteudo}<li/>`;
    
        tarefa.innerHTML = conteudo;
    
        tarefa.appendChild(BotaoConclui());
        lista.appendChild(tarefa);
        input.value = '';
    }
    
    
    const novaTarefa = document.querySelector('[data-form-button]');
    
    
    novaTarefa.addEventListener('click', criarTarefa);
    
    
    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button');
    
        botaoConclui.classList.add('check-button');
        botaoConclui.innerText = 'Done';
    
        botaoConclui.addEventListener('click', concluirTarefa);
    
        return botaoConclui;
    };
    
    const concluirTarefa = (evento) => {
        const botaoConclui = evento.target;
    
        const tarefaCompleta = botaoConclui.parentElement; //pai do botao
    
        tarefaCompleta.classList.toggle('done');
    };
    
})()
