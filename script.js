// const seats = document.getElementsByClassName('seat');

// for (i of seats){
//     // console.log(i);
//     i.addEventListener('click', function() {
//         clk(i);

//     })
// }

const allseats = document.getElementById('all-seat');
const seatIndex = document.getElementById('seat-index');
const rightSeats = document.getElementById('right-seats');
const leftSeats = document.getElementById('left-seats');

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let count = 0;
let letter_index = 0
let totalPrice = 0;
let ticket_counter = 0;


while (letter_index < letters.length) {
    const span = document.createElement('span');
    span.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-100', 'h-16', 'rounded-xl', 'border-2', 'border-red-0', 'hover:border-green-1', 'cursor-pointer', 'select-none');
    span.innerHTML = `${letters[letter_index]}${count}`;

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

// function clk() {
//     totalPrice += 550;
//     ticket_counter++;
//     // seat.classList.toggle('bg-green');
//     let container = document.createElement('div');
//     container.classList.add('grid', 'grid-cols-3', 'place-items-center');
//     let seat_no = document.createElement('span');
//     let seat_class = document.createElement('span');
//     let seat_price = document.createElement('span');



//     seat.style.backgroundColor = 'rgba(29, 209, 0, 1)';
//     seat_no.innerText = seat.innerText;
//     seat_class.innerText = 'Economy';
//     seat_price.innerText = '550';

//     container.appendChild(seat_no);
//     container.appendChild(seat_class);
//     container.appendChild(seat_price);

//     document.getElementById('entry').appendChild(container);
//     document.getElementById('total-price').innerText = totalPrice;



// }
// if (ticket_counter <= 4) {
//     seat.onclick = clk;
//     console.log(ticket_counter);
// }
