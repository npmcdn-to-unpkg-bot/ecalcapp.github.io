import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {TariffService} from './tariff.service';

@Component({
  selector: 'tariff',
  templateUrl: 'ecalc/tariff.component.html',
  styleUrls: ['ecalc/tariff.component.css']
})
export class TariffComponent
{
    constructor(public tariffService: TariffService)
    {        
    }
    
    getLimits()
    {
        return this.tariffService.tariffs.filter((value, index) => index%2);
    }
}
