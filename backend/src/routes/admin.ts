
import express,{Application,Request,Response,NextFunction} from "express";
import {Property} from "../model/Property"
import {User} from "../model/User";
import {Admin} from "../model/Admin"
import { response } from "../types/types";
import  jwt  from "jsonwebtoken";
import multer from "multer"
import {v4 as uuid} from "uuid"
import {Storage} from "@google-cloud/storage"
import path from "path"
import dotenv from "dotenv";
dotenv.config();
const jwtToken2 = process.env.JWT_TOKEN_KEY2!;



let app: Application = express()



app.post("/login", async (req: any, res: Response) => {
  let response: response = {
    status: false,
    message: "somthing went wrong, try later",
  };

  try {
    let loggingUser = await Admin.findOne({ email: req.body.email });

    if (!loggingUser) {
      throw new Error("An account with this email does not exist");
    }

    if (loggingUser.password != req.body.password) {
      throw new Error("wrong password");
    } 
    // else if (loggingUser.accountVerified == false) {
    //   throw new Error("please verify your account");
    // }
    console.log(loggingUser , jwtToken2 , 'kk')

    let token = jwt.sign({ id: loggingUser._id }, jwtToken2);
    console.log(token)

    await User.findByIdAndUpdate(loggingUser._id, { login_token: token })
      .then(() => {
        response = {
          status: true,
          message: "logged in",
          data: { token },
        };
      })
      .catch(() => {
        throw new Error("token authorization failed");
      });
  } catch (error: any) {
    response = {
      ...response,
      status: false,
      message: error.message,
    };
  }

  res.json(response);
});


app.post("/searchpropertybyid", async (req:Request, res:Response) => {

    let response:response = {
        message : "somthing went wrong",
        status: false
    }

    try {
      let property:any;
      

       property = await Property.findOne({uid: req.body.search})
        
        

        

        if (property !== null) {
          console.log('43',property);
          
          response = {
            status: true,
            message: "Success",
            data: [
              property,
             
            ]
          }
        } 
    
    
      
    
      } catch (error:any) {

        response = {
          status: false,
          message: "The id doesen't have any property.",
         
        }
    
      }


    res.json(response)
});



app.post("/searchpropertybyquery", async (req:Request, res:Response) => {
  console.log('19',req.body.search);
  
      let response:response = {
          message : "somthing went wrong",
          status: false
      }
  
      try {
        
            let searchEXP = new RegExp(`${req.body.search}`, "i")
            // let searchQuery = []
    
            // if (req.body.search) {
            //     searchQuery.push({address_1 : searchEXP})
            //     searchQuery.push({address_2 : searchEXP})
            //     searchQuery.push({country : searchEXP})
            //     searchQuery.push({state : searchEXP})
            //     searchQuery.push({city : searchEXP})
            //     searchQuery.push({year : searchEXP})                
            //     searchQuery.push({highlights: {$in: [searchEXP]}})         
            // }
    
            // req.body.type?  searchQuery.push({type : req.body.type}) : null
            // req.body.space_use?  searchQuery.push({space_use : req.body.space_use}) : null
            // req.body.for?  searchQuery.push({for : req.body.for}) : null
            // req.body.country?  searchQuery.push({country : req.body.country}) : null
            // req.body.state?  searchQuery.push({state : req.body.state}) : null
            // req.body.city?  searchQuery.push({city : req.body.city}) : null
            // req.body.zip_code?  searchQuery.push({zip_code : req.body.zip_code}) : null
         
    
    
        
            let Data = await Property.find({
    $or: [
    {address_1: {$regex: searchEXP}},
    {address_2: {$regex: searchEXP}},
    {country: {$regex: searchEXP}},
    {state: {$regex: searchEXP}},
    {city: {$regex: searchEXP}},
    {year: {$regex: searchEXP}},
    {highlights: {$regex: searchEXP}},
    
    ]
})

            // let Data = await Property.find( {$or: searchQuery})


            console.log(Data)
            Data = Data.filter((sData) => {
              return sData.status === 'active'
            })
            
        
            response = {
                status: true,
                message: "Success",
                data: Data
          }
  
         
      
      
        
      
        } catch (error:any) {
          response.status = false
          response.message = error.message
        }
  
  
      res.json(response)
  });

   app.get("/getuser/:id", async (req: any, res: Response)=>{
    let response: response = {
      status: false,
      message: "somthing went wrong, try later",
    };
  
    try {
      let user:any = await User.findOne({_id: req.params.id});
  
      if (user) {
       console.log(user);
       
        response.data = user
        response.status = true
        response.message = "user fetched"
      }
  
    } catch (error: any) {
      response = {
        ...response,
        status: false,
        message: error.message,
      };
    }
  
    res.json(response);
  })

  //READ
app.get("/getsingleproperty/:id",async (req:Request, res:Response) => {
  let response:response = {
      message : "somthing went wrong",
      status: false
  }

  try {
      let data;
      await Property.findOne({uid: req.params.id})
      .then(res => {
          data = res
      })
      .catch( error => {
          
          throw new Error(error)
          
      })

      response.message = "Property Fetched"
      response.data = data
      response.status = true
      

  } catch (error:any) {

      response.message = "Please Enter All Essential Values"
      response.errorMessage = error.message
      
  }


  res.json(response)

});

  app.put("/deleteproperty/:id",async (req:Request, res:Response) => {
    let response:response = {
        message : "somthing went wrong",
        status: false
    }

    try {
        let data;
        await Property.findOneAndUpdate({uid: req.params.id} ,{
            status: 'blocked'
          },{new: true})
        .then(res => {
            data = res
        })
        .catch( error => {
            
            throw new Error(error)
            
        })

        response.message = "Property deleted"
        response.data = data
        response.status = true
        

    } catch (error:any) {

        response.message = "Please Enter All Essential Values"
        response.errorMessage = error.message
        
    }


    res.json(response)

});

  app.put("/deleteuser/:id", async (req: any, res: Response)=>{
    
        let response: response = {
          status: false,
          message: "somthing went wrong, try later",
        };
      
        try {
          let user:any = await User.findByIdAndUpdate(req.params.id ,{
            status: 'blocked'
          },{new: true});
      console.log(user);
      
          if (user) {
           console.log(user);
           
            response.data = user
            response.status = true
            response.message = "user deleted"
          }
      
        } catch (error: any) {
          response = {
            ...response,
            status: false,
            message: error.message,
          };
        }
      
        res.json(response);
      })
  

export default app;
