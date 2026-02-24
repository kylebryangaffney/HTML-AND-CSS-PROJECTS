// initialize pop overs
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
popoverTriggerList.forEach(function (element) {
    let imgSrc = element.getAttribute("data-bs-img");
    let content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: "hover"
    });
});


// initialize toast
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

// function to display toast with selected options
function displaySelectedMovieOptions() {
    const movieSelect = document.getElementById('movieSelect');
    let movie = movieSelect.options[movieSelect.selectedIndex].text;
    const timeSelect = document.getElementById('timeSelect');
    let time = timeSelect.options[timeSelect.selectedIndex].text;
    let quantity = document.getElementById('quantity').value;
    let message = "Purchase confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    let toastBody = document.getElementById('toastBody');
    toastBody.innerText = message;
    let toast = new bootstrap.Toast(document.getElementById('toastDisplay'));

    toast.show();
}

function buyTickets(){
    displaySelectedMovieOptions();
}


// Live alert Button adddition

const alertPlaceholder = document.getElementById('liveAlert')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('You clicked the alert button!', 'success')
  })
}