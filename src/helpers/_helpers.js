const users = [];

export function configureFakeBackend() {

    if(!window.indexedDB){
        console.log("not supported");
    }

    let request = window.indexedDB.open("LoginPage", 1),
            db,
            tx,
            store,
            index;

    request.onupgradeneeded = function(e) {
        db = request.result;
        store = db.createObjectStore('UserDataStore', { keyPath: 'id', autoIncrement: true});
        index = store.createIndex("firstName", "firstName", { unique: false });
    }

    request.onerror = function(e) {
        console.log("There was an error: "+ e.target.errorCode);
    }

    request.onsuccess = function(e) {
        db = request.result;
        tx = db.transaction("UserDataStore", "readwrite");
        store = tx.objectStore("UserDataStore");
        index = store.index("firstName");
    
        db.onerror = function(e) {
            console.log("Error: "+e.target.errorCode);
        }
    
        let q1 = store.getAll();

        tx.onerror = function(e) {
            console.log(e.target);
        }
    
        q1.onsuccess = function() {
            q1.result.map(data => users.push(data));
        };
    
        tx.oncomplete = function() {
            db.close()        
        }
    }

    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);

                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.email === params.email && user.password === params.password;
                    });


                    if (filteredUsers.length) {
                        
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
                    
                        let responseJson = {
                            id: user.id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };

                        
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Email or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => {
                    resolve(response)
                });

            }, 500);
        });
    }
}
