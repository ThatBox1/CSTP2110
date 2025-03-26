# CSTP 2110 Project

<h1>Section 1 - Project Description</h1>

<h3><em>1.1 Project</em></h3>
AWS Reminder App 


<h3><em>1.2 Description </em></h3> 
AWS Reminder App is a cloud based application that allows users to create reminders and recieve notification via email. The application will use free AWS service to run 

<h3><em>1.3 Reivision History</em></h3> 

| Date  | Comment | Author |
| ------------- | ------------- |------------- |
| 20025-03-25 | Documentation  | Arlexan | 
|  |   |  | 
|  |   |  | 
|  |   |  | 


<h1>Section 2 - Overview</h1>

<h3><em>2.1 Purpose</em></h3>
The purpose of this application is to allow users to set a reminder and get notified when the reminder is due using AWS services. It is a simple app to ensure that the user aware of upcoming events set within the reminder app

<h3><em>2.2 Scope</em></h3>
The application include four AWS services:<br>
- AWS SNS: Notification system<br>
- Lambda: Serverless computing function<br>
- DynamoDB: Data storage<br>
- API Gateway: Manage API to create and manage reminders<br>

<h2>2.3 Requirements</h2>
<h3><em>2.3.1 Functional Requirements</em></h3>
The application should allow the users to: <br>
- Users should be able to Create, Delete, Edit reminder<br>
- Choose reminder due date to send reminder<br>
- Provide email to send a notification to<br>
- Receive notification for a reminder<br>

<h3><em>2.3.2 Non-Functional Requirements</em></h3>
- Performance/Reliability: The system should not crash when multiple people access it<br>
- Scalability: Will be using AWS FREE tier services. It should be enough for this project<br>

<h3><em>2.3.3 Technical Requirements</em></h3>
- Will be built using AWS services<br>
- Lambda for functionality<br>
- SNS For notfication<br>
- DynamoDB for database<br>
- API Gateway for API calling<br>

<h3><em>2.3.4 Security Requirements</em></h3>
Authentication: API will use IAM for secure access control 

<h3><em>2.3.5 Estimates</em></h3>

| #  | Description | Hrs. Est. |
| ------------- | ------------- |------------- |
| 1 |  AWS Services Setup  | 5 | 
| 2 |  API & Lambda | 8 | 
| 3 |  SNS  | 3 | 
| 4 |  DynamoDB  | 5 | 
| 5 |  Testing / Debugging  | 5 | 
| Total |    | 26 | 


<h1>Section 4 - Data Dictionary</h1>

<h2>Reminders</h2>

| Field  | Notes | Type |
| ------------- | ------------- |------------- |
| userId | User Identifier  | String | 
| reminderId | Reminder Identifier  | String | 
| message | Reminder Description  | String | 
| ReminderTime | Time of Reminder  | String | 
| status | Status of Reminder | String | 













