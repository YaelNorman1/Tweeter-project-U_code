const RenderModule= function(){

    const renderPosts= function(posts) {
        $("#posts").empty();

        for (const post of posts) {
            console.log(post);

            let postHeader= `<h2'>${post.text}</h2>`;
            let commentList= `<div class='comments'>`;
            let allComments= addComments(post.comments);
            let inputComment= `<input type='text' class='input-comment' placeholder='Write a comment'>`;
            let buttonComment="<button class='button-design commentBtn' type='submit'>Comment</button>";
            let deleteBtn="<span class='delete-post'>&#128465;</span>";

            let newPost=`<div class='post' data-id='${post.id}'>` 
                            + postHeader 
                            + commentList 
                                + allComments 
                                + inputComment 
                                + buttonComment 
                            + `</div>` 
                            + deleteBtn
                        + `</div>`;                        

            $("#posts").append(newPost);
            
        }
    }

    const addComments= function (comments){
        let newComments='';

        for (const comment of comments) {
            
            newComments+= `<div data-id='${comment.id}'>
                                <span class="delete-comment">&#215;</span>
                                <span class="comment">${comment.text}</span>
                           </div>`;
        }
        return newComments;
    }
    return {renderPosts : renderPosts}
}