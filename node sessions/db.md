# MongoDB Shell (`mongosh`) Commands Explanation

This document explains the MongoDB shell (`mongosh`) commands executed in a session, focusing on operations within a database named `abcDB`. Each command is detailed with its purpose and the underlying MongoDB concepts. Database names from the `show dbs` command are excluded as per the request.

---

## 1. **Initial Connection and Setup**

```bash
mongosh
Current Mongosh Log ID: 68adad1816754daad1071d13
Connecting to: mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.2
Using MongoDB: 7.0.11
Using Mongosh: 2.5.2
mongosh 2.5.3 is available for download: https://www.mongodb.com/try/download/shell
```

### Explanation:

- **Command**: `mongosh`
  - Initiates the MongoDB shell, a command-line interface for interacting with a MongoDB database.
  - **Concept**: `mongosh` is the modern MongoDB shell, replacing the older `mongo` shell. It connects to a MongoDB server (here, `mongodb://127.0.0.1:27017`, the default localhost address) and allows users to perform database operations like creating, querying, and updating data.
- **Output**:
  - **Log ID**: A unique identifier for the session.
  - **Connection Details**: Specifies the MongoDB server address and connection parameters (`directConnection=true`, `serverSelectionTimeoutMS=2000`).
  - **MongoDB Version**: Indicates the server version (7.0.11).
  - **Mongosh Version**: Shows the shell version (2.5.2) and prompts for an update to 2.5.3.
  - **Warning**: Notes that access control is not enabled, meaning the database allows unrestricted read and write access. This is a security concern in production environments.

---

## 2. **Switching to a Database**

```bash
test> use abcDB
switched to db abcDB
abcDB> db
abcDB
```

### Explanation:

- **Command**: `use abcDB`
  - Switches the shell's context to the `abcDB` database. If the database doesn't exist, MongoDB creates it implicitly when data is first inserted.
  - **Concept**: MongoDB uses a "use" command to set the active database. The `db` variable in the shell refers to the current database context.
- **Command**: `db`
  - Displays the name of the current database (`abcDB`).
  - **Concept**: This confirms the active database context for subsequent operations.

---

## 3. **Listing Collections**

```bash
abcDB> show collections
```

### Explanation:

- **Command**: `show collections`
  - Lists all collections in the current database (`abcDB`). At this point, no collections exist, so the output is empty.
  - **Concept**: A collection in MongoDB is analogous to a table in a relational database. It stores documents (JSON-like objects). The `show collections` command is used to inspect available collections.

---

## 4. **Creating Collections**

```bash
abcDB> db.createCollection("teachers")
{ ok: 1 }
abcDB> db.createCollection("students")
{ ok: 1 }
```

### Explanation:

- **Command**: `db.createCollection("teachers")`
  - Explicitly creates a collection named `teachers` in the `abcDB` database.
  - **Output**: `{ ok: 1 }` indicates the operation was successful.
  - **Concept**: Collections can be created explicitly with `createCollection` or implicitly when inserting data. Explicit creation allows for additional options (e.g., capped collections), though none are specified here.
- **Command**: `db.createCollection("students")`
  - Creates a `students` collection similarly.
  - **Concept**: Same as above, preparing the database to store documents related to students.

---

## 5. **Verifying Collections**

```bash
abcDB> show collections
students
teachers
```

### Explanation:

- **Command**: `show collections`
  - Lists all collections in `abcDB`, now showing `students` and `teachers`.
  - **Concept**: This confirms the successful creation of the two collections.

---

## 6. **Inserting a Single Document**

```bash
abcDB> db.teachers.insertOne({_id: 101, name: "Shreya Vats", subject: "Data Analytics", age: 23, gender: "Female"})
{ acknowledged: true, insertedId: 101 }
```

### Explanation:

- **Command**: `db.teachers.insertOne({...})`
  - Inserts a single document into the `teachers` collection. The document has fields: `_id` (101), `name`, `subject`, `age`, and `gender`.
  - **Output**: `{ acknowledged: true, insertedId: 101 }` confirms the document was inserted, with `_id` as 101.
  - **Concept**: `insertOne` adds a single document to a collection. The `_id` field is a unique identifier for the document; if not provided, MongoDB generates an `ObjectId`. Here, `_id` is explicitly set to 101.

---

## 7. **Inserting Another Document**

```bash
abcDB> db.teachers.insertOne({_id: 102, name: "Sonam Bhalla", subject: "Spoken English", age: 33, gender: "Female"})
{ acknowledged: true, insertedId: 102 }
```

### Explanation:

- **Command**: `db.teachers.insertOne({...})`
  - Inserts another document into `teachers` with `_id` 102 and different field values.
  - **Output**: Confirms successful insertion.
  - **Concept**: Same as above, adding another record to the `teachers` collection.

---

## 8. **Querying All Documents**

```bash
abcDB> db.teachers.find()
[
  {
    _id: 101,
    name: 'Shreya Vats',
    subject: 'Data Analytics',
    age: 23,
    gender: 'Female'
  },
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find()`
  - Retrieves all documents from the `teachers` collection.
  - **Output**: Displays the two inserted documents in JSON format.
  - **Concept**: `find()` returns a cursor to all documents matching the query (empty query `{}` means all documents). The shell automatically iterates the cursor to display results.

---

## 9. **Querying with a Condition**

```bash
abcDB> db.teachers.find({age: 33})
[
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: 33})`
  - Queries documents where the `age` field equals 33.
  - **Output**: Returns only the document with `_id` 102.
  - **Concept**: MongoDB queries use JSON-like syntax. The `{age: 33}` condition filters documents based on exact field value matches.

---

## 10. **Querying by Gender**

```bash
abcDB> db.teachers.find({gender: "Female"})
[
  {
    _id: 101,
    name: 'Shreya Vats',
    subject: 'Data Analytics',
    age: 23,
    gender: 'Female'
  },
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({gender: "Female"})`
  - Retrieves documents where `gender` is `"Female"`.
  - **Output**: Returns both documents, as both have `gender: "Female"`.
  - **Concept**: Similar to the previous query, this demonstrates filtering by a string field.

---

## 11. **Inspecting Collection**

```bash
abcDB> db.teachers
abcDB.teachers
```

### Explanation:

- **Command**: `db.teachers`
  - References the `teachers` collection, displaying its namespace (`abcDB.teachers`).
  - **Concept**: This is not an actionable command but confirms the collection exists and shows its full path.

---

## 12. **Checking Insert Methods**

```bash
abcDB> db.teachers.insert
db.teachers.insertMany  db.teachers.insertOne
```

### Explanation:

- **Command**: `db.teachers.insert`
  - Attempts to reference the `insert` method, which is not a valid command in `mongosh`.
  - **Output**: The shell suggests available methods: `insertMany` and `insertOne`.
  - **Concept**: This shows tab-completion or method inspection in `mongosh`. MongoDB provides `insertOne` (single document) and `insertMany` (multiple documents) for inserting data.

---

## 13. **Inserting Multiple Documents**

```bash
abcDB> db.teachers.insertMany([{_id: 103, name: "Rohit Bhardwaj", subject: "Spoken English", age: 21, gender: "Male"}, {_id: 104, name: "Sunil Kumar", subject: "Python Programming", age: 45, gender: "Male"}])
{ acknowledged: true, insertedIds: { '0': 103, '1': 104 } }
```

### Explanation:

- **Command**: `db.teachers.insertMany([...])`
  - Inserts multiple documents into the `teachers` collection in a single operation.
  - **Output**: Confirms insertion with the `_id` values of the inserted documents.
  - **Concept**: `insertMany` is efficient for bulk inserts, taking an array of documents. Each document must have a unique `_id` to avoid duplicate key errors.

---

## 14. **Querying by Gender (Male)**

```bash
abcDB> db.teachers.find({gender: "Male"})
[
  {
    _id: 103,
    name: 'Rohit Bhardwaj',
    subject: 'Spoken English',
    age: 21,
    gender: 'Male'
  },
  {
    _id: 104,
    name: 'Sunil Kumar',
    subject: 'Python Programming',
    age: 45,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({gender: "Male"})`
  - Retrieves documents where `gender` is `"Male"`.
  - **Output**: Shows the two newly inserted documents.
  - **Concept**: Demonstrates filtering by a different value for the `gender` field.

---

## 15. **Querying with Comparison Operators**

```bash
abcDB> db.teachers.find({age: {$gt: 30}})
[
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  },
  {
    _id: 104,
    name: 'Sunil Kumar',
    subject: 'Python Programming',
    age: 45,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: {$gt: 30}})`
  - Queries documents where `age` is greater than 30.
  - **Output**: Returns documents with `_id` 102 and 104.
  - **Concept**: MongoDB supports comparison operators like `$gt` (greater than), `$lt` (less than), `$gte` (greater than or equal), `$lte` (less than or equal), `$eq` (equal), and `$ne` (not equal).

---

## 16. **Querying with `$lt`**

```bash
abcDB> db.teachers.find({age: {$lt: 30}})
[
  {
    _id: 101,
    name: 'Shreya Vats',
    subject: 'Data Analytics',
    age: 23,
    gender: 'Female'
  },
  {
    _id: 103,
    name: 'Rohit Bhardwaj',
    subject: 'Spoken English',
    age: 21,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: {$lt: 30}})`
  - Retrieves documents where `age` is less than 30.
  - **Output**: Returns documents with `_id` 101 and 103.
  - **Concept**: Demonstrates the `$lt` operator for filtering based on numeric comparisons.

---

## 17. **Querying with `$eq`**

```bash
abcDB> db.teachers.find({age: {$eq: 30}})
```

### Explanation:

- **Command**: `db.teachers.find({age: {$eq: 30}})`
  - Queries documents where `age` equals 30.
  - **Output**: No documents match, so the result is empty.
  - **Concept**: The `$eq` operator checks for exact matches. No teachers have an age of exactly 30.

---

## 18. **Querying with `$ne`**

```bash
abcDB> db.teachers.find({age: {$ne: 30}})
[
  {
    _id: 101,
    name: 'Shreya Vats',
    subject: 'Data Analytics',
    age: 23,
    gender: 'Female'
  },
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  },
  {
    _id: 103,
    name: 'Rohit Bhardwaj',
    subject: 'Spoken English',
    age: 21,
    gender: 'Male'
  },
  {
    _id: 104,
    name: 'Sunil Kumar',
    subject: 'Python Programming',
    age: 45,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: {$ne: 30}})`
  - Retrieves documents where `age` is not equal to 30.
  - **Output**: Returns all documents, as none have `age` exactly 30.
  - **Concept**: The `$ne` operator filters out documents matching the specified value.

---

## 19. **Querying with `$gte`**

```bash
abcDB> db.teachers.find({age: {$gte: 30}})
[
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  },
  {
    _id: 104,
    name: 'Sunil Kumar',
    subject: 'Python Programming',
    age: 45,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: {$gte: 30}})`
  - Queries documents where `age` is greater than or equal to 30.
  - **Output**: Returns documents with `_id` 102 and 104.
  - **Concept**: The `$gte` operator includes values equal to or above the specified threshold.

---

## 20. **Querying with `$lte`**

```bash
abcDB> db.teachers.find({age: {$lte: 30}})
[
  {
    _id: 101,
    name: 'Shreya Vats',
    subject: 'Data Analytics',
    age: 23,
    gender: 'Female'
  },
  {
    _id: 103,
    name: 'Rohit Bhardwaj',
    subject: 'Spoken English',
    age: 21,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: {$lte: 30}})`
  - Retrieves documents where `age` is less than or equal to 30.
  - **Output**: Returns documents with `_id` 101 and 103.
  - **Concept**: The `$lte` operator includes values equal to or below the specified threshold.

---

## 21. **Querying with `$in` (Syntax Error)**

```bash
abcDB> db.teachers.find({age: {$in: [23,34,30,45}})
Uncaught:
SyntaxError: Unexpected token, expected "," (1:45)
```

### Explanation:

- **Command**: `db.teachers.find({age: {$in: [23,34,30,45}})`
  - Attempts to query documents where `age` is in the array `[23, 34, 30, 45]`, but a syntax error occurs due to a missing closing bracket.
  - **Output**: The shell reports a `SyntaxError` because of the malformed query.
  - **Concept**: The `$in` operator checks if a field value matches any value in a specified array. The error highlights the importance of correct syntax in MongoDB queries.

---

## 22. **Corrected `$in` Query**

```bash
abcDB> db.teachers.find({age: {$in: [23,34,30,45]}})
[
  {
    _id: 101,
    name: 'Shreya Vats',
    subject: 'Data Analytics',
    age: 23,
    gender: 'Female'
  },
  {
    _id: 104,
    name: 'Sunil Kumar',
    subject: 'Python Programming',
    age: 45,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: {$in: [23,34,30,45]}})`
  - Correctly queries documents where `age` is one of `[23, 34, 30, 45]`.
  - **Output**: Returns documents with `_id` 101 (`age: 23`) and 104 (`age: 45`).
  - **Concept**: The `$in` operator is useful for matching multiple possible values for a field.

---

## 23. **Querying with `$nin`**

```bash
abcDB> db.teachers.find({age: {$nin: [23,34,30,45]}})
[
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  },
  {
    _id: 103,
    name: 'Rohit Bhardwaj',
    subject: 'Spoken English',
    age: 21,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find({age: {$nin: [23,34,30,45]}})`
  - Retrieves documents where `age` is not in `[23, 34, 30, 45]`.
  - **Output**: Returns documents with `_id` 102 (`age: 33`) and 103 (`age: 21`).
  - **Concept**: The `$nin` operator (not in) excludes documents where the field matches any value in the specified array.

---

## 24. **Updating a Single Document**

```bash
abcDB> db.teachers.updateOne({_id: 103}, {$set: {name: "Rohit Singh"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

### Explanation:

- **Command**: `db.teachers.updateOne({_id: 103}, {$set: {name: "Rohit Singh"}})`
  - Updates a single document where `_id` is 103, setting the `name` field to `"Rohit Singh"`.
  - **Output**: Indicates one document was matched and modified, with no inserts or upserts.
  - **Concept**: `updateOne` modifies the first document matching the query. The `$set` operator updates specific fields without affecting others. `upsertedCount: 0` means no new document was created (upsert was not enabled).

---

## 25. **Verifying Update**

```bash
abcDB> db.teachers.find()
[
  {
    _id: 101,
    name: 'Shreya Vats',
    subject: 'Data Analytics',
    age: 23,
    gender: 'Female'
  },
  {
    _id: 102,
    name: 'Sonam Bhalla',
    subject: 'Spoken English',
    age: 33,
    gender: 'Female'
  },
  {
    _id: 103,
    name: 'Rohit Singh',
    subject: 'Spoken English',
    age: 21,
    gender: 'Male'
  },
  {
    _id: 104,
    name: 'Sunil Kumar',
    subject: 'Python Programming',
    age: 45,
    gender: 'Male'
  }
]
```

### Explanation:

- **Command**: `db.teachers.find()`
  - Retrieves all documents to verify the update.
  - **Output**: Shows the updated document with `_id: 103` now has `name: "Rohit Singh"`.
  - **Concept**: This confirms the `updateOne` operation was successful.

---

## 26. **Updating Multiple Documents**

```bash
abcDB> db.teachers.updateMany({gender: "Male"}, {$set: {age: 34}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 2,
  modifiedCount: 2,
  upsertedCount: 0
}
```

### Explanation:

- **Command**: `db.teachers.updateMany({gender: "Male"}, {$set: {age: 34}})`
  - Updates all documents where `gender` is `"Male"`, setting their `age` to 34.
  - **Output**: Indicates two documents were matched and modified.
  - **Concept**: `updateMany` applies the update to all documents matching the query. The `$set` operator ensures only the specified field (`age`) is updated.

---
