function createUser(element) {
    return document.createElement(element);
  }
  
  function append(parent, element) {
    return parent.appendChild(element);
  }
  
  fetch("https://randomuser.me/api/?results=25")
    .then(resp => resp.json())
    .then(function(data) {
      var users = data.results;
      return users.map(function(user) {
        var tr = createUser("tr"),
          tdimg = createUser("td"),
          tdname = createUser("td"),
          tdemail = createUser("td"),
          tdphone = createUser("td"),
          img = createUser("img"),
          name = createUser("name"),
          email = createUser("email"),
          phone = createUser("phone");
        img.src = `${user.picture.thumbnail}`;
        name.innerHTML = `${user.name.first} ${user.name.last}`;
        email.innerHTML = `${user.email}`;
        phone.innerHTML = `${user.phone}`;
        append(tdimg, img);
        append(tdname, name);
        append(tdemail, email);
        append(tdphone, phone);
        append(document.getElementById("users"), tr);
        append(document.getElementById("users"), tdimg);
        append(document.getElementById("users"), tdname);
        append(document.getElementById("users"), tdemail);
        append(document.getElementById("users"), tdphone);
      });
    })
  
    .catch(function(error) {
      console.log(error);
    });
  