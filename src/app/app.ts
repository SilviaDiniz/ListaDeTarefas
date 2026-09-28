import { Component, signal } from '@angular/core';
import { NovaTarefa } from './components/nova-tarefa/nova-tarefa';
import { TarefaItem } from './components/tarefa-item/tarefa-item';

interface Tarefa {
  texto: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  imports: [NovaTarefa, TarefaItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  tarefas = signal<Tarefa[]>([]);

  adicionarTarefa(texto: string) {
    this.tarefas.update(tarefas => [
      ...tarefas,
      {
        texto: texto,
        concluida: false
      }
    ]);
  }

  excluirTarefa(index: number) {
    this.tarefas.update(tarefas =>
      tarefas.filter((_, i) => i !== index)
    );
  }

  concluirTarefa(index: number) {
    this.tarefas.update(tarefas =>
      tarefas.map((tarefa, i) =>
        i === index
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }
}
