Input
Users can enter their preferred MSCS course in the TextInput form that the application uses to receive user input.  This input customizes the app experience and enables direct interaction with the course list display.  To further establish the app's visual identity, a picture (icon.png) is fetched from the./assets directory.

Process
An arrow function is a functional component used by the application to process data internally.  In arrays divided into core, depth of study, and capstone courses, it keeps specified MSCS courses.  The application re-renders to reflect any new data and modifies its state in response to user interaction.  Layout elements like ScrollView and View arrange the content, while the StyleSheet component applies internal styling.

Output
The result is a scrollable page that shows the user's favorite course in addition to eight core, two depth of study, and one capstone courses.  A neat, mobile-friendly user interface is ensured with styled headings and a well-organized layout.