import React from 'react'


function Testimonial(data2) {
  return <>


                <div class="row">
                    <div class="col-lg-4">
                        <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img class="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                            <h5>{data2.name}</h5>
                            <p class="font-weight-light mb-0">{data2.description}</p>
                        </div>
                    </div></div>
  </>
}

export default Testimonial


