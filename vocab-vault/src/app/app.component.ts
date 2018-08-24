import { Component } from '@angular/core';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { AudioService } from './audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  faVolumeUp = faVolumeUp;

  constructor(private audio: AudioService) { }

  instructionAudio(): void {
    this.audio.loadAndPlay('instruction');
  }

  helpAudio(): void {
    this.audio.loadAndPlay('help');
  }

  closeApp(): void {
    window.close(); 
  }
}
