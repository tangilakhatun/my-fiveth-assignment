
<!-- qustion-1 -->
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=> Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll:
getElementById =  Finds only one element by its unique id.

getElementByClassName = Finds all elements that share the same class.It gives a list-like result.

querySelector = Finds the first elements that matches a css selector(id,class,tag etc.)

querySclectorAll = Finds all elements that match a css selector and returns them in a list.

<!-- question-2 -->
2. How do you create and insert a new element into the DOM?

= Firstly,create the element with document.createElement().
Then add some text or content to it.And finally attach it to the page using append().

<!-- question-3 -->
3. What is Event Bubbling and how does it work?

= Event bubbling means when an evant happens on a child element, it doesn't stop there.
The event goes up step by step to its parent,grandparent,and soon.
For example,if you clic a button inside a div,first the button click works,
then the event goes to the div,then to the body.

<!-- question-4 -->
4. What is Event Delegation in JavaScript? Why is it useful?

= Event delegation is when you put one event listener on a parent element instead of 
putting listeners on many child elements .it is useful because
(1) It makes the code shorter and cleaner.
(2) It works for many elements at once.
(3) It also wors for elements that are added later.

<!-- question-5 -->
5. What is the difference between preventDefault() and stopPropagation() methods?

= Defference between preventDefault() and stopPropagation() :

preventDefault() = Stops the default action of an event.
For example,prevent a form from submitting or stop a link from opening.

stopPropagation() = Stops the event from going up to parent elements,meaning it blocks bubbling.