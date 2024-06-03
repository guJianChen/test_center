# TestCenter.IndexApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteIndicesIndexName**](IndexApi.md#deleteIndicesIndexName) | **DELETE** /indices/{indexName} | 删除索引
[**getIndicesIndexName**](IndexApi.md#getIndicesIndexName) | **GET** /indices/{indexName} | 获取index
[**getIndicesIndexNameDoc**](IndexApi.md#getIndicesIndexNameDoc) | **GET** /indices/{indexName}/doc/{docId} | 获取文档
[**getIndicesIndexNameSearch**](IndexApi.md#getIndicesIndexNameSearch) | **GET** /indices/{indexName}/search | 查询文档
[**postIndicesIndexName**](IndexApi.md#postIndicesIndexName) | **POST** /indices/{indexName} | 更新index
[**postIndicesIndexNameActive**](IndexApi.md#postIndicesIndexNameActive) | **POST** /indices/{indexName}/active | 激活Index，开始导入数据
[**postIndicesIndexNameAppend**](IndexApi.md#postIndicesIndexNameAppend) | **POST** /indices/{indexName}/append | 刷新并追加Index的数据
[**putIndicesIndexName**](IndexApi.md#putIndicesIndexName) | **PUT** /indices/{indexName} | 添加index
[**putIndicesIndexNameDocDocId**](IndexApi.md#putIndicesIndexNameDocDocId) | **PUT** /indices/{indexName}/doc/{docId} | 更新文档



## deleteIndicesIndexName

> deleteIndicesIndexName(indexName, opts)

删除索引

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
let opts = {
  'retainData': true // Boolean | 是否保留index对doc的修改
};
apiInstance.deleteIndicesIndexName(indexName, opts, (error, data, response) => {
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
 **indexName** | **String**|  | 
 **retainData** | **Boolean**| 是否保留index对doc的修改 | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getIndicesIndexName

> IndexModel getIndicesIndexName(indexName)

获取index

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
apiInstance.getIndicesIndexName(indexName, (error, data, response) => {
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
 **indexName** | **String**|  | 

### Return type

[**IndexModel**](IndexModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIndicesIndexNameDoc

> DocumentModel getIndicesIndexNameDoc(indexName, docId)

获取文档

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
let docId = "docId_example"; // String | 
apiInstance.getIndicesIndexNameDoc(indexName, docId, (error, data, response) => {
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
 **indexName** | **String**|  | 
 **docId** | **String**|  | 

### Return type

[**DocumentModel**](DocumentModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIndicesIndexNameSearch

> [DocumentModel] getIndicesIndexNameSearch(indexName, opts)

查询文档

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.getIndicesIndexNameSearch(indexName, opts, (error, data, response) => {
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
 **indexName** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

[**[DocumentModel]**](DocumentModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postIndicesIndexName

> IndexModel postIndicesIndexName(indexName, opts)

更新index

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
let opts = {
  'indexModel': new TestCenter.IndexModel() // IndexModel | 
};
apiInstance.postIndicesIndexName(indexName, opts, (error, data, response) => {
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
 **indexName** | **String**|  | 
 **indexModel** | [**IndexModel**](IndexModel.md)|  | [optional] 

### Return type

[**IndexModel**](IndexModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postIndicesIndexNameActive

> IndexModel postIndicesIndexNameActive(indexName)

激活Index，开始导入数据



### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
apiInstance.postIndicesIndexNameActive(indexName, (error, data, response) => {
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
 **indexName** | **String**|  | 

### Return type

[**IndexModel**](IndexModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postIndicesIndexNameAppend

> IndexModel postIndicesIndexNameAppend(indexName)

刷新并追加Index的数据

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
apiInstance.postIndicesIndexNameAppend(indexName, (error, data, response) => {
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
 **indexName** | **String**|  | 

### Return type

[**IndexModel**](IndexModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putIndicesIndexName

> IndexModel putIndicesIndexName(indexName, opts)

添加index



### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
let opts = {
  'indexModel': new TestCenter.IndexModel() // IndexModel | 
};
apiInstance.putIndicesIndexName(indexName, opts, (error, data, response) => {
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
 **indexName** | **String**|  | 
 **indexModel** | [**IndexModel**](IndexModel.md)|  | [optional] 

### Return type

[**IndexModel**](IndexModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putIndicesIndexNameDocDocId

> putIndicesIndexNameDocDocId(indexName, docId, opts)

更新文档

### Example

```javascript
import TestCenter from 'test_center';

let apiInstance = new TestCenter.IndexApi();
let indexName = "indexName_example"; // String | 
let docId = "docId_example"; // String | 
let opts = {
  'body': {key: null} // Object | 
};
apiInstance.putIndicesIndexNameDocDocId(indexName, docId, opts, (error, data, response) => {
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
 **indexName** | **String**|  | 
 **docId** | **String**|  | 
 **body** | **Object**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

