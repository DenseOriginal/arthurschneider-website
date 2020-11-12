import { Injectable } from '@angular/core';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { BehaviorSubject } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatSpinner } from '@angular/material/progress-spinner';


@Injectable()
export class LoadingService {
  // Sets initial value to true to show loading spinner on first load
  private loading$_ = new BehaviorSubject(true);
  public loading$ = this.loading$_.asObservable();
  private spinnerTopRef = this.cdkSpinnerCreate();

  constructor(private router: Router, private overlay: Overlay) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });

    this.loading$_.subscribe(isLoading => {
      if (isLoading) {
        this.spinnerTopRef.hasAttached() ? null : this.showSpinner();
      } else {
        this.spinnerTopRef.hasAttached() ? this.stopSpinner() : null;
      }
    });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading$_.next(true)
    }
    if (event instanceof NavigationEnd) {
      this.loading$_.next(false)
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading$_.next(false)
    }
    if (event instanceof NavigationError) {
      this.loading$_.next(false)
    }
  }

  private cdkSpinnerCreate() {
    return this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically()
    })
  }

  private showSpinner() {
    this.spinnerTopRef.attach(new ComponentPortal(MatSpinner))
  }

  private stopSpinner() {
    this.spinnerTopRef.detach();
  }
}
