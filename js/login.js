//step 1: add click handler on button

document.getElementById('login_btn').addEventListener('click',function(){
   //step 2: get user email by id and take the value

   const userEmailText=document.getElementById('user_email');
   const userEmail=userEmailText.value;

   //step 3: get user password by id and take the value

   const userPass=document.getElementById('user_pass');
   const userPassword=userPass.value;
   
   //step 4 : verify email and password and goto another page

   if(userEmail=='noyon@gmail.com' && userPassword=='123456')
   {
    window.location.href = 'bank.html';
   }
   else{
    alert('Invalid Password');
   }
})