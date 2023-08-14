import { EventEmitter } from "@angular/core";
export class Emitters{
    static authEmitters = new EventEmitter<boolean>()//transfer boolen value from one commponent to other componenet
}