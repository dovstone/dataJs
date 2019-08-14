# DataJs
DataJs is as simple and lightweight Javascript events listener.

## Syntax
We use html5 data attribute approach to bind our event.   

Here is the basic syntax to attach a single event: `data-js="front={click:helloWorld}"`.    

**Explanation**   
- `data-js`   
html5 attribute **data-** followed by **js** tells the plugin that this element is going to be bound by an event.    

- `front`   
**front** is an arbitrairy key we use. See it as an object of our element's event.   
Case sensitive.   

- `click`   
**click** is the type of our javascript native event we need to bind to our element.    

- `helloWorld`   
**helloWorld** is the callback. It takes three parameters.   
Case sensitive.   

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
                  helloWorld: function( $trigger, e, dataJs ){
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
