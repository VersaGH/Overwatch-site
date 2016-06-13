<script type="text/javascript">

      function validate()
      {
      
         if( document.contactform.name.value == "" )
         {
            alert( "Please enter your name!" );
            document.contactform.name.focus() ;
            return false;
         }
         
         if( document.contactform.mail.value == "" )
         {
            alert( "Please enter your Email!" );
            document.contactform.mail.focus() ;
            return false;
         }
    
    var emailID = document.contactform.mail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
         
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.contactform.mail.focus() ;
            return false;
         }
         
                  
         return( true );
      }
   //-->
</script>