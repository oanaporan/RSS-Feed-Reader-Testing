/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests to be run against the application.
 */

/* Placing all of the tests within the $() function,
 * since some of these tests may require DOM elements, to ensure they don't run until the DOM is ready.
 */
$(function() {
    // This suite is all about the RSS feeds definitions,
    // the allFeeds variable in the application.
    describe('RSS Feeds', function() {
        // Tests to make sure that the allFeeds variable has been 
        // defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Loops through each feed
        //  in the allFeeds object and ensures it has a URL defined
        //   and that the URL is not empty.
        allFeeds.forEach(function(feed) {
            it('each feed has a URL defined', function() {
                expect(feed).toContain(URL);
                expect(feed.url).not.toBeUndefined();
            })(allFeeds[i]);
        })
       


        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('each feed has a name defined', function() {
            expect()
        })
    });


    /* The menu suite */
    describe('The menu', function(){
        // ensures the menu element is
        // hidden by default.
        it('nemu hidden', function(){

        })
        // Ensures the menu changes visibility when the menu icon is clicked. 
        // Has two expectations: 
        // - does the menu display when clicked 
        // - does it hide when clicked again.
        it('menu hidden', function(){

        })
        
        it('menu icon appears', function(){

        })

    })

    //Initial Entries Suite //
    describe('Initial Entries', function(){
        // Ensures when the loadFeed
        // function is called and completes its work, there is at least
        // a single .entry element within the .feed container.
        // it('loadFeed completed and has at least one entry', function(){

        })


    })

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
