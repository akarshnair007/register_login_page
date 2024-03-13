class landing {
  //property
  database = {
    Milan: { username: "Milan", password: "milan123" },
    Anu: { username: "Anu", password: "anu123" },
    Rohan: { username: "Rohan", password: "rohan123" },
    Raj: { username: "Raj", password: "raj123" },
  };
  //method
  save() {
    if (this.database) {
      localStorage.setItem("database", JSON.stringify(this.database));
    }
  }

  //get data
  getData() {
    this.database = JSON.parse(localStorage.getItem("database"));
  }

  //register
  register() {
    this.getData();
    let user = regUser.value;
    let pswd = regPswd.value;
    if (user == "" || pswd == "") {
      alert("Please enter the username or password");
    } else {
      if (user in this.database) {
        alert("User already exists");
      } else {
        this.database[user] = { username: user, password: pswd };
        this.save();
        alert("User added successfully");
        //for navigation
        window.location = "login.html";
      }
    }
  }

  //login
  login() {
    let luser = loginUser.value;
    let lpswd = loginPswd.value;
    console.log(luser, lpswd);
    this.getData("database");
    if (luser == "" || lpswd == "") {
      alert("The username or password is empty");
    } else {
      if (luser in this.database) {
        if (this.database[luser].password == lpswd) {
          alert("Login successfull");
          localStorage.setItem("user", luser);
          window.location = "home.html";
        } else {
          alert("Wrong username or password");
        }
      } else {
        alert("Wrong username or password");
      }
    }
  }
}
const obj = new landing();
obj.getData();
