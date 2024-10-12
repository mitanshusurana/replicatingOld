
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
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
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    MainLedgerComponent,
    SubLedgerComponent,
    ProductNameComponent,
    OpeningBalanceComponent,
    SalePurchaseComponent,
    ReceiptDeliveryComponent,
    JournalComponent,
    StockValuationComponent,
    BookingCancellationComponent,
    LedgerComponent,
    PartyBalanceComponent,
    StockComponent,
    DaybookComponent,
    UtilityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
