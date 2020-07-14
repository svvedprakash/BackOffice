import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { EnrollmentService } from '../enrollment.service';
import { Enrollment } from '../enrollment.model';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: any;
  
  constructor(private trainingService: EnrollmentService, private formBuilder: FormBuilder) { }
  x
  public enrollments = new MatTableDataSource<Enrollment>();

  public enrollmentColumns: string[] = ['selector', 'partyId',  'firstName', 'lastName', 'clearingType', 
                                      'createdDate', 'lastUpdateDate'];

  public filterColumns: any[] = [{ name: 'All', value: "" }, { name: 'Party Id', value: "partyId" },
  { name: 'First Name', value: "firstName" }, { name: 'Last Name', value: "lastName" },
  { name: 'Clearing Type', value: "clearingType" }, { name: 'Created Date', value: "createdDate" },
  { name: 'Last Update Date', value: "lastUpdateDate" }];

  public entrollementFormGroup : FormGroup;

  ngOnInit(): void {
    const enrollmentsList = this.trainingService.getEnrollmentHistory();
    this.enrollments.data = enrollmentsList;
    const records = [];
    for(let i=0; i < enrollmentsList.length; i++)
    {
      records.push(this.formBuilder.control(false));
    }
    this.entrollementFormGroup = new FormGroup({
      columnFilter: new FormControl(''),
      rows : this.formBuilder.array(records)
    });
  }

  ngAfterViewInit(): void {
    this.enrollments.sort = this.sort;
    this.enrollments.paginator = this.paginator;
  }

  onSearch = (value: string) => {    
    this.enrollments.filter = value.trim().toLowerCase();    
  }

  onColumnChange = () => {
    const value = this.entrollementFormGroup.controls.columnFilter.value;
    console.log(this.enrollments.filterPredicate);
     this.enrollments.filterPredicate = function(data, filter: string): boolean { 
       if (value === "") {
         {
           const dataStr = Object.keys(data).reduce((
             (currentTerm, key) => {
               return currentTerm + (data)[key] + '◬';
             }), '').toLowerCase();
           const transformedFilter = filter.trim().toLowerCase();
           return dataStr.indexOf(transformedFilter) != -1;
         };
       }      
      return data[value].toString().toLowerCase().includes(filter);
    };
  }

  onSubmit = () => {
    const length = this.entrollementFormGroup.controls.rows.value.length;
    const recordIds = [];
    for(let i=0; i < length; i++){
      if(this.entrollementFormGroup.controls.rows.value[i] === true) {
        recordIds.push(this.enrollments.data[i].partyId);
      }
    }
    console.log(recordIds);
  }
}