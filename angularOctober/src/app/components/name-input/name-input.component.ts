import { Component } from '@angular/core';

@Component({
  selector: 'app-name-input',
  standalone: true,
  imports: [],
  templateUrl: './name-input.component.html',
  styleUrl: './name-input.component.scss'
})
export class NameInputComponent {
  private inputValue = '';

  onKey($event: KeyboardEvent) {
    this.inputValue = ($event.target as HTMLInputElement).value;
  }

  onEnter() {
    console.log('enter pressed', this.inputValue);
  }
}
