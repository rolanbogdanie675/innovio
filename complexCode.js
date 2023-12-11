/* filename: complexCode.js */

// This code demonstrates a sophisticated implementation of a social media platform

// Class definition for User
class User {
  constructor(name, username, email, password) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  // Method to add a post
  addPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.push(post);
    return post;
  }

  // Method to add a friend
  addFriend(user) {
    if (user instanceof User && !this.friends.includes(user)) {
      this.friends.push(user);
      user.addFriend(this);
    }
  }

  // Method to remove a friend
  removeFriend(user) {
    if (user instanceof User && this.friends.includes(user)) {
      this.friends = this.friends.filter(friend => friend !== user);
      user.removeFriend(this);
    }
  }

  // Method to display user's posts
  displayPosts() {
    this.posts.forEach(post => console.log(`${post.title}: ${post.content}`));
  }
}

// Class definition for Post
class Post {
  constructor(title, content, user) {
    this.title = title;
    this.content = content;
    this.user = user;
  }
}

// Create users
const user1 = new User("John Doe", "johndoe", "johndoe@example.com", "password1");
const user2 = new User("Jane Smith", "janesmith", "janesmith@example.com", "password2");

// Add friends
user1.addFriend(user2);

// Create posts for user1
const post1 = user1.addPost("Hello World", "I'm new here!");
const post2 = user1.addPost("My First Trip", "Just arrived at an amazing destination!");

// Display user1's posts
console.log(`Posts by ${user1.name}:`);
user1.displayPosts();

// Output:
// Posts by John Doe:
// Hello World: I'm new here!
// My First Trip: Just arrived at an amazing destination!