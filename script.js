// Particles
tsParticles.load("tsparticles",{background:{color:{value:"transparent"}},fpsLimit:60,particles:{color:{value:"#0ff"},links:{color:"#0ff",distance:150,enable:true,opacity:0.2,width:1},move:{enable:true,speed:1.5,outModes:{default:"bounce"},random:true},number:{value:40,density:{enable:true,area:800}},opacity:{value:0.3},shape:{type:"circle"},size:{value:{min:1,max:4}}},detectRetina:true});

// Theme Toggle
const toggleBtn=document.getElementById('themeToggle');const themeIcon=toggleBtn.querySelector('i');
toggleBtn.addEventListener('click',()=>{document.body.classList.toggle('light');themeIcon.classList.toggle('fa-sun');themeIcon.classList.toggle('fa-moon');});

// Toast Function
function showToast(message,type){
  const toast=document.getElementById('toast');toast.textContent=message;toast.className='toast';
  if(type==='success'){toast.style.background='var(--success)';}else if(type==='error'){toast.style.background='var(--danger)';}else{toast.style.background='var(--primary)';}
  toast.classList.add('show');setTimeout(()=>{toast.classList.remove('show');},3000);
}

// Login Form
const loginForm=document.getElementById('loginForm');
if(loginForm){
  const loginBtn=document.getElementById('loginBtn');const btnText=loginBtn.querySelector('.btn-text');const spinner=loginBtn.querySelector('.loading-spinner');
  loginForm.addEventListener('submit',(e)=>{e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    spinner.style.display='inline-block';btnText.textContent='جاري تسجيل الدخول...';loginBtn.disabled=true;
    setTimeout(()=>{showToast('تم تسجيل الدخول بنجاح!','success');spinner.style.display='none';btnText.textContent='تسجيل الدخول';loginBtn.disabled=false;console.log('Redirect to dashboard');},2000);
  });
}

// Signup Form
const signupForm=document.getElementById('signupForm');
if(signupForm){
  const signupBtn=document.getElementById('signupBtn');const btnText=signupBtn.querySelector('.btn-text');const spinner=signupBtn.querySelector('.loading-spinner');
  signupForm.addEventListener('submit',(e)=>{e.preventDefault();
    const password=document.getElementById('password').value;
    const confirmPassword=document.getElementById('confirmPassword').value;
    if(password!==confirmPassword){showToast('كلمة المرور غير متطابقة','error');return;}
    spinner.style.display='inline-block';btnText.textContent='جاري إنشاء الحساب...';signupBtn.disabled=true;
    setTimeout(()=>{showToast('تم إنشاء الحساب بنجاح!','success');spinner.style.display='none';btnText.textContent='إنشاء الحساب';signupBtn.disabled=false;console.log('Redirect to login');},2000);
  });
}
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { auth } from "./firebase.js";

// TOAST
function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast " + type + " show";

  setTimeout(() => toast.classList.remove("show"), 3000);
}

// THEME TOGGLE
document.getElementById("themeToggle").addEventListener("click", () => {
  const theme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", theme);
});

// SIGN UP HANDLER
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;

    if (pass !== confirm) {
      showToast("Passwords do not match!", "error");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      showToast("Account created successfully!", "success");
      setTimeout(() => (window.location.href = "login.html"), 1500);
    } catch (err) {
      showToast(err.message, "error");
    }
  });
}

// LOGIN HANDLER
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, pass);
      showToast("Login Successful!", "success");
      setTimeout(() => (window.location.href = "index.html"), 1500);
    } catch (err) {
      showToast(err.message, "error");
    }
  });
}
