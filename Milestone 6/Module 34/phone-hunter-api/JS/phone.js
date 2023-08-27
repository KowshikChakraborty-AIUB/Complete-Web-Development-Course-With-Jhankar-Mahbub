const loadPhone = async (searchFieldvalue) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchFieldvalue}`);
    const phoneData = await res.json();
    displayPhone(phoneData.data)
}


const displayPhone = phoneData => {
    const phoneListContainer = document.getElementById('phone-list-container');

    // show new search results and remove previous search results.
    phoneListContainer.textContent = '';

    // display show all button if there are more than 6 phones.
    const showAllContainer = document.getElementById('show-all-container');
    if(phoneData.length > 6){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }

    // display only first 6 phones.
    phoneData = phoneData.slice(0,6); 

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

    // stop the loading spinner now.
    loadPage(false);
}

const handleSearch = () => {
    // start the loading spinner.
    loadPage(true);
    const searchField = document.getElementById('search-field');
    const searchFieldvalue = searchField.value;
    loadPhone(searchFieldvalue);
}

const loadPage = (isLoading) => {
    const loadSpinner = document.getElementById('loading');

    if(isLoading){
        loadSpinner.classList.remove('hidden');
    }else{
        loadSpinner.classList.add('hidden');
    }
}