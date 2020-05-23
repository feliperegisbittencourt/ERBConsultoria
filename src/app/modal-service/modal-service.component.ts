import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServicosServiceService } from '../servicos-service.service';


@Component({
  selector: 'app-modal-service',
  templateUrl: './modal-service.component.html',
  styleUrls: ['./modal-service.component.css']
})
export class ModalServiceComponent implements OnInit {

  message$ = undefined;
  

  constructor(public dialogRef: MatDialogRef<ModalServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private servicoService: ServicosServiceService) {
      console.log(data.id);
      this.message$ = this.servicoService.listDataService().subscribe(
        x => this.message$ =x
        );
     }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
    delete this.dialogRef;
  }

}
