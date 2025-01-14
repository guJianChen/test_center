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


import ApiClient from './ApiClient';
import CollectionModel from './client.projectDemo.client.teams.model/CollectionModel';
import DocumentModel from './client.projectDemo.client.teams.model/DocumentModel';
import IndexModel from './client.projectDemo.client.teams.model/IndexModel';
import JobModel from './client.projectDemo.client.teams.model/JobModel';
import MappingModel from './client.projectDemo.client.teams.model/MappingModel';
import ProblemModel from './client.projectDemo.client.teams.model/ProblemModel';
import PropertyModel from './client.projectDemo.client.teams.model/PropertyModel';
import RestrictModel from './client.projectDemo.client.teams.model/RestrictModel';
import CollectionApi from './client.projectDemo.client.teams.api/CollectionApi';
import IndexApi from './client.projectDemo.client.teams.api/IndexApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TestCenter = require('client.projectDemo.client.teams/index'); // See note below*.
* var xxxSvc = new TestCenter.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TestCenter.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['client.projectDemo.client.teams/index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TestCenter.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TestCenter.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module client.projectDemo.client.teams/index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:client.projectDemo.client.teams/ApiClient}
     */
    ApiClient,

    /**
     * The CollectionModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/CollectionModel}
     */
    CollectionModel,

    /**
     * The DocumentModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/DocumentModel}
     */
    DocumentModel,

    /**
     * The IndexModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/IndexModel}
     */
    IndexModel,

    /**
     * The JobModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/JobModel}
     */
    JobModel,

    /**
     * The MappingModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/MappingModel}
     */
    MappingModel,

    /**
     * The ProblemModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/ProblemModel}
     */
    ProblemModel,

    /**
     * The PropertyModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/PropertyModel}
     */
    PropertyModel,

    /**
     * The RestrictModel model constructor.
     * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/RestrictModel}
     */
    RestrictModel,

    /**
    * The CollectionApi service constructor.
    * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.api/CollectionApi}
    */
    CollectionApi,

    /**
    * The IndexApi service constructor.
    * @property {module:client.projectDemo.client.teams/client.projectDemo.client.teams.api/IndexApi}
    */
    IndexApi
};
