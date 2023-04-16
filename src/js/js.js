window.onload = function() {
    let username, password;



    document.getElementById("signup").onclick = function() {
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;
        password = String(password);

        if (password == '') {
            document.getElementById("enterPassword").innerHTML = 'لطفا پسورد را وارد نمایید!';
        }


        console.log("Your User Name is: " + username + " Your password is: " + password);
        console.log("ok");




    }

}