import {ITariffSetting} from './tariffsetting.interface';

export class ThreePhaseTariffSetting implements ITariffSetting
{
    public phases: Phase = [{ 'title': 'Ночь', 'factor': 0.4 },
            { 'title': 'Полупиковый', 'factor': 1 }, 
            { 'title': 'Пиковый', 'factor': 1.5 }];
    public tariffs = [{ 'v': 57 }, { 'v': 100 }, { 'v': 99 }, { 'v': 600 }, { 'v': 156 }]; //[cost, limit, cost, limit, cost]
}