---
id: ls-mb-integration
title: LimeSurvey / Metabase Integration
sidebar_label: LimeSurvey / Metabase Integration
---

## Display dashboard - survey

Steps to display the dashboard at the end of the survey:

- Go into survey
- Click Text Elements
- In 'End message', click 'Source'
- At the top paste the following

```html
<script>
  var ajax_url = "https://bcu-survey.growmycompany.co.uk/metabase/<php file>?token={TOKEN}";
  jQuery("#meta_dashboard").load(ajax_url);
</script>
```

Example:

```html
<script>
  var ajax_url = "https://bcu-survey.growmycompany.co.uk/metabase/bcuvm_meta_dashboard_generator.php?token={TOKEN}";
  jQuery("#meta_dashboard").load(ajax_url);
</script>
```

- Add the following line where you want the dashboard to display

```html
<p><span style="font-family:Arial,Helvetica,sans-serif;"><span style="color:#444444;">View chart here: <a href="https://bcu-survey.growmycompany.co.uk/metabase/bcuvm_meta_dashboard_generator.php?token={TOKEN}" target="_blank">link</a></span></span></p>
```


## Display dashboard - email

Steps to display the dashboard in the confirmation email sent to users:

- Go into survey
- Click Email Templates
- In 'End message', click 'Source'
- Add the following line where you want the dashboard to display

```html
View chart here: <a href="https://bcu-survey.growmycompany.co.uk/metabase/bcuvm_meta_dashboard_generator.php?token={TOKEN}">link</a>
```
