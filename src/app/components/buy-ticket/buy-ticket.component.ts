import { Component, OnInit } from '@angular/core';
import {CoincapService} from '../../services/coincap/coincap.service';
import {Cours} from '../../model/Cours';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.scss']
})
export class BuyTicketComponent implements OnInit {

  numberTickets: number = 1;
  prixTicket: number = 4;
  reduction: number = 0.05;
  messageBuy: string = '';
  prixDoge: number;
  cours: Cours[];
  cour: Cours;
  coursLoading: boolean = true;
  prixTotal: number;
  prixReduit: number;
  constructor(
    private coincapService: CoincapService,
  ) { }

  ngOnInit(): void {
    this.getCours('dogecoin');
  }

  buyTickets(): void {
     this.prixTotal = this.numberTickets * this.prixTicket;
     this.prixReduit = this.prixTotal;

     if (this.numberTickets >= 2) {
      this.prixReduit = this.prixTotal - (this.prixTotal * this.reduction);
    }

     this.prixDoge = this.prixTotal * this.cour['data'].priceUsd;
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

}
