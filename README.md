## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Thu Aug 12 2021
|**App Generator**<br>@sap/generator-fiori|
|**App Generator Version**<br>1.3.0|
|**Generation Platform**<br>Visual Studio Code|
|**Service Type**<br>None|
|**Application Title**<br>UI5 App including Karma Testrunner|

## UI5-App including config for Karma testrunner 

A Fiori application.

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
[Blog post on SCN](http://google.com)
