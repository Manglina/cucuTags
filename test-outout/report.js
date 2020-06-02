$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/features/login.feature");
formatter.feature({
  "name": "Facebook login feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@e2e"
    }
  ]
});
formatter.scenario({
  "name": "user validate login feature by valid credintial",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@e2e"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter url",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter userName and passWord",
  "rows": [
    {
      "cells": [
        "empId",
        "empName",
        "Email"
      ]
    },
    {
      "cells": [
        "101",
        "manglina",
        "mangmanglina@gmail.com"
      ]
    },
    {
      "cells": [
        "102",
        "lina",
        "linalinagggg@gmail.com"
      ]
    },
    {
      "cells": [
        "103",
        "herley quinn",
        "herleyquinn@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_userName_and_passWord(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify result",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_verify_result()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user validate login feature by valid credintial",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@e2e"
    },
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter url",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter userName and passWord",
  "rows": [
    {
      "cells": [
        "empId",
        "empName",
        "Email"
      ]
    },
    {
      "cells": [
        "101",
        "manglina",
        "mangmanglina@gmail.com"
      ]
    },
    {
      "cells": [
        "102",
        "lina",
        "linalinagggg@gmail.com"
      ]
    },
    {
      "cells": [
        "103",
        "herley quinn",
        "herleyquinn@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_userName_and_passWord(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify result",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_verify_result()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resource/features/logout.feature");
formatter.feature({
  "name": "Facebook logout feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@logout"
    },
    {
      "name": "@e2e"
    }
  ]
});
formatter.scenario({
  "name": "user validate login feature by valid credintial",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logout"
    },
    {
      "name": "@e2e"
    },
    {
      "name": "@functional"
    }
  ]
});
formatter.step({
  "name": "user launch browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter url",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enter_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter userName and passWord",
  "rows": [
    {
      "cells": [
        "empId",
        "empName",
        "Email"
      ]
    },
    {
      "cells": [
        "101",
        "manglina",
        "mangmanglina@gmail.com"
      ]
    },
    {
      "cells": [
        "102",
        "lina",
        "linalinagggg@gmail.com"
      ]
    },
    {
      "cells": [
        "103",
        "herley quinn",
        "herleyquinn@gmail.com"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_userName_and_passWord(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify result",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_verify_result()"
});
formatter.result({
  "status": "passed"
});
});