const newParty = async (event) => {
    event.preventDefault();

    const partyName = document.querySelector('#party-name').ariaValueMax.trim();
    const description = document.querySelector('#description');
    const partyDate = document.querySelector('#party-date');

    if (partyName && description && partyDate) {
        const response = await fetch('/api/party', {
            method: 'POST',
            body: JSON.stringify({ partyName, description, partyDate}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create a post')
        }
    }
};