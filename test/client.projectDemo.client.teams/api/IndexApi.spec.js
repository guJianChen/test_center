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
    instance = new TestCenter.IndexApi();
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

  describe('IndexApi', function() {
    describe('deleteIndicesIndexName', function() {
      it('should call deleteIndicesIndexName successfully', function(done) {
        //uncomment below and update the code to test deleteIndicesIndexName
        //instance.deleteIndicesIndexName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIndicesIndexName', function() {
      it('should call getIndicesIndexName successfully', function(done) {
        //uncomment below and update the code to test getIndicesIndexName
        //instance.getIndicesIndexName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIndicesIndexNameDoc', function() {
      it('should call getIndicesIndexNameDoc successfully', function(done) {
        //uncomment below and update the code to test getIndicesIndexNameDoc
        //instance.getIndicesIndexNameDoc(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getIndicesIndexNameSearch', function() {
      it('should call getIndicesIndexNameSearch successfully', function(done) {
        //uncomment below and update the code to test getIndicesIndexNameSearch
        //instance.getIndicesIndexNameSearch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postIndicesIndexName', function() {
      it('should call postIndicesIndexName successfully', function(done) {
        //uncomment below and update the code to test postIndicesIndexName
        //instance.postIndicesIndexName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postIndicesIndexNameActive', function() {
      it('should call postIndicesIndexNameActive successfully', function(done) {
        //uncomment below and update the code to test postIndicesIndexNameActive
        //instance.postIndicesIndexNameActive(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postIndicesIndexNameAppend', function() {
      it('should call postIndicesIndexNameAppend successfully', function(done) {
        //uncomment below and update the code to test postIndicesIndexNameAppend
        //instance.postIndicesIndexNameAppend(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putIndicesIndexName', function() {
      it('should call putIndicesIndexName successfully', function(done) {
        //uncomment below and update the code to test putIndicesIndexName
        //instance.putIndicesIndexName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putIndicesIndexNameDocDocId', function() {
      it('should call putIndicesIndexNameDocDocId successfully', function(done) {
        //uncomment below and update the code to test putIndicesIndexNameDocDocId
        //instance.putIndicesIndexNameDocDocId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));