<script>
  import { onMount } from 'svelte'
  import {API, IMG} from "../config"

let complaints
let activeComplaints;
let solvedComplaints;
let complaintType = 'active';
  onMount( async ()=>{
              let token = localStorage.getItem("login");
        if (!token) {
        window.location.href = "/"
    }
    const response = await fetch(`${API}/admin/getcomplaints`, {
      method: "GET"
    });
    const data = await response.json();
    complaints = data.data
    activeComplaints = complaints.filter(complaint => complaint.status === 'active');
    solvedComplaints = complaints.filter(complaint => complaint.status === 'completed');
    console.log(activeComplaints,solvedComplaints)
   })

</script>

<main>
    <div class="containerr">
        <div class="d-flex justify-content-center">
            <div class="d-flex">
                <h2>Customer Complaints</h2>
                <select on:change={(e)=>{complaintType = e.target.value}} class="custom-select searchtype">
                  <option selected value="active">Active</option>
                  <option value="solved">Solved</option>
                </select>
            </div>
        </div>
        
     
      <div class="complaints">
           {#if complaints}
           {#if complaintType === 'active'}
           {#each activeComplaints as complaint}
           <div class="complaint">
               <h5><span style="font-weight: 600;">Complaint id:</span> {complaint._id}</h5>
               <a href={`/view/complaints/${complaint._id}`} >
                   <button>View complaint</button>
               </a>
           </div>
       {/each}
            {:else}
            {#each solvedComplaints as complaint}
            <div class="complaint">
                <h5><span style="font-weight: 600;">Complaint id:</span> {complaint._id}</h5>
                <a href={`/view/complaints/${complaint._id}`} >
                    <button>View complaint</button>
                </a>
            </div>
        {/each}
           {/if}
          
           {:else}
           <div class="complaint">
             <h4>No new Complaints</h4>
           </div>
           {/if}
      </div>

    </div>

</main>

<style lang="scss">
    .containerr {
        width: 80%;
        text-align: center;
        margin: 3% auto;
        .d-flex {
            margin: auto;
            h2 {
            color: #a81111;
        }
        .searchtype {
            margin-left: 8px;
    padding: 8px ;
    color: #14213d;
   }
        }
        
        .complaints {
            width: 45%;
            height: 50vh;
            background-color: #b6d5eb;
            margin:  25px auto;
            padding: 15px;
            border-radius: 6px;
            overflow-y: scroll;

            .complaint {
                background-color: #fff;
                margin: 12px 0;
                padding: 10px 6px;
                color: #14213d;
                border-radius: 5px;

                h5 {
                    padding: 7px 0;
                }
                button {
                    width: 100%;
                    border: none;
                    background-color: #14213d;
                    padding: 8px 0;
                    color: #fff;
                    border-radius: 4px;
                }
            }
        }
    }
    </style>
 