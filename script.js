document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const message = document.getElementById('message');

    searchForm.addEventListener('submit', function(event) {
        // Mencegah form dari pengiriman default
        event.preventDefault();
        
        // Mengambil nilai dari input pencarian
        const query = searchInput.value.trim();

        if (query === '') {
            // Menampilkan pesan jika input kosong
            message.textContent = 'Please enter a search term.';
        } else {
            // Menghapus pesan jika ada input
            message.textContent = '';

            // Aksi pencarian dapat ditambahkan di sini
            alert(`Searching for: ${query}`);
        }
    });
});
