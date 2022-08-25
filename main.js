const tweeter = ModuleData();
const render= RenderModule();
render.renderPosts(tweeter.getPosts());


//click to post new post
$("div #post").on("click", function() {
    let newPost= $(this).closest("#container").find("input").val();
    $(this).closest("#container").find("input").val("");

    if(newPost) {
        tweeter.addPost(newPost);
        render.renderPosts(tweeter.getPosts());
    }
});

//click to delete a post
$("body").on("click", ".delete-post", function(){
    console.log( $(this).closest(".post").data("id"));
    let postId=$(this).closest(".post").data("id");

    tweeter.removePost(postId);
    render.renderPosts(tweeter.getPosts());
});

//click to add new comment
$("body").on("click",".commentBtn", function(){
    let commentText= $(this).closest(".comments").find("input").val();
    console.log(commentText);
    let postId=$(this).closest(".post").data("id");

    if(commentText) {
        tweeter.addComment(postId, commentText);
        render.renderPosts(tweeter.getPosts());
    }
});

//click to delete comment
$("body").on("click",".delete-comment", function(){
    let commentId= $(this).closest("div").data("id");
    let postId=$(this).closest(".post").data("id");

    tweeter.removeComment(postId,commentId);
    render.renderPosts(tweeter.getPosts());
});







// tweeter.addPost("This is my own post!");
// tweeter.addPost("2");
// tweeter.addPost("3");
// tweeter.addPost("4");
// tweeter.addPost("5");
// console.log(tweeter.getPosts());

// tweeter.removePost("p2");
// tweeter.removePost("p3");
// console.log(tweeter.getPosts());

// tweeter.addComment("p1", "aiiiii");
// tweeter.addComment("p1", "biiiii");
// tweeter.addComment("p2", "ciiiii");
// tweeter.addComment("p4", "diiiii");
// tweeter.addComment("p5", "eiiiii");
// console.log(tweeter.getPosts());

// tweeter.removeComment("p1", "c2");
// tweeter.removeComment("p4", "c3");
// console.log(tweeter.getPosts());