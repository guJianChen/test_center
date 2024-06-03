/**
 * testCenter
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/client.projectDemo.client.teams/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/client.projectDemo.client.teams/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TestCenter);
  }
}(this, function(expect, TestCenter) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TestCenter.MappingModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MappingModel', function() {
    it('should create an instance of MappingModel', function() {
      // uncomment below and update the code to test MappingModel
      //var instance = new TestCenter.MappingModel();
      //expect(instance).to.be.a(TestCenter.MappingModel);
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instance = new TestCenter.MappingModel();
      //expect(instance).to.be();
    });

  });

}));