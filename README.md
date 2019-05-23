# Isomorphics App
Clone and Enjoy

### Algorithm in action:
If you like algorithm then this repo would interest you to clone. It is a simple program that takes in two strings as parameter and map one to another . It returns true if it is and return false if it is not.

### The Problem in details:
Given two (dictionary) words as Strings, determine if they are isomorphic. Two words are called isomorphic
if the letters in one word can be remapped to get the second word. Remapping a letter means replacing all
occurrences of it with another letter while the ordering of the letters remains unchanged. No two letters
may map to the same letter, but a letter may map to itself.

### The Logic:
(1) Check length of both the strings

(2) If strings are of not equal length then return false

(3) Create a character map use characters from string 1 as key and map it with string 2

(4) While iterating over the string if string 1’s character does not exist in the hash map then add it to the hash map and map it to the string 2’s value

(5) If it exists then compare it with the string 2’s character

### Happy Coding!!!
[view project on codepen.io](https://codepen.io/NodeDeWeb/full/gJvzmx)