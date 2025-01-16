const axios = require('axios');

let data = JSON.stringify({
  "candidate_entity_ids": [
    "cc150bc2-0f08-4ef6-ba30-95f3533b0436",
    "dd6edf0b-ff36-4c0c-8dda-67c4e75df784",
    "76a8cd9f-8fb4-423d-9c8e-1d2b80415baf",
    "01c59652-65e8-4822-87db-44b932f40c5b",
    "8d9b12d6-0665-4d6e-8b14-f7fe882d85b0",
    "c2c012f1-ec86-4c3a-a965-67014781e771",
    "588b4ca7-41a9-4a9b-9b7e-052ba5d29c00",
    "e927e707-f394-4076-ae48-5b3ee929aff5",
    "e762f212-7394-42c7-b1e5-538385394bed",
    "2c637675-866c-4089-86a5-317546312df8",
    "25acf03c-c867-4f70-a8db-d065ad61277a",
    "ee9be25d-839e-43d4-a0d3-22a1ae0dd7ae",
    "7d1d0428-a888-414f-9053-a94e62eb6db4",
    "7b5dfe4f-e71a-41ca-afca-e2345f38c31b",
    "ae379147-7504-4101-9b10-ebe1485a207f"
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:3000/v1.0.0/api/entity/recruiter/individual-recruiter-view/51369cce-5c61-4009-a5e7-138c64a0f5bf',
  headers: { 
    'Content-Type': 'application/json', 
  },
  data: data
};

let totalTime = 0;
let hits = 10;

const testApi = async () => {
  for (let i = 0; i < hits; i++) {
    const start = Date.now();
    try {
      const response = await axios.request(config);
      console.log(`Response ${i + 1}:`, response.status);
    } catch (error) {
      console.log(`Error on request ${i + 1}:`, error);
    }
    const end = Date.now();
    const duration = end - start;
    totalTime += duration;
    console.log(`Request ${i + 1} took ${duration} ms`);
  }

  const averageTime = totalTime / hits;
  console.log(`Average time across ${hits} requests: ${averageTime} ms`);
};

testApi();
