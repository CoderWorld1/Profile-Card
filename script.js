const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')


// Modal Open Function 

const openmodal = () => {
    console.log("Modal is Open");
    modal.classList.add("active")
    overlay.classList.add(overlayactive)

}

// Modal close Function

const closemodal = () => {
    modal.classList.remove("active")
    overlay.classList.remove(overlayactive)
}

//  Add Whst APPPPP
  var phoneNumber = '6386838513'; // Replace with your desired phone number
  var encodedPhoneNumber = encodeURIComponent(phoneNumber);
  var whatsappLink = 'https://api.whatsapp.com/send?phone=' + encodedPhoneNumber;




// Add Telegram 
  var username = 'CoderWorld1'; // Replace with the desired username or phone number
  var telegramLink = 'https://t.me/' + username;
 
//   var telegramUsername = '@CoderWorld1'; // Replace with your desired Telegram username or group
//   var encodedUsername = encodeURIComponent(telegramUsername);
//   var telegramLink = 'tg://resolve?domain=' + encodedUsername;


