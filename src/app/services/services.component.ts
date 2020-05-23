import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalServiceComponent } from '../modal-service/modal-service.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  OpenModal(value){
    const dialogRef = this.dialog.open(
      ModalServiceComponent, {
        width: '75vw',
        data: {
          id: value
        }
      }
    )
  }
}
