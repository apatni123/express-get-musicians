// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');


const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");
const request = require("supertest")

describe('./musicians endpoint', () => {
    // Write your tests here
    test("It should respond with a status code of 200", async () => {
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);
      });
    
      
    
      test("It should return a list of musicians", async () => {
        const response = await request(app).get("/musicians");
        const responseData = JSON.parse(response.text);
        
        
        })
      });
    
      describe('./musicians/id endpoint', () => {
        // Write your tests here
        test("It should respond with a status code of 200", async () => {
            const response = await request(app).get("/musicians/:id");
            expect(response.statusCode).toBe(200);
          });
        
          
        
          test("It should return a list of musicians", async () => {
            const response = await request(app).get("/musicians/:id");
            const responseData = JSON.parse(response.text);
            
            
            })
          });
    




    

