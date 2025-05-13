 


  
  const scrollBtn = document.getElementById("scrollToTop");

  // إظهار الزر عند النزول
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  
  scrollBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });



 