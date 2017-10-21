import { Component, OnInit } from '@angular/core';
import { Pin } from './pin/pin.model';
import { PinService } from './pin/pin.service';

@Component({
  selector: 'pin-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css'],
  providers: [ PinService ]
})

export class PinController implements OnInit {
  constructor (private pinService: PinService) {}
  errorMessage: string;
  ngOnInit() { this.getPins(); };
  pins: Pin[];
  isConnected = false;
  sortingOrder = "ID";
  getPins(): void {
    this.pinService.getAllPins()
      .then((pins) => {
        this.pins = pins;
        this.isConnected = true;
      });
  };
}
