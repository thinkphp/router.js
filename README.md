Router
======

This plugin provides methods for routing client-side pages and connecting them to actions and events.

How to use
----------
First at all, you must create a set of rules that represents the patterns for url matching.

Get started by creating a set of rules:

               var rules = [
               ["/:user/forge/:action/",
               function(data) {       
                     console.log("My Profile",data.user);
               }],
               ["/forge/:action/",
               function(data) {
                     console.log("My Profile",data.action);
               }],
               ["/:user/settings/:action/",
               function(data) {
                     console.loglog("Edit your profile",data.user);
               }],
               ["/logout/",
               function(data) {
                     console.log("Logout",data);
               }]
               ]; 

':key' acts as placeholders resulting in matching properties on the data object.


Create, simply, a new object `Router`.

               var router = new Router(rules);

Be sure to call the method "match". This method iterates over the stored rules
and if a match is found, the corresponding handler is fired with a single argument, an object containing
properties matching the variable placeholders in the matching rule, otherwise returns undefined.

               window.onhashchange = function() {
                       router.match(location.hash);
               }