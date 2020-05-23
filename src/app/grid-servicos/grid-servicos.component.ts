import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalServiceComponent } from '../modal-service/modal-service.component';

@Component({
  selector: 'app-grid-servicos',
  templateUrl: './grid-servicos.component.html',
  styleUrls: ['./grid-servicos.component.css']
})
export class GridServicosComponent implements OnInit {

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
