//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)

// See quiz.js for more details

describe('a quiz', function() {

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

});





// Create a new quiz object
// var quiz = new Quiz()

 describe('the add method', function(){

  it('can add numbers', function() {
    quiz.add(4);
    expect(quiz.numbers).toContain([4]);
  });
 });


 describe('the numbers method', function () {

   it('it returns an array', function() {
    quiz.add(4);
    expect(quiz.numbers).toBe(Array);
   });

   it('it should not contain a string', function() {
    quiz.add("tree");
    expect(quiz.numbers).toContain();
   });

 });



 describe('the trash method', function() {

  it('can add strings to the trash array', function() {
    quiz.add("tree");
    expect(quiz.trash).toContain('tree');
  });

  it('will not contain a number in the trash array', function() {
    quiz.add(4);
    expect(quiz.trash).toContain();
  });

 });


describe('the count method', function() {

});

// We can add numbers to it
// quiz.add(5)
// quiz.add(3)

// We can see the numbers we've added
// quiz.numbers() => [5, 3]

// We can only add numbers
// quiz.add("7")
// quiz.numbers() => [5, 3]

// Or arrays of numbers
// quiz.add([4, 2, true, 9])
// quiz.numbers() => [5, 3, 4, 2, 9]

// We can't access the array directly
// quiz = new Quiz();
// quiz.add([1, 2, 3])
// quiz.numbers().push(5)
// quiz.numbers() => [1, 2, 3]

// Trash returns anything we've tried to add that's not a number.
// quiz.add(["7", true])
// quiz.trash() => ["7", true]

// Returns the number of occurences of a specified number
// quiz.numbers() => [5, 3, 4, 3]
// quiz.count(3) => 2

// Takes a specified length of an array starting from the left and moves it to
// the tail end
// quiz = new Quiz()
// quiz.add([1, 2, 3, 4, 5])
// quiz.numbers() => [1, 2, 3, 4, 5]
// quiz.rotate(2)
// quiz.numbers() => [3, 4, 5, 1, 2]

// Prints out the number of even numbers in the array.
// quiz.numbers() => [1, 2, 3, 4, 5]
// quiz.countEvent() => 2