function submitReview() {
    const name = document.getElementById('reviewer-name').value;
    const review = document.getElementById('review-text').value;
    const rating = document.getElementById('review-rating').value;

    if (name === '' || review === '' || rating === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const reviewContainer = document.getElementById('reviews');
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';

    reviewElement.innerHTML = `
        <h3>${name}</h3>
        <p>Nota: ${rating}/5</p>
        <p>${review}</p>
    `;

    reviewContainer.appendChild(reviewElement);

    document.getElementById('review-form').reset();
}

