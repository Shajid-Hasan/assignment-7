1) What is JSX, and why is it used?
Ans: JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

2) 
Ans : 

Props : 
-The Data is passed from one component to another.
-It is Immutable
-Props can be used with state and functional components.
-Props are read only.

State : What is the difference between State and Props?
-The Data is passed within the component only.
-It is Mutable.
-The state can be used only with the state components or class component.
-The state is both read and write.

3) What is the useState hook, and how does it work?

Ans :
-Initialize State
-State is Preserved Across Renders
-State Updates with the Updater Function
-Triggers Re-render

4) How can you share state between components in React?
Ans : remove state from both of them, move it to their closest common parent, and then pass it down to them via props

5) How is event handling done in React?
Ans : Event handling in React is accomplished through a system that combines similarities to standard HTML event handling with React's own enhancements