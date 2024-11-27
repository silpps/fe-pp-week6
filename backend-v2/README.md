## Iteration 6

The purpose of userSchema.statics.login in userModel.js is to create a class function that is available to all objects of that class.
this.findone is used in the models name when creating the class function to refer to an instance of the class. User.findone is used to access the class function.
bcrypt is imported in userController because the encryption logic is there and not in the model. 
For my project I will most likely stick to the current implementation and not refactor the code unless I have time for it.

## Iteration 7

this is used instead of the model's name when referring to an instance of the class when creating a class function.
validator is used in controller to separate validation logic from model logic for better modularity