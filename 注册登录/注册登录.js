// document.getElementById('Password').addEventListener('click', function () {
//   var title = document.getElementById('Username');
//   var loginBtn = document.getElementById('loginBtn');
//   var rememberMeLabel = document.querySelector('.Remember');
//   var passwordBtn = document.getElementById('password');
//   if (title === '111') {
//     if (passwordBtn === '111') {
//       console.log('222');
//     }
//     else {
//       alert('222')
//     }
//   }
// 当点击标签时执行方法，在注册和登录之间转换
// if (title.innerText === 'Login') {
//   title.innerText = 'Register';
//   loginBtn.value = 'Register';
//   rememberMeLabel.style.opacity = '0';
//   passwordBtn.innerText = '去登录';
//   document.getElementById('username').value = '';
//   document.getElementById('password').value = '';
//   document.getElementById('username').placeholder = 'New Username';
//   document.getElementById('password').placeholder = 'New Password';
//   document.getElementById('password').type = 'password';
// } else {
//   title.innerText = 'Login';
//   loginBtn.value = 'Login';
//   rememberMeLabel.style.opacity = '1';
//   passwordBtn.innerText = '去注册';
//   document.getElementById('username').placeholder = 'Username';
//   document.getElementById('password').placeholder = 'Password';
//   document.getElementById('password').type = 'password';
//   // 改提示词和
// }
// })