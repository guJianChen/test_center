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

import ApiClient from '../ApiClient';
import MappingModel from './MappingModel';

/**
 * The IndexModel model module.
 * @module client.projectDemo.client.teams/client.projectDemo.client.teams.model/IndexModel
 * @version 1.0.0
 */
class IndexModel {
    /**
     * Constructs a new <code>IndexModel</code>.
     * @alias module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/IndexModel
     * @param name {String} 
     * @param autoAppendFromCollection {Boolean} 
     */
    constructor(name, autoAppendFromCollection) { 
        
        IndexModel.initialize(this, name, autoAppendFromCollection);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, autoAppendFromCollection) { 
        obj['name'] = name;
        obj['autoAppendFromCollection'] = autoAppendFromCollection;
    }

    /**
     * Constructs a <code>IndexModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/IndexModel} obj Optional instance to populate.
     * @return {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/IndexModel} The populated <code>IndexModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IndexModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('collectionId')) {
                obj['collectionId'] = ApiClient.convertToType(data['collectionId'], 'Number');
            }
            if (data.hasOwnProperty('collectionName')) {
                obj['collectionName'] = ApiClient.convertToType(data['collectionName'], 'String');
            }
            if (data.hasOwnProperty('desc')) {
                obj['desc'] = ApiClient.convertToType(data['desc'], 'String');
            }
            if (data.hasOwnProperty('esIndexName')) {
                obj['esIndexName'] = ApiClient.convertToType(data['esIndexName'], 'String');
            }
            if (data.hasOwnProperty('mapping')) {
                obj['mapping'] = MappingModel.constructFromObject(data['mapping']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('autoAppendFromCollection')) {
                obj['autoAppendFromCollection'] = ApiClient.convertToType(data['autoAppendFromCollection'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IndexModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IndexModel</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IndexModel.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['collectionName'] && !(typeof data['collectionName'] === 'string' || data['collectionName'] instanceof String)) {
            throw new Error("Expected the field `collectionName` to be a primitive type in the JSON string but got " + data['collectionName']);
        }
        // ensure the json data is a string
        if (data['desc'] && !(typeof data['desc'] === 'string' || data['desc'] instanceof String)) {
            throw new Error("Expected the field `desc` to be a primitive type in the JSON string but got " + data['desc']);
        }
        // ensure the json data is a string
        if (data['esIndexName'] && !(typeof data['esIndexName'] === 'string' || data['esIndexName'] instanceof String)) {
            throw new Error("Expected the field `esIndexName` to be a primitive type in the JSON string but got " + data['esIndexName']);
        }
        // validate the optional field `mapping`
        if (data['mapping']) { // data not null
          MappingModel.validateJSON(data['mapping']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

IndexModel.RequiredProperties = ["name", "autoAppendFromCollection"];

/**
 * @member {Number} id
 */
IndexModel.prototype['id'] = undefined;

/**
 * @member {String} name
 */
IndexModel.prototype['name'] = undefined;

/**
 * @member {Number} collectionId
 */
IndexModel.prototype['collectionId'] = undefined;

/**
 * @member {String} collectionName
 */
IndexModel.prototype['collectionName'] = undefined;

/**
 * @member {String} desc
 */
IndexModel.prototype['desc'] = undefined;

/**
 * @member {String} esIndexName
 */
IndexModel.prototype['esIndexName'] = undefined;

/**
 * @member {module:client.projectDemo.client.teams/client.projectDemo.client.teams.model/MappingModel} mapping
 */
IndexModel.prototype['mapping'] = undefined;

/**
 * @member {String} status
 */
IndexModel.prototype['status'] = undefined;

/**
 * @member {Boolean} autoAppendFromCollection
 */
IndexModel.prototype['autoAppendFromCollection'] = undefined;






export default IndexModel;

