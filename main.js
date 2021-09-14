var web3;

function clicked_arrow(ele, parent){
    if($(ele).hasClass('rotate')){
        $(ele).removeClass('rotate');
        $("#"+parent).children('.actions').children('.dropdown').fadeOut();
    }else{
        $(ele).addClass('rotate');
        $("#"+parent).children('.actions').children('.dropdown').fadeIn();
    }
}

function connect_wallet() {
    web3 = new Web3(window.web3.currentProvider);

    web3.eth.getAccounts().then(function (accounts) {
        if (accounts[0] !== undefined) {
            $('#connect_btn').html(accounts[0]);
            eth_pool('run');
            dragon_lp_pool('run');
            dragon_pool('run');
        } else {
            alert("No accounts connected, Please connect to proceed");
            window.ethereum.enable().then(function (res) {
                if (res !== undefined) {
                    location.reload();
                }
            });
        }
    });
};

async function handleEthereum() {
    const { ethereum } = window;
    if (ethereum && ethereum.isMetaMask) {
        await window.ethereum.enable();
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        connect_wallet();
    } else {
        alert('Please install MetaMask!');
    }
}

$(document).ready(function(){
    if (window.ethereum) {
        handleEthereum();
    } else {
        window.addEventListener('ethereum#initialized', handleEthereum, {
            once: true,
        });
    }
});