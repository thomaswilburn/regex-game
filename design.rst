(lo|pi)ck
======================

This is a small, mostly text-based adventure game that teaches the basics of regular expressions for non-developers. It does so by putting them in the role of a locksmith attempting to open a series of locks, each of which is controlled by a set of "pins" that must be matched (or not matched) by the expression to open.

The actual UI of the puzzle is similar to searching a spreadsheet: the user is given an input and a set of rows with one or more text fields. The correct regex will cause all the rows (or a given subset of them) to highlight, at which point the lock will open and they can proceed to the next level.

Scenario
--------

Twenty years ago, your parents robbed banks for a living, and they were very, very good at it. Then they were killed, in a freakish marmoset training accident, and you've managed to live on your own terms ever since. Until now.

Surprise! Someone has leaked your family history to the Internet, and you find yourself kidnapped each month by a series of increasingly unbalanced criminal gangs, each of which hopes to enlist your services - or to steal your parents' hidden fortune. Fortunately, while you may not have inherited their money, you do have their legendary safe-cracking skills, which you can use to escape...

Challenges
----------

* literal string matching
* use the . wildcard

  * escaping when you actually want to find dot, or \\, or \/

* [set]

  * specific letters
  * character ranges like [0-9] or [A-E]
  * [^negatd]

* repe(ti){2}on

  * simple use of * and +
  * specific loops with {X}
  * ranges with {X,Y}

* ^metacharacters$ - \d, \w, \b
* (groups|alternatives)
* (?:non)(capturing) groups

Real-world applications
-----------------------

* getting parts from a URL
* filtering a file down into a subset of lines
* finding files based on a pattern
* finding parts of a string
* does a string match the pattern at all?
* replacing only parts of a line
* extracting phone numbers, addresses, etc.
