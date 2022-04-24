# celsius-fahrenheit
Single Page Application Utility to convert Celsius to Fahrenheit and vice versa.

## How to Deploy the App
This will build the application and deploy it to the github pages static server.

1. In order to build the app, ensure that node installation is at least >=16
2. Then simply run: `$ npm run deploy`

## How to run the App
- Run `$ npm start` and a simple server will be launched with the app.
- Alternatively, a user can simply navigate to the following link: https://codyb29.github.io/celsius-fahrenheit/
  - Here an already deployed version of the app is running

## Solution Description
Architecture/Framework Rationale:

In order to achieve a single page application architecture, I felt that React would be the way to go. React has a utility called Create React App which allows for the quick bootstrap of developing single page applications in react very quickly. For the purposes of an MVP and the complexity of the project, a bootstrap utility felt like the right way to go. From there, in order to save time with various HTML/CSS styling issues, I decided to use a popular React component framework called MUI. This allowed me to quickly utilize modern design that is familiar to many users. Having familiar design components is integral for users to know how to use your website upon first visit. Moreover, the component is widely used and should be well tested to reduce the frequency of common bugs. MUI components work very well with theming the app, allowing me to include light and dark themes without the hassle of doing it manually.

UI Rationale:

The UI was broken down into two parts
- Theming
- Content

These two functionalities were the main modules of the application. Theming was primarily in charge of handling the light and dark capabilities of the program while the content could focus on the conversion tool itself. Decoupling the logic allows for each component to focus on what is important to its own functionality while leaving irrelevant rendering logic elsewhere. Theming was selected to be a switch found in the title bar as it is a good spot to place introduction information about the app and quick configuration settings such as a theme switch. From there, the content was centered and placed within a card component to highlight what's important.
Within the card, there's the toggle to switch what is converted to what. Seeing that there is only 2 options, a dropdown was not necessary. A bidirectional arrow was chosen as it is a universal sign to swap values and to signal to the user that this is the mechanism to switch the conversion order. A good design would have minimal instructions as the placement of tools should be intuitive enough that users should just know how to use it. A single input field is provided to the user to input the degree they would like to convert. The other field is disabled to make it clear that the input should go in the other input box.
As the user begins to input into the field, the disabled text box will begin converting on the fly and will make it clear to the user how the utility operates. This provides instant feedback to the user, saving the user the effort to have to navigate to a button or something, making full use of React's rendering capabilities. To ensure optimal clarity, the universal degree symbol is added at the end of each text box to signal to the user what input to provide and what output is being displayed. They are displayed side by side, to show a natural transition from one unit to another. They are also in the respective positions aligned with the title for more clarity.
