# test_center

TestCenter - JavaScript client for test_center
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install test_center --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your test_center from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var TestCenter = require('test_center');


var api = new TestCenter.CollectionApi()
var collectionName = "collectionName_example"; // {String} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteCollectionsCollectionName(collectionName, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TestCenter.CollectionApi* | [**deleteCollectionsCollectionName**](docs/CollectionApi.md#deleteCollectionsCollectionName) | **DELETE** /collections/{collectionName} | 删除Collection
*TestCenter.CollectionApi* | [**getCollections**](docs/CollectionApi.md#getCollections) | **GET** /collections | 获取所有的数据集合
*TestCenter.CollectionApi* | [**getCollectionsCollectionName**](docs/CollectionApi.md#getCollectionsCollectionName) | **GET** /collections/{collectionName} | 获取Collection信息
*TestCenter.CollectionApi* | [**getCollectionsCollectionNameProperties**](docs/CollectionApi.md#getCollectionsCollectionNameProperties) | **GET** /collections/{collectionName}/properties | 获取集合中记录所有的Property
*TestCenter.CollectionApi* | [**postCollectionsCollectionNameUpload**](docs/CollectionApi.md#postCollectionsCollectionNameUpload) | **POST** /collections/{collectionName}/upload | 上传excel文件
*TestCenter.CollectionApi* | [**postCollectionsDocs**](docs/CollectionApi.md#postCollectionsDocs) | **POST** /collections/{collectionName}/docs | 批量上传文档
*TestCenter.CollectionApi* | [**putCollectionsCollectionName**](docs/CollectionApi.md#putCollectionsCollectionName) | **PUT** /collections/{collectionName} | 创建Collection
*TestCenter.IndexApi* | [**deleteIndicesIndexName**](docs/IndexApi.md#deleteIndicesIndexName) | **DELETE** /indices/{indexName} | 删除索引
*TestCenter.IndexApi* | [**getIndicesIndexName**](docs/IndexApi.md#getIndicesIndexName) | **GET** /indices/{indexName} | 获取index
*TestCenter.IndexApi* | [**getIndicesIndexNameDoc**](docs/IndexApi.md#getIndicesIndexNameDoc) | **GET** /indices/{indexName}/doc/{docId} | 获取文档
*TestCenter.IndexApi* | [**getIndicesIndexNameSearch**](docs/IndexApi.md#getIndicesIndexNameSearch) | **GET** /indices/{indexName}/search | 查询文档
*TestCenter.IndexApi* | [**postIndicesIndexName**](docs/IndexApi.md#postIndicesIndexName) | **POST** /indices/{indexName} | 更新index
*TestCenter.IndexApi* | [**postIndicesIndexNameActive**](docs/IndexApi.md#postIndicesIndexNameActive) | **POST** /indices/{indexName}/active | 激活Index，开始导入数据
*TestCenter.IndexApi* | [**postIndicesIndexNameAppend**](docs/IndexApi.md#postIndicesIndexNameAppend) | **POST** /indices/{indexName}/append | 刷新并追加Index的数据
*TestCenter.IndexApi* | [**putIndicesIndexName**](docs/IndexApi.md#putIndicesIndexName) | **PUT** /indices/{indexName} | 添加index
*TestCenter.IndexApi* | [**putIndicesIndexNameDocDocId**](docs/IndexApi.md#putIndicesIndexNameDocDocId) | **PUT** /indices/{indexName}/doc/{docId} | 更新文档


## Documentation for Models

 - [TestCenter.CollectionModel](docs/CollectionModel.md)
 - [TestCenter.DocumentModel](docs/DocumentModel.md)
 - [TestCenter.IndexModel](docs/IndexModel.md)
 - [TestCenter.JobModel](docs/JobModel.md)
 - [TestCenter.MappingModel](docs/MappingModel.md)
 - [TestCenter.ProblemModel](docs/ProblemModel.md)
 - [TestCenter.PropertyModel](docs/PropertyModel.md)
 - [TestCenter.RestrictModel](docs/RestrictModel.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### BearerAuth

- **Type**: Bearer authentication

