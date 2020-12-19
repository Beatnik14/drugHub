import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrugModel } from '../models/drug.model';

@Injectable({
  providedIn: 'root'
})
export class DrugServiceService {

  constructor(private http: HttpClient) { }

  getDrugs(): Observable <Array<DrugModel>>{
    return this.http.get<Array<DrugModel>>('http://localhost:3000/drugs');
  }


  // editTodo(todo: TodoModel): Observable<TodoModel>{
  //   return this.http.put<TodoModel>(`http://localhost:3000/todos/${todo.id}`,todo);
  // }

  // deleteTodo(id: number | string){
  //   return this.http.delete<TodoModel>(`http://localhost:3000/todos/${id}`);
  // }

  addDrug(drug){
    return this.http.post('http://localhost:3000/drugs',drug);
  }

}
