const allseats = document.getElementById('all-seat');
const seatIndex = document.getElementById('seat-index');
const rightSeats = document.getElementById('right-seats');
const leftSeats = document.getElementById('left-seats');
const coupon_alert = document.getElementById('coupon_alart');
document.getElementById('coupon-input').disabled = true;
document.getElementById('coupon-btn').disabled = true;
document.getElementById('next-btn').disabled = true;

const coupon15 = 'NEW15';
const coupon20 = 'Couple 20';
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let count = 0;
let letter_index = 0
let totalPrice = 0;
let ticket_counter = 1;
let discountPrice = 0;
let couponInputBox = "";
let totalSeats = 40;
let phone_number = "";


while (letter_index < letters.length) {
    const span = document.createElement('span');
    span.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100', 'h-16', 'rounded-xl', 'border-2', 'border-red-0', 'hover:border-green-1', 'cursor-pointer', 'select-none');
    let seatId = `${letters[letter_index]}${count}`
    span.setAttribute('id', seatId);
    span.innerHTML = seatId;
    span.addEventListener('click', function (event) {
        clk(span, seatId, event)
    })

    if (count != 0) {
        if (count <= 2) {
            leftSeats.appendChild(span);

        }
        else if (count < 4) {
            rightSeats.appendChild(span);
        }
        if (count == 4) {
            rightSeats.appendChild(span);

            letter_index++;
            count = 0;
        }
        else {
            count++;
        }
    }
    else {
        span.classList.remove('justify-center', 'col-span-2', 'bg-gray-100', 'rounded-xl', 'border-2', 'border-red-0', 'hover:border-green-1', 'cursor-pointer');
        span.innerHTML = `${letters[letter_index]}`;
        seatIndex.appendChild(span);
        count++;
    }
}

function clk(seat, seatId, event) {
    if (seat.classList.contains("bg-gray-100") && ticket_counter <= 4) {
        seat.classList.remove("bg-gray-100", 'text-black-1')
        seat.classList.add('bg-green-1', 'text-white');

        let container = document.createElement('div');
        container.classList.add('flex', 'justify-between');

        container.id = `entry-${seatId}`;
        let seat_no = document.createElement('span');
        let seat_class = document.createElement('span');
        let seat_price = document.createElement('span');

        seat_no.innerText = seat.innerText;
        seat_class.innerText = 'Economy';
        seat_price.innerText = '550';

        container.appendChild(seat_no);
        container.appendChild(seat_class);
        container.appendChild(seat_price);

        ticket_counter++;
        totalPrice += 550;
        totalSeats -= 1;

        document.getElementById('entry').appendChild(container);
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-total').innerHTML = totalPrice;
        document.getElementById('seat-no').innerText = ticket_counter - 1;
        document.getElementById('seat-left').innerText = totalSeats;
    }

    else if (seat.classList.contains("bg-green-1")) {
        seat.classList.remove('bg-green-1', 'text-white');
        seat.classList.add("bg-gray-100", 'text-black-1')

        ticket_counter--;
        totalPrice -= 550;
        discountPrice = 0;
        totalSeats += 1;

        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-total').innerHTML = totalPrice;
        document.getElementById('coupon-input').disabled = true;
        document.getElementById('coupon-btn').disabled = true;
        document.getElementById(`entry-${seatId}`).remove();
        document.getElementById('seat-no').innerText = ticket_counter - 1;
        document.getElementById('seat-left').innerText = totalSeats;
    }
    if (ticket_counter > 4 && discountPrice == 0) {
        document.getElementById('coupon-input').disabled = false;
        document.getElementById('coupon-btn').disabled = false;
    }
    if (ticket_counter > 1 && phone_number.length == 11) {
        document.getElementById('next-btn').disabled = false;
    }
    else {
        document.getElementById('next-btn').disabled = true;
    }
    document.getElementById('coupon-input').value = "";
    coupon_alert.innerText = "";
}

const couponInput = document.getElementById('coupon-input');
couponInput.addEventListener('keyup', (e) => {
    couponInputBox = e.target.value
});

const phoneInput = document.getElementById('phone-input');
phoneInput.addEventListener('keyup', (e) => {
    let target_num = e.target.value;
    if (target_num.length == 11 && ticket_counter > 1) {
        if (!isNaN(target_num)) {
            document.getElementById('next-btn').disabled = false;
            phone_number = target_num;
        }
        else {
            console.log("Please provide a valid 11-digit phone number");
            document.getElementById('next-btn').disabled = true;
        }
    }
    else {
        document.getElementById('next-btn').disabled = true;
        phone_number = target_num;
    }
});

function discount() {
    if (couponInputBox.toLowerCase() === coupon15.toLowerCase()) {
        discountPrice = totalPrice * 0.15;
        document.getElementById('grand-total').innerHTML = totalPrice - discountPrice;
        document.getElementById('coupon-input').disabled = true;
        document.getElementById('coupon-btn').disabled = true;

        coupon_alert.innerHTML = "Congratulations! You got 15% discount";
        coupon_alert.classList.remove('text-red-600');
        coupon_alert.classList.add('text-green-1');
    }
    else if (couponInputBox.toLowerCase() === coupon20.toLowerCase()) {
        discountPrice = totalPrice * 0.20;
        document.getElementById('grand-total').innerHTML = totalPrice - discountPrice;
        document.getElementById('coupon-input').disabled = true;
        document.getElementById('coupon-btn').disabled = true;

        coupon_alert.innerHTML = "Congratulations! You got 20% discount";
        coupon_alert.classList.remove('text-red-600');
        coupon_alert.classList.add('text-green-1');
    }
    else {
        coupon_alert.innerHTML = "Your Coupon is invalid!";
        coupon_alert.classList.remove('text-green-1');
        coupon_alert.classList.add('text-red-600');
        document.getElementById('coupon-input').value = "";
    }
}

function modelBtn() {
    // document.getElementById('my-modal').style.display = 'none';
    window.location.reload();
}

function showModal() {
    document.getElementById('my-modal').style.display = 'block';
    console.log("model showed");
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
});