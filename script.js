document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const monthTexts = [
        'Month 1',
        'Month 2',
        'Month 3',
        'Month 4',
        'Month 5',
        'humble beginnings lmaooo',
        'extra fav pic!'
    ];

    function updateProgressText(index) {
        const progressText = document.getElementById('progressText');
        progressText.querySelector('p').textContent = monthTexts[index] || 'Month ' + (index + 1);
    }

    swiper.on('slideChange', function () {
        updateProgressText(swiper.realIndex);
    });

    updateProgressText(swiper.realIndex); // Initial call to set the progress text
});
