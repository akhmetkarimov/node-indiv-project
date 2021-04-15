const modal = document.querySelector('.modal')

function closeModal() {
    modal.style.display = 'none'
}

function openModal() {
    modal.style.display = 'flex'
}

function toggleModal1(action) {
    if (action == 'open') {
        modal.style.display = 'flex'
    } else {
        modal.style.display = 'none'
    }
}

function toggleModal2() {
    // modal.classList.add('active')
    // modal.classList.remove('active')
    modal.classList.toggle('active')
}

const content = [
    'content for 1',
    'content for 2 asd',
    'content for 3 1231',
    'content for 12 1231',
    'content for 43 1231',
]

const divContent = document.querySelector('#output')


for (let i = 0; i < content.length; i++) {
    divContent.innerHTML += `<div class='box'>
        ${content[i]}
    </div>
    `
}

const imgs = [
    'imgs/img1.jpeg',
    'imgs/img2.jpeg',
    'imgs/img3.webp',
    'imgs/img4.jpeg',
    'imgs/img5.jpeg',
]

const imgContent = document.querySelector('#img-output')


for (let i = 0; i < imgs.length; i++) {
    imgContent.innerHTML += `
        <img src="${imgs[i]}" class="img-item" onclick="imgModal()">
    `
}


function imgModal() {
    console.log('img click')
}