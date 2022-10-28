const newParty = async (event) => {
    event.preventDefault();

    const partyName = document.querySelector('#party-name').value.trim();
    const description = document.querySelector('#description').value.trim();
    const partyDate = document.querySelector('#party-date');

    if (partyName && description) {
        const response = await fetch('/api/party', {
            method: 'POST',
            body: JSON.stringify({ name: partyName, description, party_date: "10-27-2022"}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // console.log(response);
            document.location.replace('/');
        } else {
            alert('Failed to create a post')
        }
    }
};

const deleteParty = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');//will need hdbars to get the right attribute location.
        const response = await fetch(`/api/party/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Sorry, this failed deletion.');
        }
    }
};
// these eventhandlers also need the correct id or class to use these values. 
document
.querySelector('#new-party-on-form')
.addEventListener('submit', newParty);

document
.querySelector('#party-list-on-form')
.addEventListener('click', deleteParty);