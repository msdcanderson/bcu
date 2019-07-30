---
id: flowcharts
title: Flowcharts
sidebar_label: Flowcharts
---

## Flowchart 1

```uml
@startuml
autonumber

skinparam sequence {
	ArrowColor #005B7B
	ActorBorderColor #005B7B
	LifeLineBorderColor #005B7B
	ParticipantBorderColor #005B7B
}

title Survey completion flowchart

actor user
participant LimeSurvey
participant LimeSurvey_plugin
participant Metabase
database Lime_survey_692579
database hrview_692579

note over LimeSurvey_plugin : Human readable view plugin\ncreated by BankSearch
note over Lime_survey_692579 : Table created by LimeSurvey
note over hrview_692579 : Human readable table\ncreated by LimeSurvey_plugin

user -> LimeSurvey : user registers
LimeSurvey -> Lime_survey_692579 : token created, new row in table
LimeSurvey -> user : LimeSurvey emails token
user -> LimeSurvey : user completes survey
LimeSurvey -> Lime_survey_692579 : survey data is stored
LimeSurvey_plugin -> hrview_692579 : survey data is stored in human readable format
LimeSurvey -> user : report is displayed
LimeSurvey -> user : email is sent
user -> LimeSurvey : click report link
LimeSurvey -> Metabase : request to view chart
Metabase -> hrview_692579 : request for chart data
hrview_692579 -> Metabase : chart data is returned
Metabase -> user : chart is displayed

@enduml
```

