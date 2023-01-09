import { Component, ViewChild } from '@angular/core';
import { SpreadsheetComponent } from 
'@syncfusion/ej2-angular-spreadsheet';
import {InventoryList} from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangularproject';

  @ViewChild("spreadsheet")
  public ssObj: SpreadsheetComponent|undefined;

  public data:object = InventoryList;

  public onClick(){
    // this.ssObj?.removeInvalidHighlight();
    // this.ssObj?.removeDataValidation();
    // this.ssObj?.updateCell({ value: "A11011" }, "A3");
    // this.ssObj?.autoFill("A4:A10", "A3", "Down", "FillSeries");
    this.ssObj?.clear({type:"Clear All", range: "A1:G12"});
  }

  public btnClick(){
    // this.ssObj?.wrap("H2", true);
    // this.ssObj?.merge("A1:G1", "All");
    this.ssObj?.addDataValidation({type: 'Decimal', operator: "GreaterThan", value1: "300"})
    this.ssObj?.addInvalidHighlight();
  }

  public onCreate(){
    this.ssObj?.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:G1');
  }
}
