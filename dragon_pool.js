const dragon_pool_add = "0x32e5594F14de658b0d577D6560fA0d9C6F1aa724";
const dragon_pool_abi = [{ "inputs": [{ "internalType": "contract IERC20", "name": "_rewardToken", "type": "address" }, { "internalType": "contract IERC20", "name": "_stakedToken", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardAdded", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }], "name": "RewardPaid", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Staked", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "user", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "earned", "outputs": [{ "internalType": "uint128", "name": "", "type": "uint128" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "exit", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "getReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "lastTimeRewardApplicable", "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastUpdateTime", "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "periodFinish", "outputs": [{ "internalType": "uint64", "name": "", "type": "uint64" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "rewardPerToken", "outputs": [{ "internalType": "uint128", "name": "", "type": "uint128" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardPerTokenStored", "outputs": [{ "internalType": "uint128", "name": "", "type": "uint128" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardRate", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "rewardToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint128", "name": "reward", "type": "uint128" }, { "internalType": "uint64", "name": "duration", "type": "uint64" }], "name": "setRewardParams", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint128", "name": "amount", "type": "uint128" }], "name": "stake", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "forWhom", "type": "address" }, { "internalType": "uint128", "name": "amount", "type": "uint128" }], "name": "stakeFor", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "stakedToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "userRewards", "outputs": [{ "internalType": "uint128", "name": "userRewardPerTokenPaid", "type": "uint128" }, { "internalType": "uint128", "name": "rewards", "type": "uint128" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint128", "name": "amount", "type": "uint128" }], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "withdrawReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }]

function dragon_pool(val) {

    var m_Con = new web3.eth.Contract(dragon_pool_abi, dragon_pool_add);
    web3.eth.getAccounts().then(function (accounts) {

        var acc = accounts[0];

        if (val === 'stake') {
            m_Con.methods.balanceOf(acc).call().then(function (bal) {
                bal = bal / 1000000000000000000
                var amt = prompt('Enter amount to stake : ', bal)
                console.log(bal);
                if ((bal == amt) || (amt == undefined)) {
                    console.log("Nothing")
                } else {
                    amt = String(amt * 1000000000000000000)
                    m_Con.methods.stake(amt).send({ 'from': acc, 'value': amt }).then(function (tx) {
                        console.log(tx);
                    }).catch(function (tx) {
                        console.log(tx);
                    });
                }
            }).catch(function (tx) {
                console.log(tx);
            });
        } else if (val === 'withdraw') {
            var amt = prompt('Enter amount to withdraw : ')
            m_Con.methods.withdraw(String(amt)).call().then(function (tx) {
                console.log(tx);
            }).catch(function (tx) {
                console.log(tx);
            });
        } else if (val === 'claim') {
            m_Con.methods.withdrawReward().call().then(function (tx) {
                console.log(tx);
            }).catch(function (tx) {
                console.log(tx);
            });
        } else if (val === 'claim_withdraw') {
            m_Con.methods.exit().call().then(function (tx) {
                console.log(tx);
            }).catch(function (tx) {
                console.log(tx);
            });
        } else {

            m_Con.methods.balanceOf(acc).call().then(function (tx) {
                $('#staked_amt_3').html(tx);
            }).catch(function (tx) {
                console.log(tx);
            });

            m_Con.methods.userRewards(acc).call().then(function (tx) {
                $('#unclaimed_reward_3').html(tx['rewards']);
                $('.dragon_val_3').html(tx['rewards']);
            }).catch(function (tx) {
                console.log(tx);
            });

            m_Con.methods.totalSupply().call().then(function (tx) {
                var tot = tx / 1000000000000000000
                $('#total_staked_3').html(tot);
            }).catch(function (tx) {
                console.log(tx);
            });

        }
    });

}