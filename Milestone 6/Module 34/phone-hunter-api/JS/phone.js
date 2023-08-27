const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const phoneData = await res.json();
    console.log(phoneData.data);

}

loadPhone();