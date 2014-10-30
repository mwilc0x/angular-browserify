/// <reference path="../typings/underscore.d.ts" />

var _ = require('underscore');
var countries  = require('country-data').countries;

module FooBar {

  export class Test {
    public _whoAmI: string;

    constructor() {
      this._whoAmI = "I am a service";
    }

    /**
    * Say Hi
    */
    public sayHello() {
      return "hello world";
    }

    /**
    * Get some countries
    */
    public getCountries() {
        return _.pluck(countries.all, 'name');
    }

  }
}

export = FooBar;