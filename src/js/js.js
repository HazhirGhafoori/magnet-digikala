window.onload = function() {
    let username, password;

    const users = {
        User1: {
            Name: "Hazhir Ghafoori",
            Password: "12345",
            Role: "ADMIN",
        },
        User2: {
            Name: "Reza Alizade",
            Password: "54321",
            Role: "USER",
        },
    }


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