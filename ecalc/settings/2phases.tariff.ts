import {ITariffSetting} from './tariffsetting.interface';

export class TwoPhaseTariffSetting implements ITariffSetting
{
    public phases: Phase = [{ 'title': 'Ночь', 'factor': 0.5 },
            { 'title': 'День', 'factor': 1 }];
    public tariffs = [{ 'v': 57 }, { 'v': 100 }, { 'v': 99 }, { 'v': 600 }, { 'v': 156 }]; //[cost, limit, cost, limit, cost]
}