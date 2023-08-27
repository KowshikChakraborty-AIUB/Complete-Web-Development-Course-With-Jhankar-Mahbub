const loadPhone = async (searchFieldvalue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchFieldvalue}`);
    const phoneData = await res.json();
    displayPhone(phoneData.data)
}


const displayPhone = phoneData => {
    const phoneListContainer = document.getElementById('phone-list-container');

    // show new search results and remove previous search results.
    phoneListContainer.textContent = '';
    
    phoneData.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        
        `
        phoneListContainer.appendChild(phoneCard);
    })
}

const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchFieldvalue = searchField.value;
    loadPhone(searchFieldvalue);
}