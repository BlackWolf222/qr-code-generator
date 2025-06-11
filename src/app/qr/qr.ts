import { Component, Input } from '@angular/core';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [QRCodeComponent],
  templateUrl: './qr.html',
  styleUrl: './qr.css'
})
export class Qr {
  @Input() data: string = 'https://example.com';
  @Input() size: number = 256;
  @Input() errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M';
}
