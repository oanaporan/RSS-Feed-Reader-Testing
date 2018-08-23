# Test-Driven Development Project

A web-based application that reads RSS feeds, includes testing with  Jasmine 2.1.2, and DOM Manipulation.


## Tests Developmet: 

1. RSS Feed test Suite with following Specs:
   * A test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
   * A test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
2. The Menu test Suite with the following Specs:
   * A test that ensures the menu element is hidden by default, while analyzing the HTML and the CSS to determine how to performe the hiding/showing of the menu element.
   * A test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
3. A test Suite named Initial Entries with the following specs:
   * Test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
4. A test Suite named New Feed Selection:
   * test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
5. No test is dependent on the results of another.
6. Callbacks are used to ensure that feeds are loaded before they are tested.
7. Implement error handling for undefined variables and out-of-bound array access.

## Installation and running the app

Download the files from the repository and open the index.html in your local browser. 




