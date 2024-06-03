# TestCenter.CollectionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCollectionsCollectionName**](CollectionApi.md#deleteCollectionsCollectionName) | **DELETE** /collections/{collectionName} | 删除Collection
[**getCollections**](CollectionApi.md#getCollections) | **GET** /collections | 获取所有的数据集合
[**getCollectionsCollectionName**](CollectionApi.md#getCollectionsCollectionName) | **GET** /collections/{collectionName} | 获取Collection信息
[**getCollectionsCollectionNameProperties**](CollectionApi.md#getCollectionsCollectionNameProperties) | **GET** /collections/{collectionName}/properties | 获取集合中记录所有的Property
[**postCollectionsCollectionNameUpload**](CollectionApi.md#postCollectionsCollectionNameUpload) | **POST** /collections/{collectionName}/upload | 上传excel文件
[**postCollectionsDocs**](CollectionApi.md#postCollectionsDocs) | **POST** /collections/{collectionName}/docs | 批量上传文档
[**putCollectionsCollectionName**](CollectionApi.md#putCollectionsCollectionName) | **PUT** /collections/{collectionName} | 创建Collection



## deleteCollectionsCollectionName

> deleteCollectionsCollectionName(collectionName)

删除Collection

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.CollectionApi();
let collectionName = "collectionName_example"; // String | 
apiInstance.deleteCollectionsCollectionName(collectionName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionName** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getCollections

> [CollectionModel] getCollections()

获取所有的数据集合

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.CollectionApi();
apiInstance.getCollections((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CollectionModel]**](CollectionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionsCollectionName

> CollectionModel getCollectionsCollectionName(collectionName)

获取Collection信息

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.CollectionApi();
let collectionName = "collectionName_example"; // String | 
apiInstance.getCollectionsCollectionName(collectionName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionName** | **String**|  | 

### Return type

[**CollectionModel**](CollectionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionsCollectionNameProperties

> [PropertyModel] getCollectionsCollectionNameProperties(collectionName)

获取集合中记录所有的Property

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.CollectionApi();
let collectionName = "collectionName_example"; // String | 
apiInstance.getCollectionsCollectionNameProperties(collectionName, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionName** | **String**|  | 

### Return type

[**[PropertyModel]**](PropertyModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postCollectionsCollectionNameUpload

> postCollectionsCollectionNameUpload(collectionName, opts)

上传excel文件

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.CollectionApi();
let collectionName = "collectionName_example"; // String | 
let opts = {
  'file': "/path/to/file" // File | 
};
apiInstance.postCollectionsCollectionNameUpload(collectionName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionName** | **String**|  | 
 **file** | **File**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: Not defined


## postCollectionsDocs

> postCollectionsDocs(collectionName, opts)

批量上传文档

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.CollectionApi();
let collectionName = "collectionName_example"; // String | 
let opts = {
  'batchId': "batchId_example", // String | 
  'requestBody': [null] // [Object] | 
};
apiInstance.postCollectionsDocs(collectionName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionName** | **String**|  | 
 **batchId** | **String**|  | [optional] 
 **requestBody** | [**[Object]**](Object.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## putCollectionsCollectionName

> CollectionModel putCollectionsCollectionName(collectionName, opts)

创建Collection

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.CollectionApi();
let collectionName = "collectionName_example"; // String | 
let opts = {
  'collectionModel': new TestCenter.CollectionModel() // CollectionModel | 
};
apiInstance.putCollectionsCollectionName(collectionName, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionName** | **String**|  | 
 **collectionModel** | [**CollectionModel**](CollectionModel.md)|  | [optional] 

### Return type

[**CollectionModel**](CollectionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

