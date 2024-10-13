import { Component, HostBinding, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalePurchaseComponent } from '../transaction/sale-purchase/sale-purchase.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html', // Use the external template file
  styleUrls: ['./navigation.component.scss'], // Corrected to styleUrls
  standalone: true,
  imports: [RouterOutlet,SalePurchaseComponent],
})
export class NavigationComponent {
  @HostBinding('class.active') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
