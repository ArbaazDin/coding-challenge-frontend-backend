import { Injectable } from '@angular/core';
import { LordOfTheRingsCommunicationService } from './lord-of-the-rings-communication.service';

@Injectable({
  providedIn: 'root'
})
export class LordOfTheRingsLogicService {

  constructor(private lordOfTheRingsCommunicationService:LordOfTheRingsCommunicationService) { }

  async fetchAllCharacters():Promise<any> {
    try {
      const response: any = await this.lordOfTheRingsCommunicationService.fetchAllCharacters();
      
      if(response.status === "SUCCESS" ) {
        return response.data.docs;
      } else {
        alert(response.message);
        return [];
      }
    } catch (error:any) {
      alert(error.message);
    }
  }
}
