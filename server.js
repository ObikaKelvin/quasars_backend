const app = require('./app');
const mongoose = require('mongoose');
const cors = require('cors');

const searchPageQuery = require('./scraper');
const dotenv = require('dotenv');

const routes = require('./routes');

dotenv.config();

app.use(cors());
app.options('*', cors());

const PORT = process.env.PORT; 

app.listen(PORT, () => { 
    console.log(`server started on port ${PORT}`);

    try {
        const DB = process.env.DB_URI.replace(
          '<password>',
          process.env.DB_PASSWORD
        );

        console.log(DB)
        
        mongoose.set('strictQuery', true)
        mongoose.connect(
            DB,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,                
            }
        ).then(() => console.log(" Database is connected"))
        .catch(e => console.log(e))
    
      } catch (e) {
        console.log("could not connect");
      }
});

app.use('/api/v1', routes);


app.get("/scrapper", async (req, res) => { //just for texting, on localhost/api 

  const input = req.query.input;
  const result = await searchPageQuery(input); 
  res.json({ "query": result}) 
});