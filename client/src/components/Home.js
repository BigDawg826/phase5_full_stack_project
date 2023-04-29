function Home({ user }) {
  //console.log(user)
  if (user) {
    return <h1>Welcome, {user.user_name}!</h1>;
  } else {
    return (<>
    <h1>Please Login or Sign Up</h1>
    <h3> Are you a fan of old ‘skool r&b music? In my day, black radio carried gospel, soul, funk, r&b, rap, etc.  I listened to and enjoyed it all.  If you’re an old head like me or just a younger person who wants to hear where your favorite hook was sampled from or like hearing artists who can really sing and use real musicians then this fan page is for you! Log in or sign up if you’re not a member and join your fellow music lovers. I’ll see you on the other side!  Darian</h3>
     </>);
  }
}

export default Home