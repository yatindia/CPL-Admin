<script context="module">
    export function load({params}) {
        return {
            props: {id: params.id}
        }
    }
</script> 

<script>
    export let id;
    import {API} from "../../../config"
    
    import {onMount} from "svelte"

    let complaint;

    onMount( async () => {
        let token = localStorage.getItem("login");
        if (!token) {
        window.location.href = "/"
    }
 const response = await fetch(`${API}/admin/getsinglecomplaint/${id}`, {
            method: "GET"
        });
        const data = await response.json()
        if (data.status === true) {
            complaint = data.data[0]
        console.log(complaint);

        }
    })

   async function solveComplaint() {
        const response = await fetch(`${API}/admin/solvecomplaint/${id}`, {
            method: "PUT",
        });
        const data = await response.json();
        console.log(data)
        if (data.status === true) {
            alert('Marked as Solved')
            window.location.href = '/complaints'
        }
    }
</script>

<main>
    {#if complaint}
    <div class="containerr">
        <h2>Complaint id: {complaint._id}</h2>
        <div class="complaint">
            <div class="d-flex justify-content-between top">
                <div>
                <h5>Complaint on: {complaint.compliant_on}</h5>
                <a href={`/view/property/${complaint.compliant_on}`}>
                    <button>View Property</button>
                </a>
                </div>
                <div class="top-2">
                    <div></div>
                    <div>
                        <h5>Complainant id: {complaint.compliant_by}</h5>
                <a href={`/user/${complaint.compliant_by}`}>
                    <button>View Complainant</button>
                </a>
                    </div>

                
                </div>

            </div>
            <div class="uln"></div>
            <div class="bottom">
                <h3>
                    Complaint Message
                </h3>
                <p>
                    {complaint.message}
                </p>
                <h5>click <a href="" on:click={() => {solveComplaint()}}>Here</a> to mark it as Solved...</h5>
            </div>
        </div>
    </div>
    {/if}
    
</main>

<style lang="scss">

.containerr {
    width: 90%;
    margin: 3% auto;

    h2 {
        color: #a81111;
        margin-bottom: 15px;
        text-align: center;
    }
    .complaint {
        width: 66%;
        height: 520px;
        background-color: #b6d5eb;
        margin: auto;
        padding: 4% 3%;
        border-radius: 5px;

        .top {
            .top-2 {
                display: flex;
                justify-content: space-between;

                div {
                    width: 100%;
                }
            }
            h5 {
                font-weight: 600;
                margin-bottom: 15px;
            }
            button {
                border: none;
                padding: 5px 12px;
                background-color: #14213d;
                color: #fff;
                border-radius: 3px;
            }
        }
        .uln {
            height: 1px;
            width: 100%;
            background-color: #9b8484;
            margin: 3% auto;
        }
        .bottom {
          h3 {
            font-weight: 600;
          }
          h5 {
            margin-top: 24px;
            font-weight: 400;
          }
        }

    }
}

</style>