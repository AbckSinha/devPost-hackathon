import { Injectable } from '@angular/core';
import { HttpService } from '../utility/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService extends HttpService {
  // Function for getting personal details dropdown data service call
  // public getPersonalDetailsData(): Observable<PersonalDetails> {
  //   const response = this.http.get<PersonalDetails>(environment.baseURL + 'finance/personal');
  //   return response;
  // }

}
