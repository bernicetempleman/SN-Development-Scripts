# SNOW Develeopment and Scripts

## Tables and Columns

## Form Layout and Design

## Glide System
The GlideSystem (referred to by the variable name 'gs' in Business Rules) provides a number of convenient methods to get information about the system, the current logged in user, etc. It runs on Server Side and are used in Business Rules.

For example, the method addInfoMessage() permits communication with the user.
gs.addInfoMessage('Email address added for notification');

Many of the Glide System methods facilitate the easy inclusion of dates in query ranges and are most often used in filters and reporting.

The Method Detail is in three sections:

General functions
Date and Time functions
User Session functions

## Business Rules
A business rule is a server-side script that runs when a record is displayed, inserted, updated, or deleted, or when a table is queried. Use business rules to accomplish tasks like automatically changing values in form fields when certain conditions are met, or to create events for email notifications and script actions.


Note: Business rules can make use of scripts to take actions on records in the database. However, there are several other scripting options available on the ServiceNow platform, such as client scripts and UI actions.


How Business Rule Work:

To configure business rules, you first need to determine when the business rule should run and what action it should take.

### When Business Rules Run
Business rules run based on two sets of criteria:

1) The time that the business rule is configured to run relative to a record being modified or accessed.

2) The database operation that the system takes on the record.

The following options are provided to determine the time the business rule should run:

Business rules run based on two sets of criteria:

1) The time that the business rule is configured to run relative to a record being modified or accessed.

2) The database operation that the system takes on the record.

The following options are provided to determine the time the business rule should run:

![image](https://user-images.githubusercontent.com/12488769/148382927-ceefe88a-a2b7-4a0d-b66e-c738324f92b3.png)


### What

The following options are provided to determine the database operation that the system takes on the record:

![image](https://user-images.githubusercontent.com/12488769/148382286-6d28b605-b625-4d03-85ad-d0c64e70a845.png)

## Client Script
Client scripts are shipped to the client (the browser) and run there instead of on the server. Users who know JavaScript can define scripts to run in the client browser. Several types of scripts are supported.

onLoad(): Runs when a form is loaded.

onChange(): Runs when a particular widget changes value.

onSubmit(): Runs when a form is submitted.

onCellEdit(): Runs when a cell on a list changes value.

Note: Best practice for performance reasons is to limit the amount of code sent to the client. You should always be aware of the impact on the client when adding client scripts.

## Client Script Types
1) onLoad() Scripts

An onLoad() script runs when a form is first drawn and before control is given to the user to begin typing. Typically, you use an onLoad() script to perform some client side manipulation of the document on screen.
An onLoad() script must contain a function named onLoad(). Otherwise, it is entirely up to you what your script does after it gets to the client.

For example, here is a trivial onLoad() script that displays a message box that says "Loading ..." while the page loads.


function onLoad() {
 alert('Loading ...'); 
}


2) onSubmit() Scripts

An onSubmit() script runs when a form is submitted. Typically, you use an onSubmit() script to validate things on the form and ensure that the submission makes sense.
As such, onSubmit() scripts can potentially cancel a submission by returning false.

An onSubmit() script must contain a function named onSubmit().

For example, here is an onSubmit() script that prompts the user to confirm that a priority one ticket should really be submitted. If the user clicks Cancel in the confirmation dialog box, the submission is canceled.


function onSubmit() {
 var priority = g_form.getValue('priority');
 if (priority == 1) return confirm('Are you sure you want to submit a priority one ticket? The CIO will be notified!');}


3) onChange() Scripts

Unlike onLoad() and onSubmit() scripts, onChange() scripts apply to a particular widget on a form rather than to the form itself. They are fired when a particular value changes on-screen.

An onChange() script must contain a function named onChange().

For example, here is an onChange() script that notifies the user whenever the short description field on a form changes.

function onChange(control, oldValue, newValue, isLoading) {
 alert('you changed short description from ' + oldValue + ' to ' + newValue);
 }

To prevent an onChange() script from running when the form loads, add the following to the top of the script.

if (isLoading) { 
return;
 }

4) onCellEdit() Scripts

Scripts can be defined as onCellEdit to run on the client side when the list editor interacts with a cell. This option is available starting with the Aspen release.

An onCellEdit() script must contain a function named onCellEdit().

## Catalog client scripts
Client-side scripts can add dynamic effects and validation to forms. Scripts can apply to service catalog items or variable sets, allowing administrators to use the same functionality that is available on other forms.

You can use client side scripts to:
	Get or set variable values.
	Hide or display variables.
	Make variables mandatory or not.
	Validate form submission.
	
Catalog client scripts are very similar to standard client scripts, with these important differences:
	
Instead of selecting a table such as Incident for the script, select a catalog item or variable set. As your system may have a large number of catalog items, you should select a catalog item or variable set using a reference field instead of the choice list that the standard Client Script form uses.

When using an onChange() catalog client script, it is linked to a particular variable instead of a field. The system automatically populates the variable name selection list with any named variables from the catalog item or variable set selected.

## UI Actions
UI actions add buttons, links, and context menu items on forms and lists, making the UI more interactive, customizable, and specific to user activities. UI actions can contain scripts that define custom functionality.

Administrators and users with the ui_action_admin role can define UI actions.

UI Action Controls:

 A button on a form
 A context menu item on a form (appears when you right-click the form header)
 A related link in a form
 A button in the banner on top of a list
 A button at the bottom of a list
 A context menu item on a list (appears when you right-click the list)
 An menu item for the action choice list at the bottom of a list
 A related link at the bottom of a list

## Script Includes
Store JavaScript for execution on the server
Each script include defines either an object class or a function
Must be called to run
Reusable (Write Once Use Many)
Only loaded on Request
Can be Client callable


Note: Global Business Rules also allow creation of reusable JavaScript. They can impact performance because they are loaded on every interaction between a user and the platform. Script Includes load only on demand and do not impact performance.


To access script includes, navigate to System Definitions > Script Includes. 
Script includes have a name, description and script. They also specify whether they are active or not, and whether they can be called from a Client Script.

## UI Policies
UI policies offer an alternative to client scripts for dynamically changing information on a form. Administrators and users with the Personalize Rules [personalize_rules] or the UI policy administrator [ui_policy_admin] role can use UI policies to define custom process flows for tasks.


UI Policy Actions:

Below 3 actions can be defined with the help of UI Policy which runs on a specific set of conditions:

Mandatory

ReadOnly

Visible


















