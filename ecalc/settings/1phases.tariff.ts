import {ITariffSetting} from './tariffsetting.interface';

export class OnePhaseTariffSetting implements ITariffSetting
{
    public phases: Phase = [{ 'title': 'Сутки', 'factor': 1 }];
    public tariffs = [{ 'v': 71.4 }, { 'v': 100 }, { 'v': 129 }, { 'v': 600 }, { 'v': 163.8 }]; //[cost, limit, cost, limit, cost]
}