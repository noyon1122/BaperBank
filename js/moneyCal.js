//Deposite

document.getElementById('deposite_btn').addEventListener('click',function(){
    const DepoInpuField=document.getElementById('depo_input');
    const DepoInput=DepoInpuField.value;
    const Deposite=parseFloat(DepoInput);

    //deposite text 

    const DepoText=document.getElementById('deposite_text');
    const DepoTextField=DepoText.innerText;
    const DepositeAmount=parseFloat(DepoTextField);

      DepoText.innerText=DepositeAmount+Deposite;
     
      //Balance Text

      const balanceText=document.getElementById('balance_text');
      const balanceTextField=balanceText.innerText;
      const Balance=parseFloat(balanceTextField);
      
      const totalBalance=Balance+Deposite;
      balanceText.innerText=totalBalance;

      DepoInpuField.value="";
})

//Withdraw

document.getElementById('withdraw_btn').addEventListener('click',function(){
    const withdrawInputField=document.getElementById('withdraw_input');
    const withdrawInput=withdrawInputField.value;
    const Withdraw =parseFloat(withdrawInput);

    //withdraw text

    const withdrawText =document.getElementById('withdraw_text');
    const withdrawTextField=withdrawText.innerText;
    const withdrawAmount=parseFloat(withdrawTextField);

    withdrawText.innerText=withdrawAmount+Withdraw;

    //Balance Text

    const balanceText=document.getElementById('balance_text');
    const balanceTextField=balanceText.innerText;
    const Balance=parseFloat(balanceTextField);
    
    const totalBalance=Balance-Withdraw;
    balanceText.innerText=totalBalance;
    
    withdrawInputField.value="";

})