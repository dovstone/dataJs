<!DOCTYPE html>
<html lang="fr" data-app-config='{{ getAppConfig() }}'>
<head>
    <title>-</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script type="text/javascript" charset="utf-8" src="jquery.datajs.obfus.js?v=<?= rand() ?>"></script>
</head>
<body>

<a href="#" data-js="front={click:helloWorld}">Click me to alert Hello World!</a>

<script type="text/javascript">
$(function(){
    
    "use strict";

    $.dataJs({
        front: {
            helloWorld: function( $trigger, e, dataJs){
                alert('Hello World!');
            }
        }
    });
});
</script>

</body>
</html>