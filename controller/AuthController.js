const jwt = require('jsonwebtoken')

module.exports.login = async (req,res)=>{
  const {username, hashedpassword} = req.body
  //validate-user using username and hashedpassword
  // IF user is validated
            const user = { name: username }
            const newAccessToken = generateAccessToken(user)
            res.json({ accessToken: newAccessToken})
  // ELSE throw error
}

// module.exports.logout = async (req,res)=>{
// }

function generateAccessToken(user){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    //jwt expires in 1 hr
}