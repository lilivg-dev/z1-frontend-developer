# z1 Frontend Developer Code Test

The indications for the code test were the next ones: 
- Create a repository on Github with the name **z1-frontend-developer**.
- There is no set time to submit the test. However, we recommend to use a maximum of 3-4 days and submit as much as you can.
- Implement the frontend using React with TypeScript and using as few dependencies as possible. We recommend bootstrapping with create-react-app.
- For styling use either css/scss modules or styled components.
- Add unit and integration tests.
- Making a POST request to the backend will return {"summary":{"outcome": "Approved"}} when it considers it has succeeded and {"summary":{"outcome": "Too Much Glare"}} when it fails.

I've tried to do them all but, for reasons I will explain later, I couldn't complete them.

Here is a demo of the test: [https://bankclient.netlify.app/](https://bankclient.netlify.app/)

## React with TypeScript

To be honest, I've only been developing with React and TypeScript for a very short time. 

From my point of view, they're very useful tools that make it much easier to write code and be able to reuse it and find bugs faster. That's why I want to keep learning about both of them. 

I also used Create React App to create the whole application from scratch.

Therefore, implementing the functionality of the camera was a challenge for me. In fact, at first I was doing research to see how I could do it, but time was running out and I chose to focus on the rest of the test. So I decided to do a simulation of how the app would work if I had access to the camera and could take a real image. For the same reason I had to give up testing.

## Styled Components

I decided to use Styled Components for the test because it allowed me to have the styles much more organised. 

The other reason why I prefer to use it, is that you can use props to conditionally render css and it makes it much easier to work with.

Also, to maintain consistency in styling I decided to follow [Mark Otto's CSS & HTML Style Guide](https://codeguide.co) as much as possible.

## Backend and different states

Since the backend only returnes two responses, (accepted or rejected) which should appear as two different states in the home, but the design of the app also has the 'Low Light' state, I decided to add it with a setTimeout before the image taken was displayed.

Obviously, if the picture was actually taken by the camera, the 'Picture taken' status would be preceded by a status before it, but in my case the picture was always taken.

## Final conclusion

This test has been a challenge for me, a challenge that I hope to be able to complete with more time because I have learned a lot from it. 

It has also served as motivation for me to keep learning and going deeper into frontend development. 
