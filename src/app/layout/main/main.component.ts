import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class MainLayout implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(['(max-width: 600px)'])
    .pipe(pluck('matches'), shareReplay());

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}
