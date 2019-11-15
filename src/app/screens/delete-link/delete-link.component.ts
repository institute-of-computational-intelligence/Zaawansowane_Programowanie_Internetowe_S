import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-link',
  templateUrl: './delete-link.component.html',
  styleUrls: ['./delete-link.component.scss']
})
export class DeleteLinkComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteLinkComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteRecord() {
    this.dialogRef.close(this.data.index);
  }

}
