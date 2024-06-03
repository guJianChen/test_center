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
    instance = new TestCenter.CollectionApi();
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

  describe('CollectionApi', function() {
    describe('deleteCollectionsCollectionName', function() {
      it('should call deleteCollectionsCollectionName successfully', function(done) {
        //uncomment below and update the code to test deleteCollectionsCollectionName
        //instance.deleteCollectionsCollectionName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCollections', function() {
      it('should call getCollections successfully', function(done) {
        //uncomment below and update the code to test getCollections
        //instance.getCollections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCollectionsCollectionName', function() {
      it('should call getCollectionsCollectionName successfully', function(done) {
        //uncomment below and update the code to test getCollectionsCollectionName
        //instance.getCollectionsCollectionName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCollectionsCollectionNameProperties', function() {
      it('should call getCollectionsCollectionNameProperties successfully', function(done) {
        //uncomment below and update the code to test getCollectionsCollectionNameProperties
        //instance.getCollectionsCollectionNameProperties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCollectionsCollectionNameUpload', function() {
      it('should call postCollectionsCollectionNameUpload successfully', function(done) {
        //uncomment below and update the code to test postCollectionsCollectionNameUpload
        //instance.postCollectionsCollectionNameUpload(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postCollectionsDocs', function() {
      it('should call postCollectionsDocs successfully', function(done) {
        //uncomment below and update the code to test postCollectionsDocs
        //instance.postCollectionsDocs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putCollectionsCollectionName', function() {
      it('should call putCollectionsCollectionName successfully', function(done) {
        //uncomment below and update the code to test putCollectionsCollectionName
        //instance.putCollectionsCollectionName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));