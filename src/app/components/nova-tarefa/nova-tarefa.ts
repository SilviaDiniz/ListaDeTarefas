import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-tarefa',
  imports: [FormsModule],
  templateUrl: './nova-tarefa.html',
  styleUrl: './nova-tarefa.css'
})
export class NovaTarefa {
  tarefa = '';

  tarefaAdicionada = output<string>();

  adicionarTarefa() {
    if (this.tarefa.trim() === '') {
      return;
    }

    this.tarefaAdicionada.emit(this.tarefa.trim());
    this.tarefa = '';
  }
}
