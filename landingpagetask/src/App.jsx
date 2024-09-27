import React from 'react'
import Nav from './assets/components/Nav'
import Header from './assets/components/Header'
import Testimonial from './assets/components/Testimonial'
import Icongrid from './assets/components/Icongrid'
import Imageshowcase from './assets/components/Imageshowcase'
import Calltoaction from './assets/components/Calltoaction'
import Footer from './assets/components/Footer'
import Img5 from './assets/img/testimonials-1.jpg'



function App() {
let data = [
  {
    name:"Fully Responsive",
    description:"This theme will look great on any device, no matter the size!",
  },
  {
    name:"Bootstrap 5 Ready",
    description:"Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    name:"Easy to Use",
    description:"Ready to use with your own content, or customize the source files!",
  },
]

let data1 = [
  {
    name:"Fully Responsive",
    description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  },
  {
    name:"Updated For Bootstrap 5",
    description:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  },
  {
    name:"Easy to Use & Customize",
    description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
  },
]
let data2 = [
  {
    
    name:"Margaret E.",
    description:"This is fantastic! Thanks so much guys!",
  },
  {
    
    name:"Fred S.",
    description:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  },
  {
    
    name:"Sarah W.",
    description:"Thanks so much for making these free resources available to us!",
  },
]

  return <>
  <Nav/>
  <Header/>

  {/* // Icongrid */}
            
                
                    
                            {
                              data.map((e,i)=>{
                                return<Icongrid data={e} key={i} />
                              })
                            }
                        
                    
                
            

    {/* // image showcase */}

    
                    {
                       data1.map((e,i)=>{
                       return<Imageshowcase data1={e} key={i} />
                       })
                    }
                    

     {/* testominal */}

     
     <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                
                           
                     {
                       data2.map((e,i)=>{
                       return<Testimonial data2={e} key={i} />
                       })
                       
                       }

                        </div>
                    </section>
                

                    



    
                        
                    
                        
    {/* Calltoaction */}

        <Calltoaction/>
        <Footer/>

  </>
}

export default App



// imageshocase line
{/* <div class="col-lg-6 order-lg-2 text-white showcase-img" style="background-image: url('assets/img/bg-showcase-1.jpg')"></div> */}

