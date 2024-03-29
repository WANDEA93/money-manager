import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any): void {
    this._storage?.set(key, value);
  }

  public get(key: string): Promise<any> | undefined {
    return this._storage?.get(key);
  }

  public remove(key: string): void {
     this._storage?.remove(key);
  }
}
