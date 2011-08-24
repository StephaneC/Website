<?php
     mail('stephane.castrec@gmail.com', '[Message]'.$_POST["name"].' de '.$_POST["mail"], $_POST["message"]);
     header('Location: index.html'); 
?> 