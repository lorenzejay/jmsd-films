import React from "react"

const ContactUs = () => {
  return (
    <form className="flex flex-col justify-center items-center my-12">
      <h1 className="uppercase text-2xl text-center">
        Tell us about your story
      </h1>
      <input
        className="input border border-gray-400 appearance-none rounded w-3/4 px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
        id="email"
        type="email"
        autofocus
      />

      <input name="" placeholder="contact" className="" />
      <input name="" placeholder="contact" className="" />
    </form>
  )
}

export default ContactUs

// <!-- component -->
// <style>
//     .input {
//         transition: border 0.2s ease-in-out;
//         min-width: 280px
//     }

//     .input:focus+.label,
//     .input:active+.label,
//     .input.filled+.label {
//         font-size: .75rem;
//         transition: all 0.2s ease-out;
//         top: -0.1rem;
//         color: #667eea;
//     }

//     .label {
//         transition: all 0.2s ease-out;
//         top: 0.4rem;
//       	left: 0;
//     }
// </style>
// <div class="shadow-xl p-10 bg-white max-w-xl rounded">
//     <h1 class="text-4xl font-black mb-4">Login</h1>
//     <div class="mb-4 relative">
//         <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autofocus>
//         <label for="email" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Email Address</label>
//     </div>
//     <div class="mb-4 relative">
//         <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="password" type="password" autofocus>
//         <label for="password" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">Password</label>
//     </div>
//     <button class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded">Submit</button>
// </div>

// <script>
//     var toggleInputContainer = function (input) {
//         if (input.value != "") {
//             input.classList.add('filled');
//         } else {
//             input.classList.remove('filled');
//         }
//     }

//     var labels = document.querySelectorAll('.label');
//     for (var i = 0; i < labels.length; i++) {
//         labels[i].addEventListener('click', function () {
//             this.previousElementSibling.focus();
//         });
//     }

//     window.addEventListener("load", function () {
//         var inputs = document.getElementsByClassName("input");
//         for (var i = 0; i < inputs.length; i++) {
//             console.log('looped');
//             inputs[i].addEventListener('keyup', function () {
//                 toggleInputContainer(this);
//             });
//             toggleInputContainer(inputs[i]);
//         }
//     });
// </script>