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



