import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private fb: FormBuilder,
    private service: LiveService
    ) {}

  cancel(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

  createLive(){
    let newDate: moment.Moment = moment.utc(this.liveForm.value.liveDate).local();
    console.log(this.liveForm.value.liveDate);
    this.liveForm.value.liveDate = newDate.format("YYYY-MM-DD") + "T"+ this.liveForm.value.liveTime;
    //console.log(this.liveForm.value);
    this.service.postLives(this.liveForm.value).subscribe(result=>{});
    this.dialogRef.close();
    this.liveForm.reset();
  }

  ngOnInit(): void {  
    this.liveForm = this.fb.group({
      liveName: ['', Validators.required],
      channelName: ['', Validators.required],
      liveDate: ['', Validators.required],
      liveTime: ['', Validators.required],
      liveLink: ['', Validators.required],
      registrationDate: ['', Validators.required]
    });
  }

}
