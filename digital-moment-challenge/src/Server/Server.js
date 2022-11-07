const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json()); //req.body

/// UserInfo 

//search user by firstname or lastname
app.get('/search/user/:filter', async (req, res) => {
  
  
  var filter = '%'+req.params.filter +'%'
  
  try {
      
    
    const response = await pool.query('SELECT * from UserInfo WHERE UPPER(First_name) LIKE UPPER($1) OR UPPER(Last_name) LIKE UPPER($1);', [filter]);
    
    res.json(response.rows);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
  
  })

  app.get('/User/:id', async (req, res) => {

    try {
      
    const { id } = req.params;
    const response =   await pool.query("SELECT * from UserInfo WHERE ID = $1;", [id]);
    
    res.json(response.rows[0]);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
  
  })

app.get('/Users',async (req, res) => {
    try {
      pool.query('SELECT * from UserInfo;', (err, response) => {
      
  
  
        res.json(response.rows);
      });
    } catch (error) {
      console.log(error.message)
    }
      
    
})

app.put("/UserUpdate/:id", async (req, res) => {
    var email =req.body.email
    var fname = req.body.first_name
    var lname = req.body.last_name
    var dob = req.body.dob
    var gender = req.body.gender
    var pn= req.body.phone_num
    var num = req.body.street_num
    var name = req.body.street_name
    var code = req.body.postal_code
    var city = req.body.city
    var prov = req.body.province
    var country = req.body.country
    try {
      const { id } = req.params;

      const updateTodo = await pool.query(
        "UPDATE UserInfo SET Phone_num = $1 ,DoB =$2,Street_num=$3, Street_name=$4,Postal_code =$5,City=$6,Province=$7,Email =$8,First_name =$9,Last_name =$10,Country =$11,Gender =$12 WHERE patient_ID = $13;",
        [pn,dob,num, name, code , city, prov,email,fname,lname,country,gender, id]
      );

      res.json("User was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });


  app.post("/UserAdd", async (req, res) => {
    var id = req.body.patient_id
    var email =req.body.email
    var fname = req.body.first_name
    var lname = req.body.last_name
    var dob = req.body.dob
    var gender = req.body.gender
    var pn= req.body.phone_num
    var num = req.body.street_num
    var name = req.body.street_name
    var code = req.body.postal_code
    var city = req.body.city
    var prov = req.body.province
    var country = req.body.country
    
    try {
      
      
      const newP = await pool.query(
        "INSERT INTO UserInfo (ID, Email, First_name, Last_name,Phone_num, DoB, Gender, Street_num, Street_name,Postal_code, City, Province, Country) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *",
        [id, email  , fname , lname, pn, dob, gender , num, name, code, city, prov,country]
      );
  
      res.json(newP.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.delete("/UserDelete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTodo = await pool.query("DELETE FROM UserInfo WHERE ID = $1", [
        id
      ]);
      res.json("User was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });


/*-------------------------------------------------------------------------------------------------------*/

// Login
app.get('/Login/:filter', async (req, res) => {
    var user = req.params.filter
   //  var pass = req.params.password
   //  var role = req.params.role
  
   try {
     
   //AND  Password = $2 AND Role = $3
   const response =   await pool.query("SELECT * from Login WHERE Email = $1  ;", [user]);
     
   res.json(response.rows[0]);
   
     
   } catch (error) {
     console.log(error.message)
   }
   
  
  })
  
  app.post('/LoginAdd', async (req, res) => {
    var user = req.body.username
    var pass = req.body.password
    var role = req.body.role
    var id = req.body.id
  
   try {
     
   //AND  Password = $2 AND Role = $3
   const response =   await pool.query("INSERT INTO   Login(Email, Password,Role, ID)VALUES($1,$2,$3,$4) RETURNING * ;", [user,pass,role,id]);
     
   res.json(response.rows[0]);
   
  
     
   } catch (error) {
     console.log(error.message)
   }
   
  
  })
  

  


// Ideas

app.get('/Idea/:id', async (req, res) => {

    try {
      
    const { id } = req.params;
    const response =   await pool.query("SELECT * from ideas WHERE ID = $1;", [id]);
    
    res.json(response.rows[0]);
  
      
    } catch (error) {
      console.log(error.message)
    }
    
  
  })


  app.get('/search/ideas/:city/:country', async (req, res) => {
    if (req.params.country=="empty"){
      var country = '%%'
    }
    else{var country = '%'+req.params.country +'%'}
    console.log(country);
    if (req.params.city=="empty"){
      var city = '%%'
    }
    else{var city = '%'+req.params.city +'%'}
    console.log(city);
    

    
    
 
    try {
        
      
      const response = await pool.query('SELECT * from ideas WHERE  UPPER(City) LIKE UPPER($1) AND UPPER(Country) LIKE UPPER($2) ORDER BY UpVotes DESC, DownVotes ASC;', [city,country]);
      
      res.json(response.rows);
    
        
      } catch (error) {
        
      }
      
    
    })

    app.get('/Ideas', async (req, res) => {

        try {
          
        const { id } = req.params;
        const response =   await pool.query("SELECT * from ideas;");
        
        res.json(response.rows);
      
          
        } catch (error) {
          console.log(error.message)
        }
        
      
      })

      app.get('/IdeasTrending', async (req, res) => {

        try {
          
        const { id } = req.params;
        const response =   await pool.query("SELECT * from ideas ORDER BY UpVotes DESC, DownVotes ASC;");
        
        res.json(response.rows);
      
          
        } catch (error) {
          console.log(error.message)
        }
        
      
      })

// challenges
app.get('/Challenge/:id', async (req, res) => {

  try {
    
  const { id } = req.params;
  const response =   await pool.query("SELECT * from challenges WHERE ID = $1;", [id]);
  
  res.json(response.rows[0]);

    
  } catch (error) {
    console.log(error.message)
  }
  

})


app.get('/search/challenges/:city/:country', async (req, res) => {
  if (req.params.country=="empty"){
    var country = '%%'
  }
  else{var country = '%'+req.params.country +'%'}
  console.log(country);
  if (req.params.city=="empty"){
    var city = '%%'
  }
  else{var city = '%'+req.params.city +'%'}
  console.log(city);
  

  
  

  try {
      
    
    const response = await pool.query('SELECT * from challenges WHERE  UPPER(City) LIKE UPPER($1) AND UPPER(Country) LIKE UPPER($2) ORDER BY UpVotes DESC, DownVotes ASC;', [city,country]);
    
    res.json(response.rows);
  
      
    } catch (error) {
      
    }
    
  
  })

  app.get('/Challenges', async (req, res) => {

      try {
        
      const { id } = req.params;
      const response =   await pool.query("SELECT * from challenges;");
      
      res.json(response.rows);
    
        
      } catch (error) {
        console.log(error.message)
      }
      
    
    })

    app.get('/ChallengesTrending', async (req, res) => {

      try {
        
      const { id } = req.params;
      const response =   await pool.query("SELECT * from challenges ORDER BY UpVotes DESC, DownVotes ASC;");
      
      res.json(response.rows);
    
        
      } catch (error) {
        console.log(error.message)
      }
      
    
    })

      app.listen(5001, () => {
        console.log("server has started on port 5001");
      });
    
