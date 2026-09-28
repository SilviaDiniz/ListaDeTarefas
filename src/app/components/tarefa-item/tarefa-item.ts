import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-tarefa-item',
  imports: [],
  templateUrl: './tarefa-item.html',
  styleUrl: './tarefa-item.css'
})
export class TarefaItem {

  texto = input.required<string>();

  concluida = input<boolean>(false);

  excluir = output<void>();

  concluir = output<void>();

  excluirTarefa() {
    this.excluir.emit();
  }

  concluirTarefa() {
    this.concluir.emit();
  }
}
