# DataJs
DataJs is as simple and lightweight Javascript events listener.

## Syntax
We use html5 data attribute approach to bind our event.   

Here is the syntax to bind a single event: `data-js="front={click:helloWorld}"`.    
Here is the syntax to bind multiple events: `data-js="front={click|keyup:helloPlanet;mouseover:heyYou}"`.    

### Explanation  
- `data-js`   
html5 attribute **data-** followed by **js** tells the plugin that this element is going to be bound by an event.    

- `front`   
**front** is an arbitrairy key we use. See it as the name of the object of our element's event. It is case sensitive.   

- `click` ,  `keyup` , `mouseover`      
These are the types of our javascript native events we need to bind to our element.    

- `helloWorld`, `helloPlanet`, `heyYou`     
These are arbitrairies callbacks, chosen for example. They individually take three parameters. There are case sensitive.   

## Binding Single event

Notice the following symbols: `=`, `{`, `:` and `}`.    
In one word, think of this syntax as your are declaring a classic variable object that contains a function. Such as this following code that we would do:    

    <script>
      $(function(){
            var front = {
                helloWorld: function(){
                  // your code goes here...
                }
            }
      });
    </script>

The above code will be as follow:

    <script>
      $(function(){
            $.dataJs({
                front: {
                  // triggered on "click" event type
                  helloWorld: function( $trigger, e, dataJs ){
                    // your code goes here...
                  }
                }
            });
      });
    </script>


## Binding Multiple events

Notice the following symbols added: `|` and `;`.    
**|** is used to separate multiple javascript native events types while **;** is used to separate blocks of events.     
In one word, think of this syntax as your are declaring a classic variable object that contains multiple functions. Such as this following code that we would do:    

    <script>
      $(function(){
            var front = {
                helloPlanet: function(){
                  // your code goes here...
                }
            }
      });
    </script>

The above code will be as follow:

    <script>
      $(function(){
            $.dataJs({
                front: {
                  // triggered both on "click" and "keyup" events type
                  helloPlanet: function( $trigger, e, dataJs ){
                    // your code goes here...
                  },
                  // triggered on "mouseover" event type
                  heyYou: function( $trigger, e, dataJs ){
                    // your code goes here...
                  }
                }
            });
      });
    </script>

## Parameters
The callback accept three parameters, **$trigger**, **e**, **dataJs**.    

- `$trigger`   
The jQuery model of the element we bound the event on.  

- `e`   
The javascript *event* object.

- `dataJs`   
Your whole object itself.   
Usefull in case you need to trigger an event directly from the code and not via an element.
