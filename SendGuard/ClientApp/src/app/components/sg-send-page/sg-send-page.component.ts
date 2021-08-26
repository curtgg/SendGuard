import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sg-send-page',
  templateUrl: './sg-send-page.component.html',
  styleUrls: ['./sg-send-page.component.css']
})
export class SgSendPageComponent implements OnInit, OnDestroy {

  currency: "ADA" | "SOL" | "ETH"; //Note: string type, can ONLY be these 3 
  subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.pipe(
      tap(params => this.currency = params['cur']),
      tap(params => console.log(this.currency))
    ).subscribe();
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}
