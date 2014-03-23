fade.js
=======

Plugin that makes your site more readable as it makes content fade away when not necessary for the user

###Usage:

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script type="text/javascript" src="fade-min.js"></script>
    <script type="text/javascript">
        $(function(){
            $(".menu").fadejs({
                fadeOutSpeed: 4000,
                fadeInSpeed: 300,
                opacity: 0.14
            });
        });
    </script>
