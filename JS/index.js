const btnBurger = document.querySelector(".burger_meny")
const burgerNoClick = document.querySelector(".burgerNoClick")
const closeBtn = document.querySelector(".close")
const stick1_ = document.querySelector(".stick1_")
const stick2_ = document.querySelector(".stick2_")
const stick3_ = document.querySelector(".stick3_")
const sticks = document.querySelector(".sticks")

sticks.addEventListener('click', () => {
    stick1_.classList.toggle('stick1_rotate')
    stick2_.classList.toggle('stick2_none')
    stick3_.classList.toggle('stick3_rotate')
    btnBurger.classList.toggle('burger_meny_active')
    btnBurger.classList.toggle('burger_meny_active_run')
    burgerNoClick.classList.toggle("burgerClick")
})

function onEntry (entry) {
    entry.forEach (change => {
      if (change.isIntersecting) {
        change.target.classList.add ('element-show');
      }
    });
  }

  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver (onEntry, options);
  let elements = document.querySelectorAll ('.element-animation');

  for (let elm of elements) {
    observer.observe (elm);
  }

  function onEntry (entry) {
    entry.forEach (change => {
      if (change.isIntersecting) {
        change.target.classList.add ('element-show1');
      }
    });
  }

  function onEntry (entry) {
    entry.forEach (change => {
      if (change.isIntersecting) {
        change.target.classList.add ('element-show1');
      }
    });
  }



  let options1 = { threshold: [0.5] };
  let observer1 = new IntersectionObserver (onEntry, options);
  let elements1 = document.querySelectorAll ('.element-animation1');

  for (let elm of elements1) {
    observer1.observe (elm);
  }







  
const input = document.querySelector('.name');
const label = document.querySelector('.name_lbl');
const labelText = label.textContent

const email = document.querySelector('.email');
const emailLabel = document.querySelector('.email_lbl');
const emailText = emailLabel.textContent

const phone = document.querySelector('.phone');
const phoneLabel = document.querySelector('.phone_lbl');
const phoneText = phoneLabel.textContent

const message = document.querySelector('#Message');
const messageLabel = document.querySelector('.message_lbl');
const messageText = messageLabel.textContent

message.addEventListener('input', () => {
  const messageText = messageLabel.textContent
  if (message.value === '') {
    messageLabel.innerHTML = `${messageText} <span class="required">*</span>`;
    
  } else {
    messageLabel.textContent = "Message";
  }
});

input.addEventListener('input', () => {
  const labelText1 = label.textContent
  if (input.value === '') {
    label.innerHTML = `${labelText1} <span class="required">*</span>`;
    
  } else {
    label.textContent = "Name";
  }
});

email.addEventListener('input', () => {
  const emailText = emailLabel.textContent
  if (email.value === '') {
    emailLabel.innerHTML = `${emailText} <span class="required">*</span>`;
    
  } else {
    emailLabel.textContent = "Email";
  }
});

phone.addEventListener('input', () => {
  const phoneText = phoneLabel.textContent
  if (phone.value === '') {
    phoneLabel.innerHTML = `${phoneText} <span class="required">*</span>`;
    
  } else {
    phoneLabel.textContent = "Phone";
  }
});

