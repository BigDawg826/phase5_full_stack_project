function Home({ user }) {
  console.log(user)
  if (user) {
    return <h1>Welcome, {user.user_name}!</h1>;
  } else {
    return (<>
    <h1>Please Login or Sign Up</h1>
    <h3> additional text</h3>
     </>);
  }
}

export default Home