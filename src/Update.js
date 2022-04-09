// async function createBlog() {
//     console.log(blog);
//     // API.graphql(graphqlOperation(createBlogMutation, {input: blog}));
//   }

//   async function updateBlog(){
//     await API.graphql(graphqlOperation(updateMutation, { input: { id: blogId, name: "Updated blog info" }}));
//   }

//   async function deleteBlog({ id }) {
//     await API.graphql(graphqlOperation(deleteBlogMutation, { input: { id: blogId }}));
//   }


// create method
// <input
//         onChange={e => setFormData({ ...formData, 'name': e.target.value})}
//         placeholder="Blog name"
//         value={formData.name}
//       />
//       <input
//         onChange={e => setFormData({ ...formData, 'description': e.target.value})}
//         placeholder="Blog description"
//         value={formData.description}