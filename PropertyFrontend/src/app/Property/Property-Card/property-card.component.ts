import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from '@angular/core';

@Component({
  selector:'app-Property-Card',
  //template: ``,
  templateUrl:'property-card.component.html',
  //styles: ['']
  styleUrls:['property-card.component.css']
})
export class PropertyCardComponent{
  Property: any ={
    "Id":1,
    "Name":"Villa House",
    "Type":"House",
    "Price":12000
  }
}
