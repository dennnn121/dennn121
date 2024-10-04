function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) {
        return 'gunting';
    } else if (comp < 0.67) {
        return 'kertas';
    } else {
        return 'batu';
    }
}

function getHasil(comp, player) {
    if (player === comp) return 'SERI';
    if (player === 'gunting') return (comp === 'kertas') ? 'MENANG!' : 'KALAH';
    if (player === 'kertas') return (comp === 'batu') ? 'MENANG!' : 'KALAH';
    if (player === 'batu') return (comp === 'gunting') ? 'MENANG!' : 'KALAH';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gunting', 'kertas', 'batu'];
    let i = 0;
    const waktumulai = new Date().getTime();
    const interval = setInterval(() => {
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i === gambar.length) i = 0;

        // Hentikan interval setelah 1 detik
        if (new Date().getTime() - waktumulai > 1000) {
            clearInterval(interval);
        }
    }, 100);
}

function infowarna(hasil) {
    const info = document.querySelector('.info');
    if (hasil === 'MENANG!') {
        info.style.color = 'green';
        info.style.border = '5px solid green';
    } else if (hasil === 'KALAH') {
        info.style.color = 'crimson';
        info.style.border = '5px solid crimson';
    } else {
        info.style.color = 'grey';
        info.style.border = '5px solid grey';
    }
}

let gunting = document.querySelector('.gunting');
let kertas = document.querySelector('.kertas');
let batu = document.querySelector('.batu');

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(i) {
    i.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = i.className;
        
        // Putar gambar komputer
        putar();

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const hasil = getHasil(pilihanComputer, pilihanPlayer);
            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            // Update warna teks berdasarkan hasil
            infowarna(hasil);
        }, 1000); // Tampilkan hasil setelah 1 detik
    });
});
