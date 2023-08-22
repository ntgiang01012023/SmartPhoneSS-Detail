function changeIcon() {
  var heartIcon = document.getElementById("heart-icon");
  if (heartIcon.classList.contains("fa-regular")) {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
  } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
  }
}



const districtsByCity = {
  hanoi: ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng", "Đống Đa", "Tây Hồ", "Cầu Giấy", "Thanh Xuân", "Hoàng Mai"],
  danang: ["Hải Châu", "Thanh Khê", "Sơn Trà", "Ngũ Hành Sơn", "Liên Chiểu"],
  hochiminh: ["Quận 1", "Quận 2", "Quận 3", "Quận 4", "Quận 5", "Quận 6", "Quận 7", "Quận 8"]
};
  
function populateDistricts() {
  const citySelect = document.getElementById("city");
  const districtSelect = document.getElementById("district");
  const selectedCity = citySelect.value;
  
  districtSelect.innerHTML = "";
  districtsByCity[selectedCity].forEach(district => {
    const option = document.createElement("option");
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });
}
  
populateDistricts();


const desContent = document.querySelector('.info-left-des-content-p');
const seeMoreButton = document.getElementById('see-more-content');
let isContentExpanded = false;

seeMoreButton.addEventListener('click', function() {

  const computedStyles = window.getComputedStyle(desContent);

  if (computedStyles.maxHeight === '190px') {
    desContent.style.maxHeight = '680px';
    seeMoreButton.innerHTML = 'Thu gọn bài viết <i class="fa-solid fa-caret-up"></i>';
    desContent.classList.add('open');
  } else {
    desContent.style.maxHeight = '190px';
    seeMoreButton.innerHTML = 'Xem thêm bài viết <i class="fa-solid fa-caret-down"></i>';
    desContent.classList.remove('open');
  }
});


const checkboxes = document.querySelectorAll('.option-checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(cb => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
    }
  });
});


const offerContent = document.querySelector('.info-right-offer-content');
const seeMoreOfferButton = document.getElementById('see-more-offer');
let isContentExpandedOffer = false;

seeMoreOfferButton.addEventListener('click', function() {

  const computedStyles = window.getComputedStyle(offerContent);

  if (computedStyles.maxHeight === '270px') {
    offerContent.style.maxHeight = '600px';
    seeMoreOfferButton.style.borderTopLeftRadius = '0';
    seeMoreOfferButton.style.borderTopRightRadius = '0';
    seeMoreOfferButton.style.borderBottomLeftRadius = '10px';
    seeMoreOfferButton.style.borderBottomRightRadius = '10px';
    seeMoreOfferButton.style.textTransform = 'uppercase';
    seeMoreOfferButton.innerHTML = 'Thu gọn bài viết <i class="fa-solid fa-caret-up"></i>';
    offerContent.classList.add('open');

  } else {
    offerContent.style.maxHeight = '270px';
    seeMoreOfferButton.style.borderTopLeftRadius = '10px';
    seeMoreOfferButton.style.borderTopRightRadius = '10px';
    seeMoreOfferButton.style.borderBottomLeftRadius = '0';
    seeMoreOfferButton.style.borderBottomRightRadius = '0';
    seeMoreOfferButton.style.textTransform = 'uppercase';
    seeMoreOfferButton.innerHTML = 'Xem thêm bài viết <i class="fa-solid fa-caret-down"></i>';
    offerContent.classList.remove('open');

  }
});


const offerMoreContent = document.querySelector('.info-right-offer-more-content');
const seeMoreOfferMoreButton = document.getElementById('see-more-offer-more');
let isContentExpandedOfferMore = false;

seeMoreOfferMoreButton.addEventListener('click', function() {

  const computedStyles = window.getComputedStyle(offerMoreContent);

  if (computedStyles.maxHeight === '290px') {
    offerMoreContent.style.maxHeight = '800px';
    seeMoreOfferMoreButton.style.borderTopLeftRadius = '0';
    seeMoreOfferMoreButton.style.borderTopRightRadius = '0';
    seeMoreOfferMoreButton.style.borderBottomLeftRadius = '10px';
    seeMoreOfferMoreButton.style.borderBottomRightRadius = '10px';
    seeMoreOfferMoreButton.style.textTransform = 'uppercase';
    seeMoreOfferMoreButton.innerHTML = 'Thu gọn bài viết <i class="fa-solid fa-caret-up"></i>';
    offerMoreContent.classList.add('open');

  } else {
    offerMoreContent.style.maxHeight = '290px';
    seeMoreOfferMoreButton.style.borderTopLeftRadius = '10px';
    seeMoreOfferMoreButton.style.borderTopRightRadius = '10px';
    seeMoreOfferMoreButton.style.borderBottomLeftRadius = '0';
    seeMoreOfferMoreButton.style.borderBottomRightRadius = '0';
    seeMoreOfferMoreButton.style.textTransform = 'uppercase';
    seeMoreOfferMoreButton.innerHTML = 'Xem thêm bài viết <i class="fa-solid fa-caret-down"></i>';
    offerMoreContent.classList.remove('open');

  }
});



const productsPerPage = 3;
let currentPage = 0;

function showProducts(page) {
    const productContainer = document.getElementById("product-container");
    const translateX = -page * 100;

    productContainer.style.transform = `translateX(${translateX}%)`;

    const paginateDots = document.querySelectorAll(".paginate-dot");
    paginateDots.forEach((dot, index) => {
        if (index === page) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function changePage(page) {
    currentPage = page;
    showProducts(currentPage);
}

function showNextProducts() {
    const productContainer = document.getElementById("product-container");
    const products = productContainer.querySelectorAll(".accessory-product-detail");
    
    if (currentPage < Math.ceil(products.length / productsPerPage) - 1) {
        currentPage++;
        showProducts(currentPage);
    }
}

function showPreviousProducts() {
    if (currentPage > 0) {
        currentPage--;
        showProducts(currentPage);
    }
}

showProducts(currentPage);




const productsPerPageCompare = 2;
let currentPageCompare = 0;

function showProductsCompare(page) {
    const productContainerCompare = document.getElementById("product-container-compare");
    const translateX = -page * 100;

    productContainerCompare.style.transform = `translateX(${translateX}%)`;

    const paginateDotsCompare = document.querySelectorAll(".compare-paginate-dot");
    paginateDotsCompare.forEach((dot, index) => {
        if (index === page) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function changePageCompare(page) {
    currentPageCompare = page;
    showProductsCompare(currentPageCompare);
}

function showNextProductsCompare() {
    const productContainerCompare = document.getElementById("product-container-compare");
    const productsCompare = productContainerCompare.querySelectorAll(".compare-product-detail");
    
    if (currentPageCompare < Math.ceil(productsCompare.length / productsPerPageCompare) - 1) {
        currentPageCompare++;
        showProductsCompare(currentPageCompare);
    }
}

function showPreviousProductsCompare() {
    if (currentPageCompare > 0) {
        currentPageCompare--;
        showProductsCompare(currentPageCompare);
    }
}

showProductsCompare(currentPageCompare);



const productsPerPagenew = 2;
let currentPagenew = 0;

function showProductsnew(page) {
    const productContainernew = document.getElementById("product-container-new");
    const translateX = -page * 100;

    productContainernew.style.transform = `translateX(${translateX}%)`;

    const paginateDotsnew = document.querySelectorAll(".new-paginate-dot");
    paginateDotsnew.forEach((dot, index) => {
        if (index === page) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function changePagenew(page) {
    currentPagenew = page;
    showProductsnew(currentPagenew);
}

function showNextProductsnew() {
    const productContainernew = document.getElementById("product-container-new");
    const productsnew = productContainernew.querySelectorAll(".new-product-detail");
    
    if (currentPagenew < Math.ceil(productsnew.length / productsPerPagenew) - 1) {
        currentPagenew++;
        showProductsnew(currentPagenew);
    }
}

function showPreviousProductsnew() {
    if (currentPagenew > 0) {
      currentPagenew--;
        showProductsnew(currentPagenew);
    }
}

showProductsnew(currentPagenew);




const productsPerPagenews = 2;
let currentPagenews = 0;

function showProductsnews(page) {
    const productContainernews = document.getElementById("product-container-news");
    const translateX = -page * 100;

    productContainernews.style.transform = `translateX(${translateX}%)`;

    const paginateDotsnews = document.querySelectorAll(".news-paginate-dot");
    paginateDotsnews.forEach((dot, index) => {
        if (index === page) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function changePagenews(page) {
    currentPagenews = page;
    showProductsnews(currentPagenews);
}

function showNextProductsnews() {
    const productContainernews = document.getElementById("product-container-news");
    const productsnews = productContainernews.querySelectorAll(".news-product-detail");
    
    if (currentPagenews < Math.ceil(productsnews.length / productsPerPagenews) - 1) {
        currentPagenews++;
        showProductsnews(currentPagenews);
    }
}

function showPreviousProductsnews() {
    if (currentPagenews > 0) {
      currentPagenews--;
        showProductsnews(currentPagenews);
    }
}

showProductsnews(currentPagenews);
