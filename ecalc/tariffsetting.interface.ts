import {Injectable} from 'angular2/core';
import {Phase} from './phase';

export interface ITariffSetting
{
    phases: Phase = [];
    tariffs = []; //[cost, limit, cost, limit, cost]
}