const allseats = document.getElementById('all-seat');
const seatIndex = document.getElementById('seat-index');
const rightSeats = document.getElementById('right-seats');
const leftSeats = document.getElementById('left-seats');
document.getElementById('copoun-input').disabled = true;
document.getElementById('copoun-btn').disabled = true;

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let count = 0;
let letter_index = 0
let totalPrice = 0;
let ticket_counter = 1;


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
        span.classList.remove('col-span-2', 'bg-gray-100', 'rounded-xl', 'border-2', 'border-red-0', 'hover:border-green-1', 'cursor-pointer');
        span.innerHTML = `${letters[letter_index]}`;
        seatIndex.appendChild(span);
        count++;
    }
}

function clk(seat, seatId, event) {
    if (seat.classList.contains("bg-gray-100") && ticket_counter <= 4) {
        seat.classList.remove("bg-gray-100")
        seat.classList.add('bg-green-1');

        let container = document.createElement('div');
        container.classList.add('grid', 'grid-cols-3', 'place-items-center');
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

        document.getElementById('entry').appendChild(container);
        document.getElementById('total-price').innerText = totalPrice;
        console.log("entry added");

        ticket_counter++;
        totalPrice += 550;
    }

    else if (seat.classList.contains("bg-green-1")) {
        seat.classList.remove('bg-green-1');
        seat.classList.add("bg-gray-100")

        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('copoun-input').disabled = true;
        document.getElementById('copoun-btn').disabled = true;
        document.getElementById(`entry-${seatId}`).remove();

        ticket_counter--;
        totalPrice -= 550;
    }
    if (ticket_counter > 4) {
        document.getElementById('copoun-input').disabled = false;
        document.getElementById('copoun-btn').disabled = false;
    }
}
