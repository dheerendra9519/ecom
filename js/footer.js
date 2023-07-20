const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
     
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui assumenda maxime eveniet aliquam ea exercitationem, veritatis quo cumque porro facilis amet eum, unde atque reprehenderit. Soluta odio, ex distinctio recusandae odit possimus blanditiis similique magnam tenetur modi in! Quibusdam in laboriosam corrupti. Eum nobis deleniti adipisci libero obcaecati possimus totam quis itaque. Alias ratione fuga repudiandae modi repellat inventore esse sit quia, quidem quaerat, doloremque harum quod sint magni vel dicta voluptatem, quo voluptates rerum commodi soluta deleniti hic. Temporibus optio at aut. Accusamus velit tenetur maiores voluptas quo, adipisci ducimus sequi officia,
             possimus minima tempora iure quibusdam debitis! Sunt?</p>
             <p class="info">support email - help@eshop.com </p>
             <p class="info">telephone - 125201455 </p>
             <div class="footer-social-container">
                 <div>
                 <a href = "#" class = "social-link">terms and conditions</a>
                 <a href = "#" class = "social-link">privacy policy</a>
             </div>
             <div>
                <a href = "https://www.instagram.com/_dhiru_rajput_10_03/" class = "social-link" target = "_blank">instagram</a>
                <a href = "https://www.facebook.com/dheerendra.rajput.752" class = "social-link" target = "_blank">facebook</a>
                
            </div>
        </div>
        <p class="footer-credit">Best online store</p>`
        
}
createFooter();