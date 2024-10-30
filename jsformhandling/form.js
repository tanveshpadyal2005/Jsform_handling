
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // get value from input box
    const fullname = form.name.value.trim();
    const email = form.email.value.trim();
    const pass = form.pass.value.trim();

    // input, lable and span conatainer for error massage insert 
    const input1 = document.querySelector('.inp1');
    const input2 = document.querySelector('.inp2');
    const input3 = document.querySelector('.inp3');

    // regex 
    const nameregx = /^[a-zA-Z]+$/;
    const emailregx = /^[a-zA-Z0-9._%+-]+@[a-zA-z0-9]+\.[a-zA-Z]{2,}$/;
    const passregx = /^[0-9]{10}$/;

    let echeck = false;
    let passcheck = false;
    let namecheck = false;



    // check value is not empty and regx

    // name validation 
    if (fullname == "") {
        if (!(input1.lastElementChild.tagName === 'SPAN')) {
            const span = document.createElement('span');
            span.textContent = "please enter your name";
            span.className = 'error';


            input1.appendChild(span);
        }

        namecheck = false;
    }

    else if (!nameregx.test(fullname)) {
        if (!(input1.lastElementChild.tagName === 'SPAN')) {

            const span = document.createElement('span');
            span.textContent = "please only characters string";
            span.className = 'error';
            input1.appendChild(span);

        }

        else {
            input1.lastElementChild.innerHTML = "please enter only charater string";
        }
        namecheck = false;

    }

    else {
        const spantag = input1.querySelector('.error');

        if (spantag) {
            spantag.remove();
        }

        namecheck = true;
    }


    // email validation 
    if (email == '') {
        if (!(input2.lastElementChild.tagName === 'SPAN')) {
            const span = document.createElement('span');
            span.textContent = "please enter email Address";
            span.className = 'error';
            input2.appendChild(span);
        }
        echeck = false;
    }

    else if (!emailregx.test(email)) {

        if (!(input2.lastElementChild.tagName === 'SPAN')) {

            const span = document.createElement('span');
            span.textContent = "please enter correct email";
            span.className = 'error';
            input2.appendChild(span);

        }
        // (input2.lastElementChild.innerHTML === 'please enter email Address')
        else {
            input2.lastElementChild.innerHTML = "please enter correct email"
        }
        echeck = false;
    }

    else {
        const spantag = input2.querySelector('.error');

        if (spantag) {
            spantag.remove();
        }
        echeck = true;
    }

    //pass word validation
    if (pass == '') {
        if (!(input3.lastElementChild.tagName === 'SPAN')) {
            const span = document.createElement('span');
            span.textContent = "please enter password";
            span.className = 'error';
            input3.appendChild(span);
        }

        passcheck = false;

    }

    else if (!passregx.test(pass)) {

        if (!(input3.lastElementChild.tagName === 'SPAN')) {

            const span = document.createElement('span');
            span.textContent = "password must be 10 digits and only numbers";
            span.className = 'error';
            input3.appendChild(span);

        }
        // (input2.lastElementChild.innerHTML === 'please enter email Address')
        else {
            input3.lastElementChild.innerHTML = "password must be 10 digits and only numbers"
        }

        passcheck = false;
    }

    else {
        const spantag = input3.querySelector('.error');

        if (spantag) {
            spantag.remove();
        }
        passcheck = true;
    }



    if (passcheck == true && namecheck == true && echeck == true) {
        alert("form submitted successfully :)")
        form.reset();
    }

})

