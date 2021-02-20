import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SolutionProposal} from '../model/solution-proposal';
import {SolutionResult} from '../model/solution-result';
import { AppConfigService } from './app-config.service';
import {EscapeRoom} from '../model/escape-room';

@Injectable({
  providedIn: 'root'
})
export class SolutionAPIService {

  //private solutionProposalURL: string;
  private servicesBaseUrl: string;

  constructor(private environment: AppConfigService, private http: HttpClient) {
    // this.solutionProposalURL = 'http://139.59.144.247:8080/solutionProposal';
    //this.solutionProposalURL = environment.config.solutionProposalURL;
    this.servicesBaseUrl = environment.config.servicesBaseUrl;

  }

  public proposeSolution(solutionProposal: SolutionProposal) {
    return this.http.post<SolutionResult>(this.servicesBaseUrl + 'solutionProposal', solutionProposal);
  }

  public initEscapeRoom() {
    return this.http.get<EscapeRoom>(this.servicesBaseUrl + 'initEscapeRoom');
  }

}
