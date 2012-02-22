Class: Router (#Router)
=======================

Router Method: constructor (#Router: constructor)
-------------------------------------------------

### Syntax: 

    var router = new Router(rules)

### Arguments:

*(*Array*) rules - the rules for matching 
  
### Returns

An `Router` instance.

Router Method: match(#Router: match)
------------------------------------

### Syntax:

    router.match(url);

### Returns:

*(*Object*) - an object containing key/value matching that is passed to the corresponding handler.

### Example

    window.onhashchange = function(url) {
           router.match(location.hash);  
    }



