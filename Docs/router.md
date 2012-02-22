Class: Router (#Router)
=======================

Router Method: constructor (#Router: constructor)
-------------------------------------------------

### Syntax: 

    var router = new Router(rules)

### Arguments:

`Array` rules - the rules for matching 
  
### Returns

An `Router` instance.

Router Method: match(#Router: match)
------------------------------------

### Syntax:

    router.match(url);

### Arguments:

`String` url - document.hash - the anchor portion of a URL, including the hash sign(#).
               the hash property is supported in all major browsers.

### Returns:

'Object' - an object containing key/value matching that is passed to the corresponding handler defined in your rules.

### Example

    window.onhashchange = function(url) {
           router.match(location.hash);  
    }



