## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Thu Aug 12 2021
|**App Generator**<br>@sap/generator-fiori|
|**App Generator Version**<br>1.3.0|
|**Generation Platform**<br>Visual Studio Code|
|**Service Type**<br>None|
|**Application Title**<br>UI5 App including Karma Testrunner|
|**Author**<br>Michael Christa|


## UI5-App including config for Karma testrunner 

This repository contains a simple UI5 application with few trivial QUnit tests defined. Further, there is a Karma config included which executes the UI5 tests and is also executable from a CI-Pipeline like Azure-Pipelines. The configuration is tested with Azure-Pipelines and the repository includes also the Azure-Pipeline configuration.

### Install required modules
In order to use Karma, you need to install required npm modules. Run the install from the root folder of the repository.

```
    npm install
```

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  In order to launch the generated app, simply run the following from the generated app root folder:

```
    npm start
```

### Start the Karma testrunner

```
    npm test
```
or
```
    karma start
```

### Include Karma testrunner in Azure Pipelines

```
    - task: PublishTestResults@2
        inputs:
            testResultsFormat: 'JUnit'
            testResultsFiles: '**/TESTS-*.xml'
        displayName: 'Display Unit Test result'

        - task: PublishCodeCoverageResults@1
        inputs:
            codeCoverageTool: 'Cobertura'
            summaryFileLocation: '$(Build.SourcesDirectory)/coverage/**/cobertura.xml'
```

### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)

### Reference
[Blog post on SCN](https://blogs.sap.com/?p=1405409&preview=true&preview_id=1405409)
