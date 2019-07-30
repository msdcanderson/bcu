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

## Flowchart 3

```uml
@startuml
autonumber

skinparam sequence {
	ArrowColor #005B7B
	ActorBorderColor #005B7B
	LifeLineBorderColor #005B7B
	ParticipantBorderColor #005B7B
}

title Re-activate existing survey process

actor admin
participant LimeSurvey
participant LimeSurvey_plugin
participant Metabase

note over LimeSurvey_plugin : Human readable view plugin\ncreated by BankSearch
note over Metabase : Dashboards connects\nto table hrview_692579\nwhich does not yet exist

admin -> LimeSurvey : Activate survey
create database lime_survey_692579
LimeSurvey -> lime_survey_692579 : Table is created
create database hrview_692579
LimeSurvey_plugin -> hrview_692579 : Table is created
note over Metabase : Dashboards connects\nto table hrview_692579\nwhich now exists

@enduml
```

## Flowchart 4

```uml
@startuml

autonumber

skinparam sequence {
	ArrowColor #005B7B
	ActorBorderColor #005B7B
	LifeLineBorderColor #005B7B
	ParticipantBorderColor #005B7B
}

title Duplicate existing survey process

actor admin
participant LimeSurvey
participant LimeSurvey_plugin
participant Metabase

note over LimeSurvey_plugin : Human readable view plugin\ncreated by BankSearch
note over Metabase : Dashboards connects to\ntable hrview_692579 which\ndoes not contain the data\nfrom the new survey

admin -> LimeSurvey : Duplicate survey
create database "lime_survey_<random ID>"
LimeSurvey -> "lime_survey_<random ID>" : Table is created
create database "hrview_<random ID>"
LimeSurvey_plugin -> "hrview_<random ID>" : Table is created
create actor BankSearch
admin -> BankSearch : Request Dashboard duplication
create participant MetabaseManager
BankSearch -> MetabaseManager : Request dashboard duplication
MetabaseManager -> Metabase : Dashboard is duplicated
note over Metabase : Dashboards connects to\ntable "hrview_<random ID>"\nwhich contains the data\nfrom the new survey

@enduml
```
