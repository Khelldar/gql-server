# GQL Server

I've been making APIs with Node.js for a while now. Things like project structure, common packages, and programming patterns are an always evolving thing for me, but I've been particularly happy with this one. I'm sure a year from now I'll be doing things a bit differently, but I wanted to take this time to create a time-capsule.

My hope is that others may get use out of this example and maybe even provide feedback so that I can also improve.

If you'd like to comment on anything or ask questions, feel free to create an new issue.

## Table of Contents

1. [Typescript](#typescript)
1. [Config](#config)
1. [Logging](#logging)
1. [Functional Core, Imperative Shell](#functional-core,-imperative-shell)
1. [Directory Structure](#directory-structure)
   - [Barrel Pattern](#barrel-pattern)
1. [Developer Workflow](#developer-workflow)
   - [Nodemon](#nodemon)
1. [My Personal Style](#my-personal-style)
1. [Databases](#databases)
1. [GraphQL](#graphql)
   - [Code Generation](#code-generation)

## Typescript

todo

## Config

todo

## Logging

todo

## Functional Core, Imperative Shell

todo
https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell

## Directory Structure

I [100% agree with Dan Abramov](https://react-file-structure.surge.sh) and encourage everyone to experiement with their own projects to find out what makes sense for them.

That being said, I do think that for more junor programmers who are still figuring out what good separation of concerns even means, having something more structured put in place by a senior developer or something more experienced with the codebase can be a lifesaver.

The one thing that I do come back to as a guiding principal for directory structure is dependencies. It's for this reason that I'm a big fan of using the [Barell Pattern](#barell-pattern).

### Barell Pattern

If you are interested in this pattern, I'd suggest checking out this very well written (and short) guide: [https://basarat.gitbook.io/typescript/main-1/barrel](https://basarat.gitbook.io/typescript/main-1/barrel)

This pattern plays very nice with my peronal style of having lots of small files and pooling the things that should be externaly available to other layers of the application in a single place. The biggest downside is that you have a rediculous number of files named "index.ts" which can be frustrating when using "find by filename" functionality in text editors / IDEs.

## Developer Workflow

todo

### Nodemon

todo

## My Personal Style

todo

## Databases

todo

### Postgres

todo

### Migrations on Startup

todo

## GraphQL

todo

### Code Generation
