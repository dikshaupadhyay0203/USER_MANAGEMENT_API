import { users } from "../data/user";

export const checkAuth = (req, res, next) => {
  const success = true; 
    if (success) {
    console.log("Auth checked");
    next();
  } else {
    console.log("Auth failed");
    return res.status(401).json({
      success: false,
      message: "Auth failed"
    });
  }
};
export const validateUserId=(req,res,next)=>{
    const{id}=req.params;

    if(!id||id.length<5){
        return res.status(400).json({
            success:false,
            message: "Invalid uder ID"
        });
    }
    next();
}

export const checkBodyAuth = (req, res, next) => {
  const { token } = req.body || {};   

  if (token && token.length >= 5) {
    console.log("Body auth checked");
    next();
  } else {
    console.log("Body auth failed");
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};



export const getUsers=(req,res)=>{
    const{token}=req.headers
    console.log("req",req);
    console.log("token",token)
    res.status(200).json({
        success:true,
        count:users.length,
        data:users
    });
}