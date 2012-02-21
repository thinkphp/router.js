var Router = new Class({

    _compiled: [],

    _rules: [],

    initialize: function(rules) {

         this._rules = rules;

         if(this._rules.length == 0) {
              return;  
         } 

         this._compile();
    },

    _compile: function() {
 
         var n = this._rules.length;
           
         for(var i=0;i<n;i++) {

             var keys = [],

                 reg = this._rules[i][0].replace(/:[^\/]+/gi,function(key){

                 keys.push(key.substring(1));

                 return "([^\/]+)";
             });

             this._compiled.push({
                  keys: keys,
                  handler: this._rules[i][1],
                  re: new RegExp(reg)
             });
         }  

    },

    match: function(url) {

           var n = this._compiled.length,
               data = {}

               for(var i=0;i<n;i++) {

                   var match = url.match(this._compiled[i].re);

                   if(match) {

                      var keys = this._compiled[i].keys,

                          handler = this._compiled[i].handler,

                          m = keys.length

                      for(var j=0;j<m;j++) {

                          data[keys[j]] = match[j+1]
                      }                             
                             
                      if(handler) {

                         handler(data)
                      }       

                      return data
                   }  
               }              
    }

});