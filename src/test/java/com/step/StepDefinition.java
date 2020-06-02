package com.step;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	
	@Given("user launch browser")
	public void user_launch_browser() {
	 System.out.println("user launch browser");
	}

	@Given("user enter url")
	public void user_enter_url() {
		System.out.println("user entered url");
	}

	@When("user enter userName and passWord")
	public void user_enter_userName_and_passWord(io.cucumber.datatable.DataTable dataTable) {
		System.out.println("user entered userName and Password");
	}

	@Then("user click login button")
	public void user_click_login_button() {
		System.out.println("user click login button");
	}

	@Then("user verify result")
	public void user_verify_result() {
		System.out.println("user verify result");
	}


}
