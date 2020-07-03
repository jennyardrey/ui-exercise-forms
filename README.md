# Form UI Exercise

This repo contains an exercise focused to evaluate a breadth of skills, both technical and non technical. There are no wrong answers or questions so feel free to express yourself.

## Problem Description
You have been assigned a ticket to implement a user password reset form on a website we’re building. This is in no way indicative of how we work at Space 48 (I promise!) but you’ve only got one hour to implement the feature to the best of your abilities. At the end of the hour, you need to push what you’ve got and provide a follow-up comment to describe:

- How you’ve approached implementing the ticket
- Any feedback/questions you had about ticket requirements
- What changes you think should be made to improve the UX
- What improvements you’d make to the component given more time, and give an estimate for how long those changes would take to implement.

The ticket reads as follows:

> __Summary:__ 
>
> Implement the “Forgot Password” form
>
> __Description:__
>
> We need to implement a password reset form so that customers can reset their password. Please refer to the attached Invision link for direction on design.
>
> _Functional Requirements_
>
> - The password reset instructions must show and hide as the customer clicks the question
> - The form must perform a POST request with JSON to /customer/account/resetPassword
> - The email field must contain a valid email address before the form submission is allowed
> - The component must support showing error or success messages based on the response (you don’t need to hook this up to a backend API)
> 
> _Browser Support_
>
> Chrome (latest), Chrome for Android (latest), iOS (latest)
>
> _Design Links_
>
> https://projects.invisionapp.com/share/9WXTESN3RN5

## Exercise Notes
- Fork this repository (https://github.com/Space48/ui-exercise-forms) to your own Github account and make it private
- Implement your changes on your own local branch
- Push that local branch to your fork
- Open a pull request to master on your fork

## Assessment
You will be assessed on the following:

Your use of HTML, JS, CSS, Git, Github

## System Requirements
- [git](https://git-scm.com/)
- [Node](https://nodejs.org/) (at least version 10.16.3)
- [npm](https://www.npmjs.com/) (at least version 6.9.0)

## Setup
To setup the project, type the following into your terminal: 
```
npm run setup
``` 

## Local development

Once the project is setup, start the local environment by running the following from your terminal:
```
npm run dev
```

This should start up both a JSON server that will provide an endpoint for the exercise, as well as a local server for the frontend.

- Frontend available at http://localhost:1234
- Data endpoint available at http://localhost:3005

All development work should be done inside the ```src``` directory.

## Test data

Existing users that can be used for the exercise are:
- koosvandermerwe@space48.com
- erika.mustermann@space48.com
- john.doe@space48.com
- joe.bloggs@space48.com
