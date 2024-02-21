import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'softlab-frontend-assessment';

  constructor(public breakpointObserver: BreakpointObserver) {}

//   ngOnInit(): void {
    
// console.log('Web ' + Breakpoints.Web);
// console.log('WebLandscape ' + Breakpoints.WebLandscape);
// console.log('WebPortrait ' + Breakpoints.WebPortrait);

// console.log('Tablet ' + Breakpoints.Tablet);
// console.log('TabletPortrait ' + Breakpoints.TabletPortrait);
// console.log('TabletLandscape ' + Breakpoints.TabletLandscape);

// console.log('Handset ' + Breakpoints.Handset);
// console.log('HandsetLandscape ' + Breakpoints.HandsetLandscape);
// console.log('HandsetPortrait ' + Breakpoints.HandsetPortrait);

// console.log('XSmall ' + Breakpoints.XSmall);
// console.log('Small ' + Breakpoints.Small);
// console.log('Medium ' + Breakpoints.Medium);
// console.log('Large ' + Breakpoints.Large);
// console.log('XLarge ' + Breakpoints.XLarge);
// console.log(breakpointObserver.isMatched('(max-width: 599px)'));
//   }

  ngOnInit(): void {
    console.log(Breakpoints)
    this.breakpointObserver
    .observe([Breakpoints.Web ])
    .subscribe((state: BreakpointState) => {
      console.log(state)
      if (state.matches) {
        console.log('Viewport width is 500px or greater!');
        alert('this is  web ')
      } else {
        console.log('Viewport width is less than 500px!');
        alert('this is a mobile')
      }
    });
  }
}
