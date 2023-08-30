const fetchAIHubData = async (seeMoreCards) => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const AIHubData = await res.json();
    displayAllCards(AIHubData.data.tools, seeMoreCards);
}

const displayAllCards = (AIHubData, seeMoreCards) => {
    const allCards = document.getElementById('all-cards container');

    const seeMoreContainer = document.getElementById('seeMoreContainer');

    if(AIHubData.length > 3 && !(seeMoreCards)){
        seeMoreContainer.classList.remove('hidden');
    }else{
        seeMoreContainer.classList.add('hidden');
    }

    if(!(seeMoreCards)){
        AIHubData = AIHubData.slice(0,3);
    }

    AIHubData?.forEach(AIHub => {
        const div = document.createElement('div');
        div.classList = 'card card-compact bg-base-100 shadow-xl';
        div.innerHTML = `
        <figure><img src="${AIHub.image ? AIHub.image : 'Image not available'}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title text-2xl font-semibold">
                Features:
            </h2>
            <ol type ='A'>
                <li>${AIHub.features[0]}</li>
                <li>${AIHub.features[1]}</li>
                <li>${AIHub.features[2]}</li>
            </ol>
            <hr>
            <h2 class="text-2xl font-semibold">${AIHub.name}</h2>
            <p class="text-[#585858] text-base font-medium">Published in: ${AIHub.published_in}</p>
            <p class="text-right text-[#EB5757] font-bold hover:cursor-pointer">--></p>
        </div>
        
        `
        allCards.appendChild(div);
    });
}


const seeMore = () => {
    fetchAIHubData(true)
}

fetchAIHubData();