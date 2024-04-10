import { Component, OnInit } from '@angular/core';
import {Cours} from '../../model/Cours';
import {Exchanges} from '../../model/Exchanges';
import {CoincapService} from '../../services/coincap/coincap.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cours: Cours[];
  cour: Cours;
  coursLoading: Boolean = true;
  bestExchanges: Exchanges[];

  constructor(
    private coincapService: CoincapService,
  ) { }

  ngOnInit(): void {
    this.getCours('bitcoin');
    this.getCours('dogecoin');
    this.getCours('ethereum');
    this.getExchanges();
  }

  private getCours(id: string): void {
    this.coincapService.getCoursId(id).subscribe(resp => {
      if (resp.status === 200) {
        this.cour = resp.body;
      } else {
        this.coursLoading = false;
      }
    });
  }

  private getExchanges(): void {
    this.coincapService.getexchanges().subscribe(resp => {
      if (resp.status === 200) {
        this.bestExchanges = resp.body;
      } else {
        this.coursLoading = false;
      }
    });
  }

}
