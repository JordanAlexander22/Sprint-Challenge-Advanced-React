- [ ] Why would you use class component over function components (removing hooks from the question)?

Alot of older code bases are built with classes as hooks are relatively new. Class components can also be stateful and dont require props. 

- [ ] Name three lifecycle methods and their purposes.
componentDidMount is used for code that is executed immediately after the component mounts.

componentDidUpdate is to execute code immediately after a component updates.

componentWillUmount is rare but sometimes used to cleanup. Like cancelling canceling a network request that was created in a different lifecycle method and is invoked immediately before a component unmounts

- [ ] What is the purpose of a custom hook?
custom hooks allow us to extract component logic into reusable functions with full customization

- [ ] Why is it important to test our apps?
It can be more costly and difficult to test later insteadl of just running small unit tests