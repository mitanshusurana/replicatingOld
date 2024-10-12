
import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MainLedgerComponent } from './masters/main-ledger/main-ledger.component';
import { SubLedgerComponent } from './masters/sub-ledger/sub-ledger.component';
import { ProductNameComponent } from './masters/product-name/product-name.component';
import { OpeningBalanceComponent } from './masters/opening-balance/opening-balance.component';
import { SalePurchaseComponent } from './transaction/sale-purchase/sale-purchase.component';
import { ReceiptDeliveryComponent } from './transaction/receipt-delivery/receipt-delivery.component';
import { JournalComponent } from './transaction/journal/journal.component';
import { StockValuationComponent } from './transaction/stock-valuation/stock-valuation.component';
import { BookingCancellationComponent } from './transaction/booking-cancellation/booking-cancellation.component';
import { LedgerComponent } from './reports/ledger/ledger.component';
import { PartyBalanceComponent } from './reports/party-balance/party-balance.component';
import { StockComponent } from './reports/stock/stock.component';
import { DaybookComponent } from './reports/daybook/daybook.component';
import { UtilityComponent } from './utility/utility.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
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
