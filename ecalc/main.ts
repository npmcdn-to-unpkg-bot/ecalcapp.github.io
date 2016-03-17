import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './app.component';
import {TariffService} from './tariff.service';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  TariffService
]);