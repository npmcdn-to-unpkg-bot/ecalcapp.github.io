import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Router} from 'angular2/router';
import {TariffService} from './tariff.service';

import {ITariffSetting} from './tariffsetting.interface';
import {OnePhaseTariffSetting} from './settings/1phases.tariff';
import {TwoPhaseTariffSetting} from './settings/2phases.tariff';
import {ThreePhaseTariffSetting} from './settings/3phases.tariff';

@Component({
  selector: 'e-calc',
  templateUrl: 'ecalc/calc.component.html',
  styleUrls: ['ecalc/calc.component.css']
})
export class CalcComponent
{
    public counsumptions: number[] = [];
   
    constructor(private tariffService: TariffService)
    {  
        tariffService.phases.forEach(() => this.counsumptions.push(0));      
    }
    
    getCurrency()
    {
        return Math.floor(this.tariffService.calculate(this.counsumptions) / 100);
    }
    
    getCoins()
    {
        let payment = this.tariffService.calculate(this.counsumptions);
        return (payment - Math.floor(payment / 100) * 100);
    }
    getSetting(className: string)
    {  
        let setting: ITariffSetting;
        switch(className)
        {
            case 'OnePhaseTariffSetting':
                setting =  new OnePhaseTariffSetting();
                break;
            case 'TwoPhaseTariffSetting':
                setting = new TwoPhaseTariffSetting();
                break;
            case 'ThreePhaseTariffSetting':
                setting = new ThreePhaseTariffSetting();
                break;
            default:
                console.error('Unknown setting class');
        }
        this.counsumptions = [];
        setting.phases.forEach(() => this.counsumptions.push(0));
        return setting;
    }
}