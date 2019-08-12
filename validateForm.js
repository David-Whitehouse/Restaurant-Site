function validateForm() {
    var name = document.forms ["contactUs"]["name"].value;
	var email = document.forms ["contactUs"]["email"].value;
	var phone = document.forms ["contactUs"]["phone"].value;
    if (name == "") {
        alert("Name is a required field");
        return false;
    }
	if (email == "") {
        alert("Email is a required field");
        return false;
    }
	if (phone == "") {
        alert("Phone is a required field");
        return false;
    }
}	