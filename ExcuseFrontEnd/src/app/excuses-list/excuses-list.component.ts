import { Component, OnInit, ElementRef } from '@angular/core';
import { ExcusesServiceService } from '../Services/excuses-service.service';
import { Excuse } from '../shared/Models/excuses.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { element } from 'protractor';
import { tick } from '@angular/core/testing';


@Component({
  selector: 'app-excuses-list',
  templateUrl: './excuses-list.component.html'
})
export class ExcusesListComponent implements OnInit {
  public Excuses: Excuse[] = [];
  public ExcusesForm: FormGroup;
  public FormIsInvalid: boolean = false;
  public SelectedExcuseId: number;
  constructor(public _ExcusesService: ExcusesServiceService,
               private readonly formBuilder: FormBuilder  ) { }

  ngOnInit() {
    this.CreateFormExcuses();
    this.getAllExcuses();
  }

  CreateFormExcuses() {
    this.ExcusesForm = this.formBuilder.group({
      id: [0],
      employee_Name: [null, Validators.required],
      employee_LastName: [null, Validators.required],
      employee_Date:[null, Validators.required],
      excuseTypeId: [null, Validators.required]
    })
  }

  getAllExcuses() {
    this._ExcusesService.GetExcuses().subscribe( (res: Excuse[]) => {
      this.Excuses = res as Excuse[];
    })
  }

  LoadExcuseData(id: number) {
    this._ExcusesService.GetExcuse(id).subscribe((res: Excuse) => {
     this.ExcusesForm.patchValue({
      id: res.id,
      employee_Name: res.employee_Name, 
      employee_LastName: res.employee_LastName,
      employee_Date: this.formatDate(res.employee_Date),
      excuseTypeId: res.excuseTypeId
     })
    })
  }

  Submit() {

    if(this.ExcusesForm.invalid){
      this.FormIsInvalid = true;
      return
    } else {
      this.FormIsInvalid = false;
    }
    let Value = this.ExcusesForm.value;
    let params: Excuse = {
      id: Value.id ,
      employee_Name: Value.employee_Name,
      employee_LastName: Value.employee_LastName,
      employee_Date: Value.employee_Date,
      excuseTypeId: Value.excuseTypeId
    }

    this.ExcusesForm.value.id > 0? this.PutExcuse(Value.id,params): this.PostExcuse(params);

  }

  PostExcuse(params: Excuse) {
    params.id = 0;
    this._ExcusesService.PostExcuse(params).subscribe(resp => {
      this.CompleteRegister();
    });
  }

  PutExcuse(id:number, params:Excuse) {

    this._ExcusesService.PutExcuse(params.id,params).subscribe(res => {
      this.CompleteRegister();
    });
  }

  DeleteExcuse() {
    this._ExcusesService.DeleteExcuse(this.SelectedExcuseId).subscribe( res => {
     this.getAllExcuses();
    })
  }


  CompleteRegister() {
    this.getAllExcuses();
    this.resetForm();

  }

  
  private formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

  resetForm() {
    this.ExcusesForm.reset();
    this.FormIsInvalid = false;
  }

}
