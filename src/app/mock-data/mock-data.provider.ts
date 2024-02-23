import {MonthlyLimitDetail, MonthlyLimitHeader} from "../models/monthly-limit";
import {v4 as uudiv4} from "uuid";


export class MockDataProvider {

  public static getActiveModel(): MonthlyLimitHeader {
    return {
      id: uudiv4(),
      year: 2024,
      month: 1,
      details: MockDataProvider.getActiveDetails()
    };
  }

  private static getActiveDetails(): Array<MonthlyLimitDetail> {
    return [
      {
        name: 'fuel',
        amount: 5000,
        entries: [
          {
            id: 1,
            amount: 5000,
            date: new Date(2024, 1, 18),
            vendor: 'Banadaragama Co Op',
            comment: 'Dropping Kumeri'
          }
        ]
      },
      {
        name: 'bills',
        amount: 10000,
        entries: [

          {
            id: 1,
            amount: 5000,
            date: new Date(2024, 1, 18),
            vendor: 'Electricity Bill',
          }
        ]
      },
      {
        name: 'liquor',
        amount: 0,
        entries: []
      },
      {
        name: 'pocket',
        amount: 300,
        entries: [{
          id: 1,
          amount: 300,
          vendor: 'Highway Ticket',
          date: new Date(2024, 1, 18)
        }]
      }
    ];


  }

}
