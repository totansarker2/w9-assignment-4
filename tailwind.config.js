/** @type {import('tailwindcss').Config} */
/** You can change tailwind default values */

var custom = {
    extend: {
        colors: {
            'black-1': 'rgba(3, 7, 18, 1)',
            'black-2': 'rgba(3, 7, 18, 0.8)',
            'black-3': 'rgba(3, 7, 18, 0.6)',
            'black-4': 'rgba(3, 7, 18, 0.5)',
            'black-5': 'rgba(3, 7, 18, 0.4)',

            'white-1': 'rgba(255, 255, 255, 1)',
            'white-2': 'rgba(255, 255, 255, 0.8)',
            'white-3': 'rgba(255, 255, 255, 0.7)',

        }
    }
}

// required for playcdn
// tailwind.config = {
//     theme: custom
// }

// required for intellisense
// client side js does not support module.export. it's for node js
module.exports = {
    theme: custom,
    content: [
        './*.{html,js}',
    ],
}