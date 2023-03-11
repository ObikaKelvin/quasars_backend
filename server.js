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

//   const input = req.query.input;
//   const result = await searchPageQuery(input); 
//   res.json({ "query": result}) 

  setTimeout(() => {
    res.status(200).json({
        query: [{
            "image": "https://remax-listingphotos-ca5.imgix.net/rets-images-vancouver-can/0747c882f2fe98ad6afbde2f67406bea5832a854-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=500","price":"$2,199,000","adress1":"3029 PAISLEY ROAD","adress2":"North Vancouver, BC, V7R 1C7","area":"1,726","link":"https://www.remax.ca/luxury/bc/north-vancouver-real-estate/3029-paisley-road-wp_idm00000671-r2758769-lst","type":"Single Family","age":"N/A","ratio":1274.04},{"image":"https://remax-listingphotos-ca5.imgix.net/rets-images-vancouver-can/c4f9400f7a72095f59fb11412e7a2910c84abcca-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=500","price":"$739,000","adress1":"309-2651 LIBRARY LANE","adress2":"North Vancouver, BC, V7J 0C1","area":"672","link":"https://www.remax.ca/bc/north-vancouver-real-estate/309-2651-library-lane-wp_idm00000671-r2758823-lst","type":"Condo","age":"N/A","ratio":1099.7},{"image":"https://remax-listingphotos-ca5.imgix.net/rets-images-vancouver-can/5818ef1003bcc9606824a39199206e918882ee20-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=500","price":"$1,699,900","adress1":"1556 DEMPSEY ROAD","adress2":"North Vancouver, BC, V7K 1T1","area":"1,769","link":"https://www.remax.ca/bc/north-vancouver-real-estate/1556-dempsey-road-wp_idm00000671-r2758796-lst","type":"Single Family","age":"N/A","ratio":960.94},{"image":"https://remax-prodapp.imgix.net/next-assets/image-placeholders/residential_placeholder.svg","price":"$975,000","adress1":"31-3439 TERRA VITA PLACE","adress2":"Vancouver, BC, V5K 5H7","area":"1,386","link":"https://www.remax.ca/bc/vancouver-real-estate/31-3439-terra-vita-place-wp_idm00000671-r2758727-lst","type":"Townhome","age":"N/A","ratio":703.46},{"image":"https://remax-listingphotos-ca5.imgix.net/rets-images-vancouver-can/0374355bb4d87270eeeae992218a4aa059a14c18-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=500&blur=200","price":"$899,900","adress1":"2008-1500 FERN STREET","adress2":"North Vancouver, BC, V7J 1H6","area":"604","link":"https://www.remax.ca/bc/north-vancouver-real-estate/2008-1500-fern-street-wp_idm00000671-r2758788-lst","type":"Condo","age":"N/A","ratio":1489.9},{"image":"","price":"$1,448,000","adress1":"3106 E Georgia Street","adress2":"Vancouver, BC, V5K 2L1","area":"1371 Sqft","link":"https://www.rew.ca/properties/4890411/3106-e-georgia-street-vancouver-bc?search_params%5Bquery%5D=vancouver+vancouver&searchable_id=361&searchable_type=Geography","type":"0","age":"N/A","ratio":1056.16
        }]
    })
  }, 5000);
});