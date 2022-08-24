import {Schema, model} from "mongoose";

const ComplaintSchema = new Schema({

complaint_by:{
    type: String,
    require:false
},
complaint_on:{
    type: String,
    require:false
},
message:{
    type: String,
    require:false
},
status:{
    type: String,
    default: 'active',
    require:false
},
type:{
    type: String,
    default: 'propert',
    require:false
}
})

export const Complaint = model("Compliants", ComplaintSchema);