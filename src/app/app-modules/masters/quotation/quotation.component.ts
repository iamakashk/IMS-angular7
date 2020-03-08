import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  quoteMasterForm = this.fb.group({
    quoteNo:["",[Validators.required]],
    partyCode:["",[Validators.required]],
    partyName:["",[Validators.required]],
    partyTelephone:["",[Validators.required]],
    hireDays:["",[Validators.required]],
    hireMonths:["",[Validators.required]]
  })
  constructor( private fb: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
  }

}
