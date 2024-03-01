$(document).ready(function(){
    $("#form").validate({
        rules: {
            fname: 'required',
            sname: 'required',
            email: {
               required: true,
               email: true,
               maxlength: 255,
            },
        
            messages: {
            fname: 'This field is required',
            sname: 'This field is required',
            email: 'Enter a valid email',
          
        },
    }
 });
}); 

