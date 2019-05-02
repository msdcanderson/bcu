---
id: publishing-survey
title: Publishing / Unpublishing Survey
sidebar_label: Publishing / Unpublishing Survey
---

## Publish / unpublish survey

A survey can be both published and unpublished either manually, or at a set date/time, see: [Publication & Access](https://manual.limesurvey.org/Publication_%26_access).

## Unpublishing a survey

When a survey is [deactivated](https://manual.limesurvey.org/Closing_a_survey), a number of bespoke actions happen:

- database table holding survey results is renamed from `tbl.<survey id>` to `tbl.old_<survey id>`
- the existing dashboard will no longer function, it will continue to point to `tbl.<survey id>`, a [new dashboard](duplicate-dashboard.md) needs to be created for this dataset if you want the reports to continue to be visible