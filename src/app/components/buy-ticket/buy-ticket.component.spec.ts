import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BuyTicketComponent} from './buy-ticket.component';
import {HttpClientModule} from '@angular/common/http';

describe('BuyTicketComponent', () => {
  let component: BuyTicketComponent;
  let fixture: ComponentFixture<BuyTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BuyTicketComponent]
    });

    fixture = TestBed.createComponent(BuyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should compute price', () => {
      component.numberTickets = 2;
      component.prixTicket = 4;
      component.buyTickets();
      expect(component.prixTotal).toEqual(8);
    }
  );
});
