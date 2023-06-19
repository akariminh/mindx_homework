
// Bai tap 1
function reverseArray(str) {
    let arr = str.split("");
    const reversedStr = arr.reverse().join("");
    return reversedStr;
}

console.log(reverseArray('abcdef'));

function difference(arr1, arr2) {
    let result = arr1;
    for (let i = 0; i < arr2.length; i++) {
        const element = arr2[i];
        if (findIndex(result, element) === -1) {
            result.push(element);
        }
    }
    return result;
}
// Bai tap 2
function findIndex1(arr, findNumber) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === findNumber) {
            return i;
        }
    }
    return -1;
}

// Web Phonebook

users = [
    {
        name: "alice",
        phoneNumber: "8164035456"
    },
    {
        name: "cris",
        phoneNumber: '8643094841'
    },
    {
        name: "daniel",
        phoneNumber: '8164035456'
    },
    {
        name: "bob",
        phoneNumber: "5725662397"
    }
]
const sortedUsers = users.sort((a, b) => a.name.localeCompare(b.name))


function formatPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3);
    let mobilePrefix = numbers.slice(3, 6);
    let lineNumber = numbers.slice(6);
    let formattedNumber = '(' + areaCode + ') ' + mobilePrefix + '-' + lineNumber;
    return formattedNumber;
}

const searchInput = document.querySelector("#search")

const initUserEle = (users) => {
    const getUserEle = document.querySelector(".users-list");
    const processingUserCard = users.map((user) => {
        const { name, phoneNumber } = user;
        return `<div class="card">
                <span class="user-name">${name}</span>
                <a href="tel:${phoneNumber}" class="user-phone">${formatPhoneNumber((phoneNumber))}</a>
            </div>`})
    getUserEle.innerHTML = processingUserCard.join("");
}

initUserEle(users);

searchInput.addEventListener("input", e => {
    const textValue = e.target.value.toLowerCase();
    const filteredUsers = users.filter((user) => {
        const { name, phoneNumber } = user;
        return name.includes(textValue) || phoneNumber.includes(textValue);
    });
    initUserEle(filteredUsers);
    console.log(filteredUsers)

})


function removeDuplicate() {
    const newUsersList = users.reduce((newList, currentList) => {
        let obj = newList.find((item) => item.phoneNumber === currentList.phoneNumber);
        if (obj) {
            return newList
        } else {
            return newList.concat([currentList]);
        }
    }, [])
    initUserEle(newUsersList);
    
};


const submit = document.querySelector('#submit');
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const errorMessage = document.querySelector('.form-message')


submit.addEventListener("click", (e) => {
    const inputName = document.getElementById("name").value;
    const inputPhoneNumber = document.getElementById("phone").value;
    if (!inputName.trim() || !inputPhoneNumber.trim()) {
        errorMessage.innerHTML = "Thông tin không hợp lệ";
    }
    let newUser = {
        name: inputName,
        phoneNumber: inputPhoneNumber
    }
    if (localStorage.getItem('newUserList') === null) {
        let newUserList = [];
        newUserList.push(newUser);
        localStorage.setItem('newUserList', JSON.stringify(newUser));
    }
    else {
        newUserList = JSON.parse(localStorage.getItem('newUserList'));
        newUserList.push(newUser);
        localStorage.setItem('newUserList', JSON.stringify(newUserList));
    }
    document.getElementById('myForm').reset();
    initUserEle(newUserList);
    console.log(initUserEle(newUserList));
    console.log(newUser);
    e.preventDefault();
})
