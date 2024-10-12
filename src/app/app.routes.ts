
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'masters/main-ledger', component: MainLedgerComponent },
      { path: 'masters/sub-ledger', component: SubLedgerComponent },
      { path: 'masters/product-name', component: ProductNameComponent },
      { path: 'masters/opening-balance', component: OpeningBalanceComponent },
      { path: 'transaction/sale-purchase', component: SalePurchaseComponent },
      { path: 'transaction/receipt-delivery', component: ReceiptDeliveryComponent },
      { path: 'transaction/journal', component: JournalComponent },
      { path: 'transaction/stock-valuation', component: StockValuationComponent },
      { path: 'transaction/booking-cancellation', component: BookingCancellationComponent },
      { path: 'reports/ledger', component: LedgerComponent },
      { path: 'reports/party-balance', component: PartyBalanceComponent },
      { path: 'reports/stock', component: StockComponent },
      { path: 'reports/daybook', component: DaybookComponent },
      { path: 'utility', component: UtilityComponent },
    ]
  },
  { path: '**', redirectTo: 'login' }
];
