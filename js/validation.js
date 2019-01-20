$(document).ready(function() {
    $("#first_name").focus();
    
    $("#registration_form").validate({
        rules: {
            first_name: {
                required: true,
                lettersonly: true },
            last_name: {
                required: true,
                lettersonly: true },    
            email: {
                required: true,
                email: true },
            email2: {
                required: true,
                equalTo: "#email" },    
            phone: {
                required: true,
                phoneUS: true },
            address1: {
                required: true },
            city: {
                required: true,
                lettersonly: true },
            state: {
                required: true,
                rangelength: [2, 2] },
            zip: {
                required: true,
                rangelength: [5, 10]},
            ccard: {
                required: true},
            ccardnumber: {
                required: true,
                creditcard: true },
            
                
        }, // end rules
        messages: {
            first_name: {
                required: "Please supply a first name",
                lettersonly: "Letters only please" },
            last_name: {
                required: "Please supply a last name",
                lettersonly: "Letters only please" },    
            email: {
                required: "Please supply an email address.",
                email: "This is not a valid email address." },
            email2: {
                required: "Please supply an email address.",
                equalTo: "The emails do not match" },    
            phone: {
                required: "Please supply a phone number.",
                phoneUS: "Numbers only please." },
            address1: {
                required: "Please supply a street address." },
            city: {
                required: "Please supply a city.",
                lettersonly: "Letters only please" },
            state: {
                required: "Please supply a state.",
                rangelength: "Two letters for state only." },
            zip: {
                required: "Please supply a zip code.",
                rangelength: "5 or 10 digit zip code" },
            ccard: {
                required: "Please choose a credit card."},
            ccardnumber: {
                required: "Please supply a credit card number.",
                creditcard: "This is not a valid credit card number."},
            
            
        } // end messages 
    }); // end validate
    
    $( "#first_name, #last_name" )
  .keyup(function() {
    var value = $( this ).val();
    $( "#name" ).text( value );
  })
  .keyup();
    
}); // end ready