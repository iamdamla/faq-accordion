const accordionItemEl = document.getElementsByClassName("accordion__item");
const accordionTitleEl = document.querySelector("p.accordion__title");

function accordion(){
  for (let item of accordionItemEl) {
    let accHeader = item.firstElementChild;
    accHeader.addEventListener("click", function() {
      // accordionTitleEl.style.fontWeight = "400";
      let accDetails = this.nextElementSibling;
      if(accDetails.style.maxHeight){
        accDetails.style.maxHeight = null;
        // this.nextElementSibling.style.fontWeight ="400";
        this.lastElementChild.classList.remove("rotate") ;
        
        
      } else {
        accDetails.style.maxHeight = accDetails.scrollHeight + "px";
        // this.nextElementSibling.style.fontWeight ="700";
        this.lastElementChild.classList.add("rotate") ;
        // accordionTitleEl.style.fontWeight = "700";
        
      }
    });
  }
}

accordion();