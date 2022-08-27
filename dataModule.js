const ModuleData = function () {
    let _conterPosts = 2;
    let _conterComment = 6;

    
    let _posts= [ {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ] }
    ];

    const getPosts = () => [..._posts];

    const addPost = function (newText){
        console.log("in add post : "+ newText)
        _conterPosts++;
        const post= { 
            text: newText,
            id: `p${_conterPosts}`,
            comments: []
        };
        _posts.push(post);

    }

    const removePost = function (pid) {
        tempArr= _posts.filter(data => data.id != pid);
        _posts= tempArr;
    }

    const addComment = function (pid, ctext) {

        _conterComment += 1;
        const newComment= { id: `c${_conterComment}`, text: ctext };

        let wantedPost= findPostByID(pid);
        if (wantedPost)
            wantedPost["comments"].push(newComment); 

        console.log(wantedPost);
    }

    const removeComment = function (pid, cid) {
        let wantedPost= findPostByID(pid);
        updatedComments= wantedPost["comments"].filter(data =>data.id !== cid);
        wantedPost["comments"]= updatedComments;

    }

    const findPostByID = function(id){

        for (let i=0; i<_posts.length; i++){
            if (_posts[i]["id"]=== id) {
                return _posts[i];
            }
        }
    }

    return {
        getPosts : getPosts,
        addPost : addPost,
        removePost : removePost,
        addComment : addComment,
        removeComment :removeComment
    }
}