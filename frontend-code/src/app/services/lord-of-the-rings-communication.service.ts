import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LordOfTheRingsCommunicationService {

  devServerUrl = "http://localhost:3000";
  prodServerUrl = "http://54.193.101.230:3000";

  // This token has to be fetched from the cookie. 
  // As there is no login, hence jwt is hardcoded.
  token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJhcmJhYXpkaW5AZ21haWwuY29tIiwidHlwZSI6IlVTRVIiLCJlbWFpbCI6ImFyYmFhemRpbkBnbWFpbC5jb20iLCJpYXQiOjE2NDI5NTM0MDEsImV4cCI6MTY0NTU0NTQwMX0.Hxh9jGvXZHNNcda6eQp6bVRV4NzXyMA91JaiuBPPTnM";

  // Switching urls betweem prod and dev
  getServerUrl() {
    // return this.devServerUrl;
    return this.prodServerUrl;
  }

  constructor(private http: HttpClient) { }

  public fetchAllCharacters(): Promise<any> {
    try {
      // Sending the jwt token in headers
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      });

      return this.http.get(`${this.getServerUrl()}/user/character`, { headers }).toPromise();
    } catch (error:any) {
      return error;
    }
  }
}
