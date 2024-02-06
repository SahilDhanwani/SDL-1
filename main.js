function validateForm() {
    var first_name = document.signin.first_name.value;
    var last_name = document.signin.last_name.value;
    var email = document.signin.email.value;
    var number = document.signin.number.value;
    var password = document.signin.password.value;
    var confirm_password = document.signin.confirm_password.value;

    if (first_name_validation(first_name)) {
        if (last_name_validation(last_name)) {
            if (number_validation(number)) {
                if (email_validation(email)) {
                    if (password_validation(password)) {
                        if (confirm_password_validation(password, confirm_password)) {
                            return true;
                        }
                    }
                }
            }
        }
    }
    return false;
}

function first_name_validation(first_name) {
    var first_name_len = first_name.length;
    var letters = /^[A-Za-z]+$/;
    if (first_name_len == 0 || !first_name.match(letters)) {
        alert("First name should not be empty & shold have only letters");
        first_name.focus();
        return false;
    }
    return true;
}

function last_name_validation(last_name) {
    var last_name_len = last_name.length;
    var letters = /^[A-Za-z]+$/;
    if (last_name_len == 0 || !last_name.match(letters)) {
        alert("Last name should not be empty & shold have only letters");
        last_name.focus();
        return false;
    }
    return true;
}

function number_validation(number) {
    var number_len = number.length;
    if (number_len != 10) {
        alert("Number should be of exactly 10 digits");
        number.focus();
        return false;
    }
    return true;
}

function email_validation(email) {
    var email_len = email.length;
    if (email_len == 0) {
        alert("Email should not be empty");
        email.focus();
        return false;
    }
    return true;
}

function password_validation(password) {
    var password_len = password.length;
    if (password_len < 6) {
        alert("Password should be of atleast 6 characters");
        password.focus();
        return false;
    }
    return true;
}

function confirm_password_validation(password, confirm_password) { 
    if (password != confirm_password) {
        alert("Password & Confirm Password should be same");
        confirm_password.focus();
        return false;
    }
    return true;
}