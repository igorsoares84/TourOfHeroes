import { DialogData } from './../../models/dialog-data.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{

  /* INJECT SEGUINDO A DOCUMENTAÇÃO DO DIALOG NO ANGULAR MATERIAL*/

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }


}
