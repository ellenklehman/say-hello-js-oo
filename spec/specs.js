describe("Friend", function() {
  describe("sayHello()", function() {
    it("says hello to the user", function() {
      var testFriend = Object.create(Friend);
      testFriend.sayHello();
      expect(testFriend.sayHello()).to.equal("Hello there! It is nice to meet you, " + testFriend.name + ".");
    });
  });
});
