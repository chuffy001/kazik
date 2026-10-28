let mevalr1 = ["💵", "🍒", "7️⃣"]
let mevalr2 = ["💵", "🍒", "7️⃣"]
let mevalr3 = ["💵", "🍒", "7️⃣"]

let win1 = document.querySelector('.win1')
let win2 = document.querySelector('.win2')
let win3 = document.querySelector('.win3')
let spin = document.querySelector('.SPIN')

spin.addEventListener('click', () => {
    let random1 = Math.floor(Math.random() * 3)
    let random2 = Math.floor(Math.random() * 3)
    let random3 = Math.floor(Math.random() * 3)

    let interval = setInterval(() => {
        win1.textContent = mevalr1[Math.floor(Math.random() * 3)]
        win2.textContent = mevalr2[Math.floor(Math.random() * 3)]
        win3.textContent = mevalr3[Math.floor(Math.random() * 3)]
    }, 100)       

  setTimeout(() => {
        clearInterval(interval)

        win1.textContent = mevalr1[random1]
        win2.textContent = mevalr2[random2]
        win3.textContent = mevalr3[random3]

        if (random1 === random2 && random2 === random3) {
            alert('🎉 Sen g‘olibsan!')
        } else {
            alert('😢 Yutqazding! Yana urinib ko‘r.')
        }

    }, 1500)

})
 