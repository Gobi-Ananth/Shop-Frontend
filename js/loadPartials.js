function includeHTML() {

    // Load Header
    const header = document.getElementById('header');
    if (header) {
        fetch('./../partials/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                header.innerHTML = data;
                let menuHeader = document.querySelector('header');
                let menuBtn = document.querySelector('.menu-btn');
                let isMenuOpen = false; 
                menuBtn.onclick = function() {
                    menuHeader.classList.toggle('open');
                    isMenuOpen = !isMenuOpen;
                    if (isMenuOpen) {
                        menuBtn.setAttribute('name', 'close');
                    } else {
                        menuBtn.setAttribute('name', 'menu');
                    }
                };
            })
            .catch(error => {
                console.error('Error loading header:', error);
            });
    }

    // Load Footer
    const footer = document.getElementById('footer');
    if (footer) {
        fetch('./../partials/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                footer.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
            });
    }

    // Load Cart Modal
    const cartModalContainer = document.getElementById('cart-modal-container');
    if (cartModalContainer) {
        fetch('./../partials/cart-model.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                cartModalContainer.innerHTML = data;
                const cartBtn = document.querySelector('.cart');
                const closeBtn = document.querySelector('.close-button');
                const cartModal = document.querySelector('.cart-modal');
                if (cartBtn) {
                    cartBtn.onclick = function() {
                        cartModal.style.display = 'flex'; 
                    };
                }
                if (closeBtn) {
                    closeBtn.onclick = function() {
                        cartModal.style.display = 'none'; 
                    };
                }
            })
            .catch(error => {
                console.error('Error loading cart modal:', error);
            });
    }



    // Load Product Card
    const productCard = document.getElementById('product-card');
    if (productCard) {
        fetch('./../partials/product-card.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                productCard.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading product card:', error);
            });
    }

    // Load Related Product Card
    const relatedProductCard = document.getElementById('related-product-card');
    if (relatedProductCard) {
        fetch('./../partials/related-products-card.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                relatedProductCard.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading related product card:', error);
            });
    }

    // Load Paginator
    const paginator = document.getElementById('paginator');
    if (paginator) {
        fetch('./../partials/paginator.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                paginator.innerHTML = data;
            })
            .catch(error => {
                console.error('Error loading paginator:', error);
            });
    }

    // Load Product Detail
    const productDetail = document.getElementById('product-detail');
    if (productDetail) {
        fetch('./../partials/product-detail.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(data => {
                productDetail.innerHTML = data;
                const thumbnails = document.querySelectorAll('.thumbnail-col img');
                const mainImage = document.getElementById('main-image');
                thumbnails.forEach(thumbnail => {
                    thumbnail.onclick = function() {
                        mainImage.src = thumbnail.src;
                    };
                });
            })
            .catch(error => {
                console.error('Error loading product detail:', error);
            });
    }
}

window.onload = includeHTML;
