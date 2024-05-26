var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
}

// -------------services---------
var manu=document.getElementById("manu");
function openmenr(){
    manu.style.right='0'}
function closemenu(){
    manu.style.right="-200px"
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx0XowYoVChECVZTSAUDHy3kUkdvsWmsIhHXlJCAjysi9AbetYZWrbMBJaYad0f_qk/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Form submit seccessfully"
        setTimeout(() => {
            msg.innerHTML=" "
        }, 5000);
        form.reset()

      })
      .catch(error => console.error('Error!', error.message))
  })


