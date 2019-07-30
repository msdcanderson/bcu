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

## Flowchart 2

```uml
@startuml
autonumber

skinparam sequence {
	ArrowColor #005B7B
	ActorBorderColor #005B7B
	LifeLineBorderColor #005B7B
	ParticipantBorderColor #005B7B
}

title Deactivate survey process

actor admin
participant LimeSurvey
participant LimeSurvey_plugin
participant Metabase
database Lime_survey_692579
database hrview_692579

note over LimeSurvey_plugin : Human readable view plugin\ncreated by BankSearch
note over Metabase : Dashboards connects\nto table hrview_692579
note over Lime_survey_692579 : Table created by LimeSurvey
note over hrview_692579 : Human readable table\ncreated by LimeSurvey_plugin

admin -> LimeSurvey : close Survey
create database "lime_old_692579_<datetime>"
LimeSurvey -> "lime_old_692579_<datetime>" : table lime_survey_692579 is renamed

note over Lime_survey_692579 : Table no longer exists

create database "hrview_old_692579_<datetime>"
LimeSurvey_plugin -> "hrview_old_692579_<datetime>" : table hrview_692579 is renamed

note over hrview_692579 : Table no longer exists
note over Metabase: Dashboard is no longer\nconnected to a table

@enduml
```

To connect the dashboard to view the data, we need to copy the Metabase dashboard, and point it to table `hrview_old_<datetime>`