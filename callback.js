// function getSongs(){
//     setTimeout(() => {
//         console.log("songs aa gaye");
//     }, 2000);
// }

// function moreSongs(){
//     setTimeout(()=>{
//         console.log("More Songs Are come");
//     },1200);
// }

// getSongs();
// moreSongs();

function connectToServer(cbfn){
     console.log("connecting to server...");
     setTimeout(function(){
        console.log("server connected.");
         cbfn(); 
     },2000);
}

function fetchCourses(cbfn){
    console.log("fetching course....");
    setTimeout(() => {
        cbfn(["course 1", "course 2", "course 3"]);
    },2000);
}

connectToServer( function(){
    fetchCourses(function(data){
        console.log(data);
    });
});