import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setterFun] = useState('')
  console.log('component re renders')
  console.log(name,'name==')

  const onChangeUsername = event => {
    setterFun(event.target.value)
  }

  return (
    <MainContainer>
      <NameInput
        type="text"
        placeholder="Your name"
        onChange={onChangeUsername}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser

// 1. React Components
// There are two ways to write React Components.

// Function Components
// Class Components
// Feature	Function Components	Class Components
// State	No	Yes
// Life Cycle Methods	No	Yes
// Props	Yes	Yes
// 2. React Hooks
// React Hooks are special functions that are a new addition to React

// They allow us to use state and other React features(lifecycle methods, context, etc) in the Function Components

// 2.1 Importance of React Hooks
// Easy to reuse logic between the components
// Components become simple and easy to understand
// Less lines of code
// No need of switching between Class & Function Components
// Developers and Companies are gradually adapting to React Hooks
// 2.2 Hooks for Various Purposes
// React provides multiple hooks which can be used for different purposes

// Hook	Purpose
// useState()	Add State to Function Components
// useEffect()	Execute Logic after the Component render
// useContext()	Access the Context value
// 3. State Hook
// State Hook is a built-in Hook that allows us to add state to the Function Components

// Syntax:

// JSX
// useState accepts the initial value as an argument and returns an array with two values: the current state and a function to update it

// In the Class Components, the state is an Object. Where in the Function Components, the state can be of any data type i.e, boolean, number, string, object, etc.

// 3.1 Adding State
// For adding the state to Function Components, import the useState from react and call it inside the component

// File: src/components/GreetUser/index.js

 
// JSX
// Expand
// In the above code, we provided an empty string as the initial value to useState

// 3.2 Updating State
// We can update the state using setter function by passing value/callback function as an argument

// JSX
// Using Value: Update the state using value if the next state is independent of the previous state

// JSX
// Using Callback function: Update the state using callback function if the next state is computed based on the previous state

// JSX
// 3.2.1 Updating State using Value
// File: src/components/GreetUser/index.js

 
// JSX
// Expand
// Class Component:

// When the state updates, the component re-renders only the render method will be called
// Function Component:

// When the state updates, the entire Component will be re-rendered
// Even if the entire component is re-rendered, React will preserve the state variables between the re-renders
// 4. Global Styling
// Sometimes, we may need to apply the styles globally to our application

// For example:

// Applying a font family for all the text in our application
// Overriding some browser default styling
// 4.1 Creating Global Styles with Styled Components
// createGlobalStyle is a helper function provided by styled-components third-party package to generate a special styledComponent that handles global styles

// JSX
// We write global styles in the styledComponents.js file. Inside the GlobalStyle variable we define all global styles.
// We will import GlobalStyle component and place it at the top of React tree. In many react applications, that’s typically the App.js file.
// Example:

// File: src/styledComponents.js

 
// JSX
// Expand
// File: src/App.js

 
// JSX
// Expand
// To know more, you can go through this link.
// 5. Greeting Application Code
// Use the below command to get the Final Code for Greeting Application

