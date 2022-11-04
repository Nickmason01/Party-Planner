// allows authorized user to post a new party.
const newParty = async (event) => {
  event.preventDefault();

  const partyName = document.querySelector("#party-name").value.trim();
  const description = document.querySelector("#description").value.trim();
  const partyDate = document.querySelector('#party-date').value;

  if (partyName && description && partyDate) {
    console.log(partyDate)
    const response = await fetch("/api/party", {
      method: "POST",
      body: JSON.stringify({
        name: partyName,
        description: description,
        party_date: partyDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create a post");
    }
  }
};
// allows authorized user to delete party. 
const deleteParty = async (event) => {
 
  if (event.target.hasAttribute("data-id")) {

    const id = event.target.getAttribute("data-id"); 
   
    const response = await fetch(`/api/party/${id}`, {
      method: "DELETE",
    });
    // lets us pass the value only of message.
    let {message} = await response.json();
    if (response.ok) {
      document.location.replace("/profile");
    } else {
      console.log(message);
      alert(message);
    }
  }
};

document
  .querySelector("#new-party-on-form")
  .addEventListener("submit", newParty);

  // flatpickr. Used as a month, day, year calendar and also adds the time of day a well.
flatpickr('#party-date', {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    altInput: true,
    altFormat: 'F j, Y',
})