const button = document.querySelector('button');
const form = document.querySelector('#form');

if (button) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        form.style.display = 'none';


        const name = document.querySelector('#name').value;
        const college = document.querySelector('#college').value;
        const internship = document.querySelector('#internship').value;
        const rating = document.querySelector('#Rating').value;

        const url = `certificate.html?name=${encodeURIComponent(name)}&college=${encodeURIComponent(college)}&internship=${encodeURIComponent(internship)}&rating=${encodeURIComponent(rating)}`;

        window.open(url, '_blank');
    });
}

const certName = document.querySelector('#nam');
if (certName) {
    const params = new URLSearchParams(window.location.search);
    certName.textContent = params.get('name');
    document.querySelector('.cllg').textContent = params.get('college');
    document.querySelector('.topic').textContent = params.get('internship');

    const ratingVal = params.get('rating');
    let stars = 0;
    switch (ratingVal) {
        case "Excellent": stars = 5; break;
        case "Satisfactory": stars = 4; break;
        case "Average": stars = 3; break;
        case "Bad": stars = 2; break;
        default: stars = 1;
    }

    let starsHTML = "";
    for (let i = 0; i < stars; i++) {
        starsHTML += `<i class="ri-star-s-fill"></i>`;
    }
    document.querySelector('.rating').innerHTML = starsHTML;
}
