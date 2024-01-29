 
import http from 'k6/http';
import { check, sleep } from 'k6';

//LOAD/PERF TESTING
export const options = {
    vus: 2,
    duration: '10s',
};

// export const options = {
//     insecureSkipTLSVerify: true,
//     noConnectionReuse: false,
//     stages: [
//         // A list of virtual users { target: ..., duration: ... } objects that specify 
//         // the target number of VUs to ramp up or down to for a specific period.
//         { duration: '30s', target: 20 }, // simulate ramp-up of traffic from 1 to 20 users over 30sec.
//         { duration: '45s', target: 10 }, // stay at 10 users for 45sec
//         { duration: '20s', target: 0 }, // ramp-down to 0 users
//     ]
// };

// //STRESS TESTING
// export const options = {
//     insecureSkipTLSVerify: true,
//     noConnectionReuse: false,
//     stages: [
//         { duration: '2m', target: 100 }, // below normal load
//         { duration: '5m', target: 100 },
//         { duration: '2m', target: 200 }, // normal load
//         { duration: '5m', target: 200 },
//         { duration: '2m', target: 300 }, // around the breaking point
//         { duration: '5m', target: 300 },
//         { duration: '2m', target: 400 }, // beyond the breaking point
//         { duration: '5m', target: 400 },
//         { duration: '10m', target: 0 }, // scale down. Recovery stage.
//     ],
//     thresholds: {
//         // A collection of threshold specifications to configure under what condition(s) 
//         // a test is considered successful or not
//         http_req_failed: ['rate<0.01'], // http errors should be less than 1%
//         http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
//     }
// };

// export default function () {
//     const response = http.get('https://jsonplaceholder.typicode.com/todos/1');

//     // An assertion
//     check(response, {
//         'is status 200': (x) => x.status === 200
//     });

//     sleep(1);
// }

export default function () {
    const url = 'http://test.k6.io/login';
    const payload = JSON.stringify({
      email: 'aaa',
      password: 'bbb',
    });
  
    const params = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    var response = http.post(url, payload, params);
    check(response, {
            'is status 200': (x) => x.status === 200
    });
    sleep(1);
}










//EXTRA - https://k6.io/
// OUTPUT -> other options => csv, newrelic(running in cloud)
// k6 run perfTest.js
// --out json=test.json 

//OPEN SOURCE ENDPOINTS
// GET
// 500 items - https://jsonplaceholder.typicode.com/comments 130+KB
// 5000 items - https://jsonplaceholder.typicode.com/photos 800+KB

// POST
// https://jsonplaceholder.typicode.com/posts


// INSTALLATION
// run this is win power shell
// winget install k6 --source winget

// for docker and other env - https://k6.io/docs/get-started/installation/