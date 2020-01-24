This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project illustrates different ways of handling state in React:
- with local state
- with Redux
- with Saga

To show that saga is gold.

### Branches

#### local_state_management

On this branch, there are two components `GetHoundFacts` and `ShowHoundFacts`. 
`GetHoundFacts` fetches info about hounds from an API and stores in local state. It also renders `ShowHoundFacts` and pases the hounds in props. 

In this case - when there is a direct link between the components - local state management is super easy and useful. 

```
+---------------+        +----------------+ 
| GetHoundFacts | -----> | ShowHoundFacts | 
+---------------+        +----------------+ 
```
This wouldn't be so nice in the following cases:

1. There were multiple intermediate components between them

```
+---------------+         +----+   +----+   +----+    +----+    +----------------+
| GetHoundFacts | ----->  |    |-> |    |-> |    | -> |    | -> | ShowHoundFacts |
+---------------+         +----+   +----+   +----+    +----+    +----------------+
```

2. `ShowHoundFacts` isn't a direct descendant of `GetHoundFacts` and the information would have the be passed in a series of callbacks. 

```
   +----------+           +---------+                                           
   |           <--------->|         |         +--------+             +---------------+
   | Parent   |           |            <----> |        | <---------> | GetHoundFacts |
   +----------+           +---------+         +--------+             +---------------+
       |                                                                      
       |                              +----------+        +----------------+ 
       |<---------------------------->|          |<-----> | ShowHoundFacts | 
                                      +----------+        +----------------+ 
```


In such case, the state needs to be lifted up an ancestor that is shared by both components that need the state. It's hard to read, maintain and means that lots of components will have access to data that they don't really need. 