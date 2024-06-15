function connectToserver(){
    console.log("Connecting to server....");

    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve("connected");
            // console.log("connected");
        },2000); 
    });
}

function getCourses(){
    console.log("getting courses....");

    return new Promise(function(resolve, reject){
       setTimeout(function(){
        resolve(["course 1", "course 2", "course 3"]);
       },2000); 
    })
}

connectToserver()
.then(function(response){
    console.log(response);

    return getCourses();
})
.then(function(response){
    console.log(response);
})
.catch()