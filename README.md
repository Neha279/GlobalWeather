# ops-technical-activity
 
This adapter has errors at compile time, run-time and in the munit test case. Work through the errors you can find, documenting the issue/exception and the actions you have taken to fix it (This can be done as git commit messages if you chose).

Included with the adapter is a dockerised mock endpoint that can be used for testing. If you choose to make any changes to this mock, you may document them alongside the exceptions, explaining your reasoning.

Extension Task Suggestions - Enhance the application:

1. Create Unit test cases for get_weather.xml flow
2. Enhance Unit test cases for get_city_by_country_test_suite.xml
3. Build Exception Handling into the application to handle errors - Specifically, global exception handling for the Get Weather and Get City by Country flows
4. Add retry mechanisms on top of the exception handling (this weather service has been known to be flakey and this could help with the conenctivity issues)
5. Write documentation explaining the operation and purpose of the API and flows.

