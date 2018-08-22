/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests to be run against the application.
 */

/* Placing all of the tests within the $() function,
 * since some of these tests may require DOM elements, to ensure they don't run until the DOM is ready.
 */
$(function() {
    // RSS Feeds Suite
    describe('RSS Feeds', function() {
        // Tests to make sure that the allFeeds variable has been 
        // defined and that it is not empty.
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Loops through each feed
        // in the allFeeds object and ensures it has a URL defined
        // and that the URL is not empty.
        it('Each feed has a URL defined', function() {
         for (feed in allFeeds) {
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).not.toBe(0);
         }
        });
        // Loops through each feed
        // in the allFeeds object and ensures it has a name defined
        // and that the name is not empty.
        it('Each feed has a name defined', function() {
            for (feed in allFeeds) {
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name.length).not.toBe(0);
         }
           });
    });


    //The menu Suite
    describe('The menu', function() {
        // ensures the menu element is
        // hidden by default.
        it('Menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
        // Ensures the menu changes visibility when the menu icon is clicked. 
        it('Menu visabillity on click', function() {
            // menu display when clicked 
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
            // hide menu when clicked again.
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
        })
        
    })

    //Initial Entries Suite
    describe('Initial Entries', function(){
            //Run a asynchronous request
            beforeEach(function(done) {
                loadFeed(0, function(){
                        done();
                }) 
            });
            //Ensures there is at least a single .entry element within the .feed container.
            it('At least a single entry element in feed container', function(){
                expect($('.feed .entry').length).toBeGreaterThan(0);  
             });
             
      
        



        })


    })

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    //New Feed Selection
    describe('New Feed Selection', function(){

    })

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

