import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-edit-link',
  templateUrl: './edit-link.component.html',
  styleUrls: ['./edit-link.component.scss']
})
export class EditLinkComponent implements OnInit {
  siteName;
  siteAddress;
  showError = false;

  constructor(public dialogRef: MatDialogRef<EditLinkComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  editRecord() {
    console.log(this.siteAddress);
    if (this.siteName && this.siteName != '' || this.siteAddress && this.siteAddress != '') {
      this.data.link['name'] = this.siteName;
      this.data.link['path'] = this.siteAddress;
      this.dialogRef.close(this.data);
    }
    else {
      this.showError = true;
    }
  }

}
