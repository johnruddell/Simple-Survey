Welcome to my spin on a simple survey with Reactjs and javascripts new ES6 syntax!
to view it in action open index.html in the templates folder

Folder structure

    app - contains all views styles and everything related to your app.
        actions - flux form actions to dispatch events
        assets - sass files for styling
        constants - flux form constants for telling the store what event was dispatched
        dispatcher - the actual dispatcher to dispatch an event
        elements - generic react components to be used on multiple views
        helpers - any helper functions you want
        lib - downloaded React to make imports faster
        stores - flux form stores that register a dispatched event, handle the data, and emit a change for react to update its view
        views - all of the base views for your app
    build - compiled when running duo. import these two files in your template
    components - duo compiles the github repos here
    node_modules - node dependencies (only used for the initial build to get duo installed and running)
    templates - your html template to load the page

To get this up and running use the following

    run 'npm install' (may need sudo) from the root directory. This installs everything in package.json.
    Then, run 'npm run build' to run duo and activate the watcher. The compiled js and sass can then be found in /build/entry.<type>

    All React views are in /views (which can be reused). All global / generic components (such as a modal) should go in the elements folder
    /templates contains the main entry html file.


