# Lab 8 - Starter


### team: Jessie Zhu


1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

**Within a Github action that runs whenever code is pushed **
Manually run them locally before pushing code
Run them all after all development is completed

We should be putting automated tests within a github actions so that we are able to run it automatically after we have run local tests, and before our code is deployed. This to make sure we can detect any issues whenever code is pushed. 


2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

End to end testing is not the best option to test if a function is generating the correct returns. Unit tests would be better for this because you are able to provide inputs and outputs to your functions to test behavior. 


3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I think unit tests would not be the best option because the message feature of a messaging application includes multiple functions which would be hard to test using unit tests. There would be too many components to account for. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.


Unit tests would be a good option to test the max message length because this is a relatively simple feature that can fit within a single function, and we can feed the function varying inputs to fully test the capabilities of the feature in a unit test. We'd be able to preset expected outcomes. 