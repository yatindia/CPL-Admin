<script>
  // import {fade} from "svelte/transition"
  import { onMount } from 'svelte'
  import {API, IMG} from "../config"




let properties;
let search={
          search:' '
        };

      onMount( async ()=>{
              let token = localStorage.getItem("login");
        if (!token) {
        window.location.href = "/"
    }
      //     token = JSON.parse(localStorage.getItem("login"))

      })

      let searchValue;
      let errorMessage;
     
      let searchtype = 'Search by';
     async function adminSearch() {
      console.log('ok',searchtype);
      errorMessage = false;
      search.search = searchValue;

        const response = await fetch(`${API}/admin/searchpropertyby${searchtype}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
     
    body: JSON.stringify(search),

    });
    
    const data = await response.json();
    console.log(data);
    if (data.status) {
    properties = data.data;
    }else {
      properties = []
      errorMessage = data.message
    }
    console.log(properties);
      }

</script>

<svelte:head>
<link rel="icon" href="/img/favicon.png" />
<title>Search - {searchValue?searchValue:"Property"}</title>
</svelte:head>




<main>
  <div class="search-container">
    <input type="text" class="px-4 my-4 p-2 mx-1" id="geocoder" placeholder="Search Property..."  bind:value={searchValue}>
    <select on:change={(e)=>{searchtype=e.target.value}} class="custom-select searchtype">
      <option selected>Search by</option>
      <option value="id">uid</option>
      <option value="query">query</option>
    </select>
    <button on:click={()=>{adminSearch()}} class="btn btn-danger py-2 px-4 mx-1">Search</button>
  </div>
    {#if errorMessage}
      <h3 class="text-danger text-center">Couldn't Find Any Property...</h3>
    {/if}
    {#if properties}
  <div class="containerr">

        {#each properties as property}
            <div class="property">

                {#if  property.photos && (property.photos).length > 0}
                    <img width="300px" src={`${IMG}/${property.photos[0]}`} class="img-fluid" alt="">
                {:else}
                <img width="300px" src="/img/placeholder.png" alt="">
                {/if}

                <div class="prop-details py-2">
                    <h3>{property.title}</h3>
                    <p>{property.address_1} | {property.address_2}</p>
                    <h5>For: {(property.for).toUpperCase()} | {property.city} </h5>
                    <div class="btnbox">
                        <a href={`/view/property/${property.uid}`} class="btn btnoutlinedanger w-70 mt-2 update">View property</a>
                    
                    </div>
                </div>
            </div>
        {/each}
</div>

    {/if}
  
</main>


<style lang="scss">
  main {
    width: 100%;
   .searchtype {
    padding: 10.6px ;
   }
  }

.search-container {
  text-align: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.containerr {
    width: 80%;
    margin: 3% auto;
    padding: 32px 0;
    border-radius: 12px;
    height: 480px;
    overflow-y: scroll;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    .property {
        background-color: #b6d5eb;
        color: #14213d;
        border: 1px solid rgb(190, 186, 186);
        border-radius: 8px;
        width: 90%;
        height: auto;
        display: flex;
        gap: 15px;
        padding: 16px;
        margin: 16px auto;
        
        .btnbox {
            display: flex;
            
            a.update {
                margin-right: 20px;
                border: 1.6px solid #14213d;

            }
            .delete {
                background-color: #14213d;
                border: none;
            }
        }
    }
    }
    @media(max-width:1000px) {
    .containerr {
        width: 98%;
    }
   }
   @media(max-width:826px) {
    .containerr {
        width: 70%;
        .property {
            flex-direction: column;
        }
    }
   }

  </style>