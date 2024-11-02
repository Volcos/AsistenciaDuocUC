import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //le pasamos la url del server de la api, pdt /send-email es lo que estaba al comienzo de la función para enviar los email
  private apiUrl = 'http://localhost:3000/send-email'
  constructor(private http : HttpClient) {}
  
  //aqui se enviaa la solicitud con los datos
  enviarCorreo(to:string, subject: string, htmlContent: string){
    return this.http.post(this.apiUrl, {to, subject, htmlContent});
  }

}
