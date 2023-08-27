const loadPhone = async (searchFieldvalue, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchFieldvalue}`);
    const phoneData = await res.json();
    displayPhone(phoneData.data, isShowAll)
}


const displayPhone = (phoneData, isShowAll) => {
    const phoneListContainer = document.getElementById('phone-list-container');

    // show new search results and remove previous search results.
    phoneListContainer.textContent = '';

    // display show all button if there are more than 6 phones.
    const showAllContainer = document.getElementById('show-all-container');
    if(phoneData.length > 6 && !(isShowAll)){
        showAllContainer.classList.remove('hidden');
    }else{
        showAllContainer.classList.add('hidden');
    }
    // display only first 6 phones if not show all.
    if(!(isShowAll)){
        phoneData = phoneData.slice(0,6); 
    }

    phoneData.forEach(phone => {
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-base-100 shadow-xl`;
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
            <img src="${phone.image}" alt="" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>Hello</p>
            <div class="card-actions">
                <button onclick = "handleShowDetails('${phone.slug}')" class="btn btn-primary">Details</button>
            </div>
        </div>
        
        `
        phoneListContainer.appendChild(phoneCard);
    })

    // stop the loading spinner now.
    loadPage(false);
}

// show details
const handleShowDetails = async (phoneId) => {
    console.log(phoneId);
    // load single phone data
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneId}`);
    const phoneDetails = await res.json();
    console.log(phoneDetails.data);
}

const handleSearch = (isShowAll) => {
    // start the loading spinner.
    loadPage(true);
    const searchField = document.getElementById('search-field');
    const searchFieldvalue = searchField.value;
    loadPhone(searchFieldvalue, isShowAll);
}

const loadPage = (isLoading) => {
    const loadSpinner = document.getElementById('loading');

    if(isLoading){
        loadSpinner.classList.remove('hidden');
    }else{
        loadSpinner.classList.add('hidden');
    }
}



// handle show all button (not recommended to implement like this. Not the best way!!)

const showAll = () => {
    handleSearch(true);
}