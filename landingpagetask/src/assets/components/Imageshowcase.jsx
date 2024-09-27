import React from 'react'

function Imageshowcase({data1}) {
  return <>
  <section class="showcase">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>{data1.name}</h2>
                        <p class="lead mb-0">{data1.description}</p>
                    </div>
                </div></div></section>
  </>
}

export default Imageshowcase