import BotaoConclui from './componentes/concluiTarefa.js';
import BotaoExcluir from './componentes/excluiTarefa.js';

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
        tarefa.appendChild(BotaoExcluir());

        lista.appendChild(tarefa);
        input.value = '';
    }
     
    const novaTarefa = document.querySelector('[data-form-button]');
    
    novaTarefa.addEventListener('click', criarTarefa);

