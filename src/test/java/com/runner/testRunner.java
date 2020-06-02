package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resource/features"},
		glue= {"com.step"}, 
		plugin = {"pretty" ,"html:D:test-outout" ,
        "json:Folder_Name/cucumber.json" ,
        "junit:Folder_Name/cucumber.xml"},
        tags= {"@smoke or @functional"},
        dryRun= false,
        monochrome=true,
        strict=true)
public class testRunner {

}
