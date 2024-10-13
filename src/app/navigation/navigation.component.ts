import { Component ,HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  @HostBinding('class.active') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
