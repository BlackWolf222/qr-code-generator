import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Qr } from './qr/qr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, Qr],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  qrInput: string = '';
  qrData: string = '';

  generateQR() {
    this.qrData = this.qrInput;
  }

  downloadQR() {
    const qrImg: HTMLImageElement | null = document.querySelector('app-qr img');
    if (qrImg && qrImg.src) {
      const link = document.createElement('a');
      link.href = qrImg.src;
      link.download = 'qr-code.png';
      link.click();
    } else {
      const qrCanvas: HTMLCanvasElement | null = document.querySelector('app-qr canvas');
      if (qrCanvas) {
        const link = document.createElement('a');
        link.href = qrCanvas.toDataURL('image/png');
        link.download = 'qr-code.png';
        link.click();
      }
    }
  }
}
