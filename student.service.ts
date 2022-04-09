import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  /*getStudent(id: number) {
    throw new Error('Method not implemented.');
  }
  updateStudent(student: Student) {
    throw new Error('Method not implemented.');
  }*/

  private baseURL = "http://localhost:8081/api/v1/students";

  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`)
  }

  createStudent(student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

 deleteStudent(id: number): Observable<Object>{
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }

 updateStudent(id: number, student: Student): Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`, student);
 }
}
