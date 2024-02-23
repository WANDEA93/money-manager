import { Injectable } from '@angular/core';
import {LedgerType} from "../models/ledger-entry";

@Injectable({
  providedIn: 'root'
})
export class EnumHandlerService {

  constructor() { }

  public getLedgerTypeLabel(type: LedgerType): string {
    let label: string;
    switch(type) {
      case LedgerType.CREDIT: label = 'Credit';break;
      default: label = 'Debit';
    }
    return label;
  }
}
