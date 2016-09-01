import {Injectable} from 'angular2/core';
import {Phase} from './phase';

export class TariffService 
{
    public phases: Phase = [];
    public tariffs = []; //[cost, limit, cost, limit, cost]

    constructor()
     {
        this.phases = [{ 'title': 'Ночь', 'factor': 0.5 },
            { 'title': 'День', 'factor': 1 }];
        this.tariffs = [{ 'v': 71.4 }, { 'v': 100 }, { 'v': 129 }, { 'v': 600 }, { 'v': 163.8 }];
    }
    calculate(consumptionList: number[]) {
        let consumptionSum = consumptionList.reduce((prev, phase) => prev + phase);
        if(consumptionSum == 0)
        {
            return 0;
        }       
        let consumptionsRates = Array.from(consumptionList, consumption => consumption / consumptionSum);
        let prevLimit = 0;
        let payment = 0;
        if (this.tariffs.length == 1) 
        {
             consumptionsRates.forEach((rate, i) => payment += consumptionSum * this.tariffs[this.tariffs.length-1] * rate * this.phases[i].factor);
        }
        else 
        {
            for (let limitIdx = 1; limitIdx < this.tariffs.length && consumptionSum > this.tariffs[limitIdx].v; limitIdx += 2, prevLimit = this.tariffs[limitIdx - 2].v) 
            {
                consumptionsRates.forEach((rate, i) => payment += (this.tariffs[limitIdx].v - prevLimit) * rate * this.tariffs[limitIdx - 1].v * this.phases[i].factor);
            }
            consumptionsRates.forEach((rate, i) => payment += (consumptionSum - prevLimit) * rate * this.tariffs[limitIdx - 1].v * this.phases[i].factor);
        }
        return Math.round(payment);
    }

    removePhase(idx) 
    {
        if(this.phases.length > 1)
        {
            this.phases.splice(idx, 1);
        }   
    }
    addPhase() 
    {
        this.phases.push({ 'title': 'Новая зона', 'factor': 1 });
    }
    removeLimit(idx)
    {
        this.tariffs.splice(idx * 2, 2);
    }
    addLimit()
    {
        if(this.tariffs.length > 1)
        {
            this.tariffs.push({'v': this.tariffs[this.tariffs.length-2].v+1});
            this.tariffs.push({'v': 0});
        }
        else
        {
            this.tariffs.unshift({'v': 0}, {'v': 100});
        }
    }
    applySetting(setting: ITariffSetting)
    {
        this.phases = setting.phases;
        this.tariffs = setting.tariffs;
    }
}
