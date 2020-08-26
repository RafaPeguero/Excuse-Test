import { TestBed } from '@angular/core/testing';

import { ExcusesServiceService } from './excuses-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BASEURL, APIURL } from '../shared/url';
import { Excuse } from '../shared/Models/excuses.model';
let httpTestingController: HttpTestingController;
let service: ExcusesServiceService;
describe('ExcusesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,        
        BrowserAnimationsModule,
      ],
      providers: [
        ExcusesServiceService
      ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ExcusesServiceService);
    }  
  );

  it('should be created', () => {
    const service: ExcusesServiceService = TestBed.get(ExcusesServiceService);
    expect(service).toBeTruthy();
  });

  it('GetlAllExcuses', () => {
    let url = APIURL.Excuses.GetAllExcuses;
    service.GetExcuses().subscribe();
    let req = httpTestingController.expectOne(url);
    req.flush([]);
    httpTestingController.verify();
  });

  it('GetExcuse', () => {
    let url = APIURL.Excuses.GetExcuse + 1;
    service.GetExcuse(1).subscribe();
    let req = httpTestingController.expectOne(url);
    req.flush([]);
    httpTestingController.verify();
  });
  it('PostExcuse', () => {
    let url = APIURL.Excuses.PostExcuse;
    let params:Excuse = {
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 1,
      employee_Date:new Date('2020-0825')
    }
    service.PostExcuse(params).subscribe();
    let req = httpTestingController.expectOne(url);
    req.flush([]);
    httpTestingController.verify();
  });
  it('PutExcuse', () => {
    let url = APIURL.Excuses.PutExcuse + 2;
    let params:Excuse = {
      id:2,
      employee_Name: 'Prueba',
      employee_LastName: 'prueba2',
      excuseTypeId: 1,
      employee_Date:new Date('2020-0825')
    }
    service.PutExcuse(2,params).subscribe();
    let req = httpTestingController.expectOne(url);
    req.flush([]);
    httpTestingController.verify();
  });
  it('DeleteExcuse', () => {
    let url = APIURL.Excuses.DeleteExcuse + 2;
    service.DeleteExcuse(2).subscribe();
    let req = httpTestingController.expectOne(url);
    req.flush([]);
    httpTestingController.verify();
  });
});
