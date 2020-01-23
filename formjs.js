function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



$(".btn").click(function (e) {

    var first = $(".first-name").val().trim();
    var last = $(".last-name").val().trim();
    var user = $(".user").val().trim();
    var pswd = $(".pswd").val().trim();
    var pswdC = $(".pswdC").val().trim();
    var email = $(".email").val().trim();


    if (first.length < 4) {

        e.preventDefault();
        return false;
        
    }
    if (last.length < 4) {

        e.preventDefault();
        return false;
        
    }

    if (user.length < 8 || user.length > 21) {

        e.preventDefault();
        return false;
        
    }

    if (pswd != pswdC) {

        e.preventDefault();
        return false;
        
    }

    if (!validateEmail(email) ){
        
        e.preventDefault();
        return false;
        
    }

    
    

    //e.preventDefault();
    //console.log("eja");

    //if (!validateForm()) {
        //e.preventDefault();
        
    //}

   

    

});


// Validazione Username

$("#username").on("blur", function() {

    var el = $(this);


    // ajax invia i dati a username.php che esegue il controllo e mi restitutisce "result"
    $.ajax({
        url: "form/username.php",
        method:"post",
        data: {
            "username": $(this).val()
        },
            
        
        success: function (data) {
            if (data.valid) {
                el.addClass("is-valid");
            } else {
                el.addClass("is-invalid");
            }
        },

        dataType: "json"
    });

});





