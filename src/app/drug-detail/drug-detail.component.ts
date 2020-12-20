import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DrugServiceService } from '../services/drug-service.service';

@Component({
  selector: 'app-drug-detail',
  templateUrl: './drug-detail.component.html',
  styleUrls: ['./drug-detail.component.css']
})
export class DrugDetailComponent implements OnInit {
  drug;
  drugs = [];
  drugFromApi;
  constructor(private route: ActivatedRoute, private drugService: DrugServiceService) { }

  ngOnInit(): void {
    this.drug = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    }
    this.route.params
      .subscribe(
        (params: Params) => {
          this.drug.id = params['id'];
          this.drug.name = params['name'];
        }
      )
    this.drugService.getDrugs()
      .subscribe((data) => {
        this.drugs = data
        for (let index = 0; index < data.length; index++) {

          if (this.drugs[index].name == this.drug.name) {
            this.drugFromApi = this.drugs[index]
          }
        }
        console.log(this.drugFromApi)
      })
    
  }

}
