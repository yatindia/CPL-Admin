
<script context="module">
    export function load({params}) {
        return {
            props: {id: params.id}
        }
    }
  </script>
  
  <!-- svelte-ignore non-top-level-reactive-declaration -->
  <script>
    export let id
    import { onMount} from 'svelte'
    import mapboxgl from "mapbox-gl";
    import { API, Client, IMG , PROFIMG } from '../../../config';
    import { Email, HackerNews, Reddit, LinkedIn, Pinterest, Telegram, Tumblr, Vk, WhatsApp, Xing, Facebook, Twitter, Line } from 'svelte-share-buttons-component';
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0aHlhZGV2IiwiYSI6ImNsM3R5bGh1cjBlZ2wzaXBjazI2ZTBnMm8ifQ.GLQgbjT3w49JfCTJ_iEsQA';
  
    let userData;
    let property;
    let owner;
    let embVidLink;
    $: url = `${Client}/view/${id}`;
  $: title = `Hi, I have listed ${property?.title? property.title: "My Property"} in Commercial Listing Pro ${property?.for? "for "+property.for: ""}`;
  $: desc = 'User Commercial Listing Pro is not only a listing website for properties but also a new hub for Real Estate Developers and Realtors';
  
    onMount(async () => {

          
  
        // let token = window.localStorage.getItem("login");
        // token = JSON.parse(token)
  
        // await fetch(`${API}/user`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type" : "application/json",
        //         "Authorization": `<Bearer> ${token}`
        //     }
        // })
        // .then(res => res.json())
        // .then((res)=>{
        //     if (res.status) {
        //         userData = res.data.accountVerified
        //         console.log(userData);
        //     }
        // })
  
        const response = await fetch(`${API}/admin/getsingleproperty/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Authorization: `Bearer ${token}`,
            }
        });
        const data = await response.json();
        console.log(data)
        property = data.data
        owner = property.owner
        embVidLink = property.video.split(/[=]/)
        embVidLink = embVidLink[1]
        console.log(embVidLink);
  
        console.log(property);

        const response2 = await fetch(`${API}/admin/getuser/${owner}`, {
            method: "GET",
            // headers: {
            //     "Content-Type" : "application/json"
            // }
        })
        const data2 = await response2.json()
        console.log(data2);
        if (data2.status === true) {
            userData = data2.data.profile
            console.log(userData);
        }

       
  
        let map
       map = new mapboxgl.Map({
                container: "map",
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [property.gps.lng, property.gps.lat],
                zoom: 15,
              });
         map.on('load', ()=>{
            new mapboxgl.Marker({
                    color: "red",
                    draggable: false
                    })
                    .setLngLat([property.gps.lng, property.gps.lat])
                    .addTo(map)
        })
  
  
    })

    // onMount(async () => { 
    //     console.log("ook");
    //     const response2 = await fetch(`${API}/admin/getuser/${owner}`, {
    //         method: "GET",
    //         // headers: {
    //         //     "Content-Type" : "application/json"
    //         // }
    //     })
    //     const data2 = await response2.json()
    //     console.log(data2);
    //     if (data2.status === true) {
    //         userData = data2
    //         console.log(userData);
    //     }
    // })

   async function deleteProperty() {
    const response = await fetch(`${API}/admin/deleteproperty/${id}`, {
            method: "PUT",
        });
        const data = await response.json();
        console.log(data)
        if (data.status === true) {
            alert('Property deleted Successfully')
            window.location.href = '/search'
        }
    }
    // async function getUser() {
    //     const response = await fetch(`${API}/admin/getuser/${owner}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         }
    //     })
    //     const data = await response.json()
    //     console.log(data);
    //     if (data.status === true) {
    //     }
    //     window.location.href = `/user/${owner}`

    //          }
  
  </script>
  
  <svelte:head>
  <link rel="icon" href="/img/favicon.png" />
  <title>Property - { property? property.title:""}</title>
  </svelte:head>
  
  
  
  
  <div class="main-container">
    {#if property}
    <div id="carouselExampleIndicators" class="carousel slide my-5" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            {#each property.photos as photo}
            <div class="carousel-item active">
                <img class="d-block w-100"
                    src={`${IMG}/${photo}`} 
                    alt="First slide">
            </div>
  
            {/each}
            
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
  
    <div class="social-container my-5">
        <h3>Share { property? property.title:"Property"} To More</h3>
        <div class="social">
            <Email subject="{title}" body="{desc} {url}" />
        <HackerNews class="share-button" {title} {url} />
        <Reddit class="share-button" {title} {url} />
        <LinkedIn class="share-button" {url} />
        <Pinterest class="share-button" {url} media="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/200px-Svelte_Logo.svg.png" description={title} />
        <Telegram class="share-button" text={title} {url} />
        <Vk class="share-button" {title} {url} />
        <WhatsApp class="share-button" text="{title} {url}" />
        <Xing class="share-button" {title} {url} />
        <Facebook class="share-button" quote="{title}" {url} />
        <Twitter class="share-button" text="{title}" {url} hashtags="github,svelte" via="username" related="other,users" />
        <Line class="share-button" {url} />
        </div>
    </div>
  
  
    
    
    <div class="accordion" id="accordionExample">
        {#each property.floors as floor, i}
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`}
  
                    aria-expanded="false" aria-controls={`#collapse${i}`}>
                    Floor #{floor.floor_number} | {floor.floor_size} SQFT | 2 ROOMs
                </button>
            </h2>
            <div id={`collapse${i}`} class:show={i ==0} class:collapsed={i != 0} class="accordion-collapse collapse " aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body">
    
                    <table class="table">
                        <thead>
                            <tr>
    
                                <th scope="col">SPACE</th>
                                <th scope="col">SIZE</th>
                                <th scope="col">TERM</th>
                                <th scope="col">RATE</th>
                                <th scope="col">SPACE USE</th>
                                <th scope="col">CONDITION</th>
                                <th scope="col">AVAILABLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{floor.floor_number}st Floor</td>
                                <td>{floor.floor_size} SF</td>
                                <td>{floor.term}</td>
                                <td>{floor.rate}</td>
                                <td>Office</td>
                                <td>{floor.condition}</td>
                                <td>{floor.avaliable?"Yes":"No"}</td>
    
                            </tr>
                        </tbody>
                    </table>
  
                    <ul class="list-group">
                        {#if floor.amenities}
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-2">Amenities</h5>
                          </div>
                            {#each floor.amenities as amenity}
                            <li class="list-group-item">{amenity}</li>
                            {/each}
                        {/if}
                    </ul>
                </div>
            </div>
        </div>
        {/each}
       
    </div>
  
    {/if}
    
        
    {#if property}
    <div class="container mt-5`" style="width:70%">
        <div class="row">
          <div class="col-sm">
  
            <h3 class="titled">Quick Summary</h3>
            <div class="list-group">
                <li class="d-flex justify-content-between"> 
                    <strong style="color: #14213d;">Property ID:</strong>
                    <span>{property.uid}</span>
                </li>
  
                <li class="d-flex justify-content-between"> 
                    <strong style="color: #14213d;">Location:</strong> 
                    <span>{property.city}, {property.zip_code}</span>
                </li>
  
                <li class="d-flex justify-content-between">
                    <strong style="color: #14213d;">Property Type:</strong>
                    <span>{property.type}</span>
                </li>
  
                <li class="d-flex justify-content-between">
                    <strong style="color: #14213d;">Status:</strong>
                    <span>{property.for}</span>
                </li>
  
                <li class="d-flex justify-content-between">
                    <strong style="color: #14213d;">Area:</strong>
                    <span>{property.building_size} <strong style="color: #14213d;">SQFt</strong></span>
                </li>
            </div>
  
          </div>
  
          <div class="col-sm">
  
             <h3 class="titled">Property Owner/Agent</h3>
        
             <div class="list-group">
                <li class="d-flex justify-content-between"> 
                    <div class="prof-div">
                 <img class='img-fluid'  src={`${PROFIMG}/${userData}`} alt="">

                    </div>
                </li>
                <li class="d-flex justify-content-between"> 
                    <strong style='color:#14213d'>Name:</strong>
                    <span>{property._id}</span>
                </li>
  
                <li class="d-flex justify-content-between"> 
                    <strong style='color:#14213d'>Email:</strong> 
                    <span>{property.city}, {property.zip_code}</span>
                </li>
  
                <li class="d-flex justify-content-between">
                    <strong style='color:#14213d'>Phone:</strong>
                    <span>{property.type}</span>
                </li>
            </div>
            <!-- <h4 class="text-danger">
                You need to be The Logged user to see Property owner details
            </h4> -->
            
          </div>
  
        </div>
      </div>
  
    <div class="container mt-5 mb-5" style="width:70%">
        <div class="row">
          <div class="col-sm">
  
            <h3 class="titled">Property Highlights</h3>
            <div class="list-group">
                <ul class="list-group list-group-flush">
                    {#if property.highlights}
                        {#each property.highlights as highlight, i}
                        <li class="list-group-item"><strong>{i+1}.</strong> {highlight}</li>
                        {/each}
                    {/if}
                </ul>
            </div>
          </div>
  
        </div>
      </div>
  
  
    
    
    {/if}
  
    <div class="container my-5" style="width:70%">
        <div class="row">
            {#if true || (property && 'video' in property)}
                <div class="col-sm">
                    <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${embVidLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            {/if}
  
            <div class="col-sm">
                <div style="width:100%;height:315px" class="col-12 map" id="map"></div>
            </div>
        
        </div>
    </div>
  
  
    <!-- <div class="ad">
        <h1>AD</h1>
    </div> -->
  
  <div class="delbuttons">
    <button class="btn btn-danger" on:click={()=>{
        deleteProperty()
    }}>Delete Property</button>
    <button class="btn btn-primary mx-2" on:click={()=>{
                window.location.href = `/user/${owner}`

    }}>View User</button>

  </div>
 

  
  
  </div>
  
  
  
  
  <style lang="scss">
  
    .ad {
        background-color: grey;
        display: grid;
        place-content: center;
        aspect-ratio: 16/4;
        margin:5vh auto;
        width: 70%;
        
    }
  
    .social-container {
        width:80%;
        margin: 2% auto;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        flex-direction: column;
  
    }
    .carousel {
        width: 70%;
        height: 50vh;
        overflow: hidden;
        margin: auto
    }
  
    .accordion {
        width: 70%;
        margin: 25px auto 0 auto;
    }
  
    .amenities-list {
        
        ul {
            display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
  
    .title-d , strong {
        color: red;
    }
  
  
    .accordion-button:not(.collapsed) {
        color: red;
    background-color: #ffe7e7;
    }
  
    .list-group > li:nth-child(odd) {
        background-color: #ffe7e7;
    }
  
    .highlight {
        background-color: #ffffff !important;
    }
  
    .list-group > li {
        padding: 10px;
    }
    .list-group {
        padding: 5px;
        box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 40px;
    }
    .main-container {
        position: relative;
        padding-top: 24px;
        color: #14213d;
    }
    h3,li,table {
        color: #14213d;

    }
    .delbuttons {
        position: absolute;
        right: 12px;
        top: 12px;
    }
    .list-group {
        background-color: #b6d5eb;
    }
    .list-group>li:nth-of-type(odd) {
        background-color: #b6d5eb;

    }
    .list-group>li:nth-of-type(even) {
        background-color: #fff;

    }
    .prof-div {
        width: 50%;
        margin: 0 auto;
    }
  </style>
