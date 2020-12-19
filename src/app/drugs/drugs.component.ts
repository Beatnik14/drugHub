import { Component, OnInit } from '@angular/core';
import { DrugServiceService } from '../services/drug-service.service';

@Component({
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrls: ['./drugs.component.css']
})
export class DrugsComponent implements OnInit {
  search;
  drugs = [];
  searchHistory = [];
  constructor(private drugsService: DrugServiceService) { }

  ngOnInit(): void {
    this.drugsService.getDrugs()
    .subscribe((data)=>{
      this.drugs = data
    })
    this.searchHistory.push(localStorage.getItem('1'))
    this.searchHistory.push(localStorage.getItem('2'))
    this.searchHistory.push(localStorage.getItem('3'))
  }
  onSearch(){
   console.log(this.search)
      if (this.search === "") {
        this.drugs = [];
        this.drugsService.getDrugs()
          .subscribe((data) => {
            this.drugs = data
            
          });
      } else {
        
        const filteredUsers = [];
        for (let i = 0; i < this.drugs.length; i++) {
          if (this.drugs[i].name.includes(this.search)) {
            filteredUsers.push(this.drugs[i])
          }
        }
        
        this.drugs = filteredUsers;
        let first = localStorage.getItem('1');
        localStorage.setItem('1', this.search)
        let second = localStorage.getItem('2');
  
        localStorage.setItem('2', first)
        localStorage.setItem('3', second)
        this.searchHistory = [];
        this.searchHistory.push(localStorage.getItem('1'))
        this.searchHistory.push(localStorage.getItem('2'))
        this.searchHistory.push(localStorage.getItem('3'))
      }
  
  }
}
