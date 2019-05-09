---
id: edit-questions
title: Edit questions
sidebar_label: Edit questions
---

## How to edit questions

The questions in the survey can be edited, see: [Edit question](https://manual.limesurvey.org/Edit_question).

Questions have been grouped into [Groups](https://manual.limesurvey.org/Question_groups_-_introduction), which separate the questions across a number of pages.  The Questions and Question Groups can be [reordered](https://manual.limesurvey.org/Survey_structure#Reordering_questions_and_question_groups).

## Expression Manager

The results for the Framework sections are calculated using LimeSurvey's [Expression Manager](https://manual.limesurvey.org/Expression_Manager), in particular, the question type: [Equation](https://manual.limesurvey.org/Expression_Manager#Equations_2).

Each Framework has 5 equations needed to calculate the 'Framework section's':

- label (for the dashboard)
- score
- percent
- report header
- report text

## Naming standards

| Item                             | Convention                   | Example                               |
|----------------------------------|------------------------------|---------------------------------------|
| Section                          | Section x: `<section title>` | Section 1: Background                 |
| Question code                    | Qx                           | Q1                                    |
| Question code - subquestion      | QxSQx                        | Q2SQ1                                 |
| Question code - subquestion      | QxSQa                        | Q2SQa                                 |
| Question text                    | Qx. `<question text>`        | Q1. What is the name of your company? |
| Question - subquestion text      | Qx.x. `<question text>`      | Q2.1. What is...                      |
| Question - subquestion text      | Qxa. `<question text>`       | Q9a. Approximately....                |
| Framework Equation Question code | fQx                          |                                       |
| Framework Equation calculation   | ``<calculation name>``       |                                       |

Key:

| Item | Definition                                        |
|------|---------------------------------------------------|
| x    | incremental number (1, 2, 3, ...)                 |
| a    | incremental letters (a, b, c, ...)                |
| f    | first letter of each word in the framework's name |

## Validating changes

New changes may introduce errors, it is always best to check the [survey logic file](https://manual.limesurvey.org/Show_logic_file) before publishing a survey with any edits.