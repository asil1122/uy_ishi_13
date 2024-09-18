const products = document.querySelector(".products")
const box = document.querySelector(".box")
const btn = document.getElementsByClassName("btn")
const modal_cont = document.querySelector(".modal_cont")
const close = document.querySelector(".close")
const modal_content = document.querySelector(".modal_content")
const oldInfo = document.querySelector(".oldInfo")
const open_btn = document.querySelector(".open-btn")
const close_btn = document.querySelector(".close-btn")
const dataInfo = document.querySelector(".dataInfo")

import { getProducts, getName } from "./service.js";


const saveInfo = (data) => {
    const oldnumbers = JSON.parse(localStorage.getItem("numbers")) || []
    localStorage.setItem("numbers", JSON.stringify([data,...oldnumbers]))
}

const renderOldInof = () => {
    const data = JSON.parse(localStorage.getItem("numbers")) || []
    dataInfo.innerHTML = data.map((item) => `
        <div>
            <img src = "${item.img}" alt= "" />
            <h1>${item.title}</h1>
        </div>
    `).join("")
}



const renderProducts = async () => {
    const data = await getProducts()
    products.innerHTML = data.map((item) => `
        <div>
            <img src="${item.img}" alt="img">
            <p>${item.title}</p>
            <button class = "btn" data-id="${item.id}">INFO</button>
        </div>
    `).join("")
}

renderProducts()


const openModal = (data) => {
    box.style.display = "block";
    
    modal_content.innerHTML = `
        <img src = "${data.img}" alt="" />
        <h1>${data.title}</h1>
        <button class="btn_add">add</button>
    `
    const btn_add = document.querySelector(".btn_add")
    btn_add.addEventListener("click", () => {
        saveInfo(data)

    });
}



products.addEventListener("click",  async(e) =>{
    const id = e.target.dataset.id
    
    if(id){
        let data = await getName(id)
        openModal(data)
    }

})

close.addEventListener("click", () => {
    box.style.display = "none" 
})


open_btn.addEventListener("click", () => {
    oldInfo.style.width = "400px";
    renderOldInof()
})

close_btn.addEventListener("click", () => {
    oldInfo.style.width = "0"
})