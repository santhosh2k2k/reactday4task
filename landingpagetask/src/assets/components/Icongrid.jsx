import React from 'react'

function Icongrid({data}) {
  return <>
   <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="bi-window m-auto text-primary"></i></div>
                            <h3>{data.name}</h3>
                            <p class="lead mb-0">{data.description}</p>
                        </div>
                    </div></div></div></section>
  </>
}

export default Icongrid