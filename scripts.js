function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("User denied account access. Try again.")
        }
    } else {
        alert('Please install MetaMask to use this feature!');
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('connectWalletButton').addEventListener('click', connectWallet);
});