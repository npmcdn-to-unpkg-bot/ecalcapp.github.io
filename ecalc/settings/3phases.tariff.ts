import {ITariffSetting} from './tariffsetting.interface';

export class ThreePhaseTariffSetting implements ITariffSetting
{
    public phases: Phase = [{ 'title': 'Ночь', 'factor': 0.4 },
            { 'title': 'Полупиковый', 'factor': 1 }, 
            { 'title': 'Пиковый', 'factor': 1.5 }];
    public tariffs = [{ 'v': 71.4 }, { 'v': 100 }, { 'v': 129 }, { 'v': 600 }, { 'v': 163.8 }]; //[cost, limit, cost, limit, cost]
}