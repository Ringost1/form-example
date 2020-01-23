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


    // ajax invia i dati a username.php che esegue il controllo e mi restituisce "result"
    $.ajax({
        url: "form/username.php",
        method:"post",
        data: {
            "username": $(this).val()
        },
            
        
        success: function (data) {
            if (data.valid) {
                el.removeClass("is-valid")
                el.addClass("is-invalid");
            } else {
                el.removeClass("is-invalid")
                el.addClass("is-valid");
            }
        },

        dataType: "json"
    });

});

$("#email").on("input", function() {
    var email = $(this).val().trim();
    var el = $(this);


    if (validateEmail(email)) {
        $.post(
            "email.php",
            {
                email: email
            },
            function (data) {
                if (!data.valid) {
                    el.removeClass("is-valid");
                    el.addClass("is-invalid");
                }
                else {
                    el.removeClass("is-invalid");
                    el.addClass("is-valid");
                }
            },
            "json"
        );
    } else {
        el.removeClass("is-valid");
        el.addClass("is-invalid");
    },

});









