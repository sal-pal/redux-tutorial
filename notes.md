# React Tutorial Notes

## Intro

### The Gist
* Whole state of app is stored in an object tree inside a single store.
* The only way to change the state tree is to emit an action, an object describing what happened.
* To specify how the actions transform the state tree, you write pure reducers.
* Redux contains the state (state tree) and controllers (reducers) in a react app, while react only deals with presentation.

### Core Concepts
* State tree is a plain JS object
* An action is like the interface of a function, and the reducer is like the implementation that function.
* Use the reducer to change the state. It accepts the state and action as arguments, and returns the next state of the app.

### Three Principles
* Single Source of Truth.
* State is Read Only.
* Changes are Made with pure functions.
	* Pure reducers return a new state, not mutate the state passed to the function.


## Basics

### Actions
* Actions must have a type property that indicates the type of action being performed.
* Types should be defined as string constants.
* Besides the type property, the structure of an action is up to the developer.
	* Action construction recommendations: https://github.com/acdlite/flux-standard-action
* It’s recommended to pass as little data as possible

### Action Creators
* Action creators are functions that create actions. May be easy to conflate ‘actions’ with ‘action creator’, so be mindful of the difference between both terms.
* Action creators are factories.
* Can also create **bound action creators** - functions that encapsulate the creation and dispatch of an action.
* React-redux uses connect() to dispatch actions.
* Can use bindActionCreators() to automatically create bound action creators

### Reducers
* Designing the State Shape
	* In redux, all the application state is stored as a single object.
	* It's good practice to design the state's shape before coding.
	* Separate different types of data within the state tree.
* Handling Actions
	* Things you must never do inside a reducer:
		* Mutate its arguments
		* Perform side effects like API calls and routing transitions.
		* Call non-pure functions, e.g. `Date.now()` or `Math.random()`
	* Reducers need to be predictable, therefore ensure they *only* return state objects.
* Splitting Reducers
	* **Reducer Composition**: When two or more reducers manage the state tree.

### Store
* **Store**: the object that brings together the actions and reducers.
* The purpose of the store is to hold the application state.
* The store encapsulates the state, i.e. the store acts as the intermediary between the client and the state. Thus, all actions need to dispatched by and all events listened to via the state.
* There is only a single store in each application.

### Data Flow
* Redux architecture revolves around strict unidirection data flow.
* **Strict Unidirection Data Flow**: all data in an application follows the same lifecyle pattern.
* All Redux apps follow same data lifecyle pattern:
	1. You call `store.dispatch(action)`
		* Can call this method from anywhere in the app.
	2. The redux store calls the reducer you gave it
	3. The root reducer may combine the output of multiple reducers into a single state tree.
	4. The redux store saves the complete state tree returned by the root reducer.

### Usage with React
* Presentational and container components
	* Container components are generated via `connect()`, which is apart of react-redux.
	* For small components (AddToDoButton), it is okay to mix function and form.

* Implementing Presentational and Container Components
	* Can use functional components when the components don't need local state or lifecycle methods.
	* Container components are react components that use `store.subscribe()` to read a part of the redux state tree and supply props to a presentational component that renders it.
	* Recommended to use `connect()` when creating container components.
	* To use `connect()`, must first define a special function called `mapStateToProps`. This function transforms data returned the store, with the final transformation being piped to presentational components as props.
	* Container components can also dispatch actions by defining a special function called `mapDispatchToProps`. It recieves `dispatch()` and returns callback props to be injected into presentational components
	* All container components need access to the store so they can subscribe to it.
	* Can use a special react-redux component `<Provider>` to give all components in the application access to the store. Only need to use it once when rendering th root component.

## Study Questions
1. What is the state tree?
2. What is the high-level difference between an action and a reducer?
3. Every action object must contain which property?
4. What is a bound action creator?
5. What are the three things you must never do inside a reducer?
6. What is a concrete example of when to separate the state?
7. What is reducer composition?
8. Why is `combineReducers()` so useful for reducer composition?
9. What is the purpose of the store and what are its operations?
10. What is strict unidirectional data flow?
11. What are the steps of Redux's data lifecycle?
12. What is the benfit of strictly regulating state changes?
13. What's the difference between presentational vs container components?
14. What's the purpose of `mapStateToProps`?
15. What's the purpose of `mapDispatchToProps`?
16. What's the name of the component that connects container components to the store?
