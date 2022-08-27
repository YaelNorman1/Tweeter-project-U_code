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

