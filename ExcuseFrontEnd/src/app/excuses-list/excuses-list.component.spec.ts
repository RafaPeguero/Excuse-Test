import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcusesListComponent } from './excuses-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExcusesServiceService } from '../Services/excuses-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { Excuse } from '../shared/Models/excuses.model';

describe('ExcusesListComponent', () => {
  let component: ExcusesListComponent;
  let fixture: ComponentFixture<ExcusesListComponent>;
  let mockExcusesService = jasmine.createSpyObj(['GetExcuses', 'GetExcuse','PostExcuse','PutExcuse','DeleteExcuse','GetAllExcusesTypes']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcusesListComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [  { provide: ExcusesServiceService, useValue: mockExcusesService },]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcusesListComponent);
    component = fixture.componentInstance;

    mockExcusesService.GetExcuses.and.returnValue(of(
      [{
      id: 1,
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 1,
      employee_Date:'2020-09-15',
      excuseType: {
        id: 1,
        description: 'enfermedad'
      }
      },
      {
        id: 2,
        employee_Name: 'Prueba1',
        employee_LastName: 'prueba3',
        excuseTypeId: 2,
        employee_Date:'2020-09-15',
        excuseType: {
          id: 2,
          description: 'salud'
        }
        },
        {
          id: 2,
          employee_Name: 'Prueb2',
          employee_LastName: 'prueba4',
          excuseTypeId: 3,
          employee_Date:'2020-09-15',
          excuseType: {
            id: 3,
            description: 'academico'
          }
          },
          
        ]
    ));
    mockExcusesService.GetExcuse.and.returnValue(of(
      {
      id: 1,
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 1,
      employee_Date:'2020-09-15',
      excuseType: {
        id: 1,
        description: 'enfermedad'
      }
      },
        
    ));

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcusesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call GetExcuses Method when the component start', () => {
    spyOn(component, 'getAllExcuses');
    component.getAllExcuses();
    expect(component.getAllExcuses).toHaveBeenCalled();
  });

  it('Should call LoadExcuse Method when the button edit is clicked', () => {
    component.getAllExcuses();
    let EditButton = fixture.debugElement.query(By.css('button[value="Editbtn"]'))
    fixture.detectChanges(); 
    EditButton.triggerEventHandler('click', null);
    spyOn(component, 'LoadExcuseData');
    component.LoadExcuseData(1);
    expect(component.LoadExcuseData).toHaveBeenCalled();
    expect(component.ExcusesForm.get('id').value).toBe(1);
    expect(component.ExcusesForm.get('employee_Name').value).toBe('Prueba');
    expect(component.ExcusesForm.get('employee_LastName').value).toBe('prueba2');
    expect(component.ExcusesForm.get('employee_Date').value).toBe('2020-09-14');
    expect(component.ExcusesForm.get('excuseTypeId').value).toBe(1);

  });

  it('Should call Submit method and PutExcuse Method when the button Guardar is clicked', () => {
    let EditButton = fixture.debugElement.query(By.css('button[value="submit"]'))
    fixture.detectChanges(); 
    EditButton.triggerEventHandler('click', null);
    spyOn(component, 'Submit');
    spyOn(component, 'PutExcuse');
    let params: Excuse = {
      id: 5,
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 3,
      employee_Date:new Date('2020-09-15'),
    };
    component.ExcusesForm.patchValue({
      id: params.id,
      employee_Name: params.employee_Name,
      employee_LastName: params.employee_LastName,
      excuseTypeId: params.excuseTypeId,
      employee_Date:params.employee_Date,
    });
    component.Submit();
    component.PutExcuse(params.id, params);
    expect(component.FormIsInvalid).toBe(true);
    expect(component.PutExcuse).toHaveBeenCalled();

  });

  it('Should call Submit method and Post Method when the button Guardar is clicked', () => {
    let EditButton = fixture.debugElement.query(By.css('button[value="submit"]'))
    fixture.detectChanges(); 
    EditButton.triggerEventHandler('click', null);
    spyOn(component, 'Submit');
    spyOn(component, 'PostExcuse');
    let params: Excuse = {
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 3,
      employee_Date:new Date('2020-09-15'),
    };
    component.ExcusesForm.patchValue({
      id: 0,
      employee_Name: params.employee_Name,
      employee_LastName: params.employee_LastName,
      excuseTypeId: params.excuseTypeId,
      employee_Date:params.employee_Date,
    });
    component.Submit();
    component.PostExcuse(params);
    expect(component.FormIsInvalid).toBe(true);
    expect(component.PostExcuse).toHaveBeenCalled();

  });

  it('Should call CompleteRegister method when PostExcuse methos is called', () => {

    spyOn(component, 'PostExcuse');
    spyOn(component, 'CompleteRegister');
    let params: Excuse = {
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 3,
      employee_Date:new Date('2020-09-15'),
    };
    component.PostExcuse(params);
    component.CompleteRegister();
    expect(component.CompleteRegister).toHaveBeenCalled();

  });

  it('Should call CompleteRegister method when PutExcuse methos is called', () => {

    spyOn(component, 'PutExcuse');
    spyOn(component, 'CompleteRegister');
    let params: Excuse = {
      id:1,
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 3,
      employee_Date:new Date('2020-09-15'),
    };
    component.PutExcuse(params.id, params);
    component.CompleteRegister();
    expect(component.CompleteRegister).toHaveBeenCalled();

  });

});
