const HeaderuserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('.user-name');

const localUserName = localStorage.getItem('userName');

const setUserNameInnerHtml = (name) => {
    HeaderuserNameElement.innerHTML = `${name} <span>님</span>`;
    //userNameElement.textContent = name;
    userNameElement.innerHTML = `<span id='name'>${name}</span> <span>님</span>`
};

if(localUserName){
    setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
    const userName = prompt('이름을 입력 해주세요.');
    localStorage.setItem('userName', userName);

    setUserNameInnerHtml(userName);
};


const userNumberElement = document.querySelector('.user-number');

const localUserNumber = localStorage.getItem('userNumber');

const setUserNumbertextContent = (number) => {
    userNumberElement.textContent = `${number}`;
}

if(localUserNumber) {
    setUserNumbertextContent(localUserNumber)
}

userNumberElement.onclick = () => {
    const userNumber = prompt('학번을 입력 해주세요.');
    localStorage.setItem('userNumber', userNumber);

    setUserNumbertextContent(userNumber);
};


const userEmailElement = document.querySelector('.user-email');

const localUserEmail = localStorage.getItem('userEmail');

const setUserEmailtextContent = (email) => {
    userEmailElement.textContent = `${email}`;
}

if(localUserEmail) {
    setUserEmailtextContent(localUserEmail)
}

userEmailElement.onclick = () => {
    const userEmail = prompt('이메일을 입력 해주세요.');
    localStorage.setItem('userNumber', userEmail);

    setUserEmailtextContent(userEmail);
};