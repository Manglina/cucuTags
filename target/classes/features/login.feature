@login @e2e
Feature: Facebook login feature
 
@smoke
 Scenario: user validate login feature by valid credintial
 Given user launch browser
 And user enter url
 When user enter userName and passWord
 |empId|empName	    | Email								 |	 
 |101  |manglina    |mangmanglina@gmail.com|
 |102	 |lina		    |linalinagggg@gmail.com|
 |103  |herley quinn|herleyquinn@gmail.com |
 Then user click login button
 And user verify result
 
@functional 
 Scenario: user validate login feature by valid credintial
 Given user launch browser
 And user enter url
 When user enter userName and passWord
 |empId|empName	    | Email								 |	 
 |101  |manglina    |mangmanglina@gmail.com|
 |102	 |lina		    |linalinagggg@gmail.com|
 |103  |herley quinn|herleyquinn@gmail.com |
 Then user click login button
 And user verify result