import { Component, OnInit } from '@angular/core';
import {Cours} from '../../model/Cours';
import {Exchanges} from '../../model/Exchanges';
import {CoincapService} from '../../services/coincap/coincap.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public cours: Cours[];
  public cour: Cours;
  private coursLoading: boolean = true;
  public Exchanges: Exchanges[];
  public Exchange: Exchanges;

  constructor(
    private coincapService: CoincapService,
  ) { }

  ngOnInit(): void {
    this.getCours();
    this.getExchanges();
  }

  private getCour(id: string): void {
    this.coincapService.getCoursId(id).subscribe(resp => {
      if (resp.status === 200) {
        this.cour = resp.body;
      } else {
        this.coursLoading = false;
      }
    });
  }

  private getCours(): void {
    this.coincapService.getCours().subscribe(resp => {
      if (resp.status === 200) {
        this.cours = resp.body;
      } else {
        this.coursLoading = false;
      }
    });
  }

  private getExchanges(): void {
    this.coincapService.getExchanges().subscribe((resp: HttpResponse<Exchanges[]>) => {
      if (resp.status === 200) {
        this.Exchanges = resp.body;
        this.Exchanges.sort((a, b) => b.volumeUsd - a.volumeUsd);
      } else {
        this.coursLoading = false;
      }
    });
  }

}
