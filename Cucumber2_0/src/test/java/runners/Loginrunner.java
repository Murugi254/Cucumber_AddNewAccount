package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith (Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\features\\TechfiosLogin.feature",
		glue ="steps",
		//tags ="",
		monochrome = true, // when true, it provides pretty looking report 
		//dryRun = false,  //if true it check for initialization and wont run the code
		plugin = {
			"pretty",
			"html:target/cucumber",
			"json:target/cucumber.json"
		}
		
		)

public class Loginrunner {
	
	
	
	
			
			
	
	

}
