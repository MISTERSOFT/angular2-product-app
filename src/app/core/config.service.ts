import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  private successMessages: Object = {
    general: 'Good'
  };

  private errorMessages: Object = {
    url: 'Put a valid URL',
    price: 'Bad price synthax'
  };

  constructor() { }

  getSuccessMage(key: string) : string {
    if (this.successMessages.hasOwnProperty(key)) {
      return this.successMessages[key];
    }
    else {
      throw new Error(`'${key}' key not found into the success messages.`);
    }
  }

  getErrorMessage(key: string) : string {
    if (this.errorMessages.hasOwnProperty(key)) {
      return this.errorMessages[key];
    }
    else {
      throw new Error(`'${key}' key not found into the error messages.`);
    }
  }

}
