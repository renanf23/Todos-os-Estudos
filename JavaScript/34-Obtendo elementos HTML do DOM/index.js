function show() {
  let contactList = document.getElementById("contact-list");

  console.log(contactList);

  let listElements = document.getElementsByTagName("li");
  console.log(listElements);

  let contactimputs = document.getElementsByClassName("contact-input");
  console.log(contactimputs);

  let contact = document.querySelectorAll("#contact-list > li > label");
  console.log(contact);

  let contact1 = document.getElementsByName("contact1");
  console.log(contact1);

  let firstContact = document.querySelector("#contact-list > li > label");
  console.log(firstContact);
}
