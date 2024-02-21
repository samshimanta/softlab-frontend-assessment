import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent {
  hide = true;
}
