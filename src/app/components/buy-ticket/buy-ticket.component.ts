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
  coursLoading: Boolean = true;

  constructor(
    private coincapService: CoincapService,
  ) { }

  ngOnInit(): void {
    this.getCours('dogecoin');
  }

  buyTickets(): void {
    const prixTotal = this.numberTickets * this.prixTicket;
    let prixReduit = prixTotal;

    if (this.numberTickets >= 2) {
      prixReduit = prixTotal - (prixTotal * this.reduction);
    }

    this.prixDoge = prixTotal * this.cour.priceUsd;

    this.messageBuy = `Vous avez acheté ${this.numberTickets} ticket(s) pour un prix total de $${prixTotal.toFixed(2)}
    soit ${this.prixDoge} Doge`;
    if (this.numberTickets >= 2) {
      this.messageBuy += `(avec une réduction de ${this.reduction * 100}%, prix réduit : $${prixReduit.toFixed(2)})`;
    }
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
