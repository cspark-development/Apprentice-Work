/*
Directions: Check your understanding of the instruction you just received by completing the activity below.

Title and Content components have been created for you. Import and render these in App.js.

In App.js:

    Above the function definition:
        Import the Title component using the import NAME from LOCATION syntax.
        Import the Content component using the import NAME from LOCATION syntax.
    Inside the function `App` return statement's fragment brackets (the brackets that look like <> and </>):
        Render one Title component.
        Render TWO Content components.
    Run your code.

    View your application by using the link in the Sphere console. The page should look like the image below.
*/
import React from "react";
// Import components here
import Title from "./components/Title";
import Content from "./components/Content";

function App() {
    return (
        <>
	    <Title/>
	    <Content/>
	    <Content/>
        </>
    );
}

export default App;
