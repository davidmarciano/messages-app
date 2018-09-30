# Messages app
This project is the UI part of messages app which communicate with messages-app-service to complete a full stack application.
The project created with create-react-app, use Axios to communicate with the server and styled components for styling.

# Structure
There are 3 main components which helps the app works.

1. App.js - Is where you can find all the logic and application state changes. It's use the api.js helper to communicate with the server.
   The App.js has a Wrapper components which includes 2 childrens - FormSection and MessagesSection.
2. FormSection.js - Is a presentational component which have an Email input, Text area and submit button. It gets all the parameters and      functionallity from the App.js component.
3. MessagesSection.js - Also a presentational component which gets all parameters and functionallity from App.js. This section has 2 main    parts - Filter input to filter search terms from the given data of the MessagesBox.
   MessagesBox which show the data of the users comments.
