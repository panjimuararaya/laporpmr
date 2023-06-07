// Daftar menu yang akan ditampilkan berdasarkan menu-bar yang diklik
var menuContent = {
    menu1: ["log book unit", "down time electrickal","down time mecanical","sparepart electrical","sparepart mecanical","spare part sipil","tools maintenance","serah Terima tukar jaga"],
    menu2: ["Laporan bus bar", "laporan genset", "produksi harian", "laporan trip","laporan turbine","realisasi curah hujan","Serah terima tukar jaga","Produksi Tahunan","Catatan Mingguan"],
    menu3: ["laporan sedimen", "logbook kendaraan","serah terima tukar jaga"],
    menu4: ["monitoring tegangan"]
};

// Daftar tautan untuk setiap submenu
var menuLinks = {
    "log book unit": "https://tinyurl.com/mxpr5uez",
    "down time electrickal": "https://tinyurl.com/5ksv9wbc",
    "down time mecanical": "https://tinyurl.com/2vsamwyry",
    "sparepart electrical": "https://tinyurl.com/2p9xe4fy",
    "sparepart mecanical": "https://tinyurl.com/2ra9ar2j",
    "spare part sipil": "https://tinyurl.com/5332rs7a",
    "tools maintenance": "https://tinyurl.com/2tsm9ej4",
    "serah Terima tukar jaga": "https://tinyurl.com/y42z5ns7",
    "Laporan bus bar": "https://tinyurl.com/4ypx97am",
    "laporan genset": "https://tinyurl.com/bddntu7d",
    "produksi harian": "https://tinyurl.com/3hyn22sv",
    "laporan trip": "https://tinyurl.com/tuayw3mj",
    "laporan turbine": "https://tinyurl.com/3ebxa9fe",
    "realisasi curah hujan": "https://tinyurl.com/434pbup9",
    "Serah terima tukar jaga": "https://tinyurl.com/5c7ax2ef",
    "Produksi Tahunan": "https://tinyurl.com/9b7yr8jf",
    "Catatan Mingguan": "https://tinyurl.com/yx433w64",
    "laporan sedimen": "https://tinyurl.com/5f32xvmc",
    "logbook kendaraan": "https://tinyurl.com/4dtmmwf2",
    "serah terima tukar jaga": "https://tinyurl.com/57ks4ft8",
    "monitoring tegangan": "https://wahyuabdillah.com/"
};

// Fungsi untuk menampilkan submenu sesuai dengan menu-bar yang diklik
function showSubMenu(menuId) {
    var subMenu = document.getElementById("sub-menu");
    subMenu.innerHTML = "";

    var menuItems = menuContent[menuId];

    for (var i = 0; i < menuItems.length; i++) {
        var li = document.createElement("li");
        var link = document.createElement("a");
        link.textContent = menuItems[i];
        link.href = menuLinks[menuItems[i]];
        link.target = "_blank";
        li.appendChild(link);
        subMenu.appendChild(li);
    }
}

// Fungsi untuk menampilkan halaman login
function showLoginForm() {
    var loginForm = document.querySelector(".login-form");
    loginForm.style.display = "block";
}

// Fungsi untuk memproses login
function processLogin(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "pmr" && password === "pltm") {
        var loginForm = document.querySelector(".login-form");
        loginForm.style.display = "none";
        enableMenuItems(); // Mengaktifkan menu-bar setelah login berhasil
        showSubMenu("menu1"); // Menampilkan submenu setelah login berhasil
    } else if (username === "muara" && password === "muara") {
        var loginForm = document.querySelector(".login-form");
        loginForm.style.display = "none";
        enableMenuItems(); // Mengaktifkan menu-bar setelah login berhasil
        showSubMenu("menu1"); // Menampilkan submenu setelah login berhasil
    } else {
        var errorMessage = document.getElementById("errorMessage");
        errorMessage.textContent = "Invalid username or password. Contact 081933070663.";
    }
}


// Fungsi untuk mengaktifkan menu-bar setelah login berhasil
function enableMenuItems() {
    var menuItems = document.querySelectorAll(".menu-item");

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("disabled");
    }
}

// Event listener saat menu-bar diklik
document.getElementById("menu1").addEventListener("click", function() {
    if (!isLoggedIn()) return;
    showSubMenu("menu1");
});

document.getElementById("menu2").addEventListener("click", function() {
    if (!isLoggedIn()) return;
    showSubMenu("menu2");
});

document.getElementById("menu3").addEventListener("click", function() {
    if (!isLoggedIn()) return;
    showSubMenu("menu3");
});

document.getElementById("menu4").addEventListener("click", function() {
    if (!isLoggedIn()) return;
    showSubMenu("menu4");
});

// Event listener saat form login disubmit
document.getElementById("loginForm").addEventListener("submit", processLogin);

// Tampilkan form login saat halaman dibuka
showLoginForm();

// Fungsi untuk mengecek apakah pengguna sudah login
function isLoggedIn() {
    var loginForm = document.querySelector(".login-form");
    return loginForm.style.display === "none";
}
