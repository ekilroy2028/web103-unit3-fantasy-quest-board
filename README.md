# WEB103 Project 3 - UnityGrid Plaza

Submitted by: Elizabeth Kilroy 

About this web app: About this web app: UnityGrid Plaza is a fantasy-themed virtual community space where adventurers can browse four locations — The Rusty Tankard, The Whispering Woods, Crumbled Spire, and Obsidian Hollow — and view the quests and events happening at each one. Users can also browse and filter all events across every location, with live countdown timers showing time remaining until each event. 

Time spent: 30 hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [X] **The web app uses React to display data from the API**
- [X] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [X]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [X] **The web app displays a title.**
- [X] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

-[x] An additional page shows all possible events
     
-[x] Users can sort *or* filter events by location.

- [x] Events display a countdown showing the time remaining before that event

- [x] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [x] List anything else that you added to improve the site's functionality!

Custom fantasy theme applied throughout, including renamed locations, fantasy-style address data, and themed imagery for each location and event 

Event cards display real photography sourced from Unsplash for each location/event type 

Past events are visually de-emphasized using grayscale styling and reduced opacity to distinguish them from upcoming events 


## Video Walkthrough

Here's a walkthrough of implemented required features:

<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/04a875969b304c34876588f3ca4d8f31" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  GIF tool here

LICEcap
Videos | Library | Loom - 21 June 2026 - Watch Video



## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add. 

        Some challenges encountered while building this app: 

       - Tracking down a missing dotenv.config() call that caused SSL connection errors when connecting to the Render PostgreSQL database 

        -Diagnosing a duplicate/malformed PGUSER entry in the .env file that caused authentication failures 

        -Discovering that the original forked repository excluded commits from the GitHub contribution graph and migrating to a standalone repository to preserve commit history while resolving this 

        - Identifying that several UI elements (location buttons, event card details) were built with hover-to-reveal CSS (opacity: 0 by default) and updating the styling to make them visible by default for better usability 

## License

Copyright [2026] [Elizabeth Kilroy]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
