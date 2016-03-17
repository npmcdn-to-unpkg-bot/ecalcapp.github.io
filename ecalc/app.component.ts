import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CalcComponent} from './calc.component';
import {TariffComponent} from './tariff.component';
import {TariffService} from './tariff.service';

import {enableProdMode} from 'angular2/core';
enableProdMode();

@Component({
  selector: 'ecalc-app',
  templateUrl: 'ecalc/app.component.html',
  styleUrls: ['ecalc/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [TariffService]
})
@RouteConfig([
  {path: '/',       name: 'Calc',       component: CalcComponent,   useAsDefault: true},
  {path: '/settings',     name: 'Tariff',     component: TariffComponent}
])
export class AppComponent 
{
    constructor(public tariffService: TariffService)
    {
    }
}
