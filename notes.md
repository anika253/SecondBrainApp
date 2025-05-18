schema looks like->

1.  users->id:ObjectId, username:string, password:string
2.  Content->\_id:ObjectID , link:String , type:string|enum, title:String,
    tags:tagReference, user_id:userRef
    enum here means it can be either of these 4 values:
    Image/Vedio/Article/Audio  
    user_id is foreign key to this contennt table samw with tag_reference
3.  Tags-> \_id:Object_id, title:String
4.  Link-> id:ObjectId, hash:String, userId:userReference
    // userID is reference to the user table here .
    Foreign key relationships!
    // username needs to be unique here.
    ->npm init-y
    ->npm i typesript
    ->npx tsc --init
    ->in tsc config file in module part change
    rootDir to "./src"
    outDir to "./dist"
    ->npm i express
    ->import statement used in typescript instead of the require statement which we used withr react
    ->create src folder and make a src folder inside it
    express is a library published on npm registry
    but doesnnt uses typecript ...thus it may give error so u can add this line to ur codebase
    //@ts-ignore but not a good practice .
    // exprss is itself written in js only
    developer wrote inke types alg se
    to install typescipt with express npm i express alone wont suffice

                   ->npm i -D @types/express
                   ->npm i jsonwebtoken,mongoose
                   ->npm i @types/jsonwebtoken

            connnect to mongo db and make a db.ts file where u will write all the logic and schemas here .
            system architecture
            peeple basically put links here of the things they want to go back to
            if i pasted basics of rust here
            then i can query it here abt this thing
            get relevant docs + forward ur request to gpt
            u can query ur knowledge base too ...
            send them what u want to access..and they will reply back with help of GPT along with some context

        // how do u find the revevant links -->
        elastic search

    What is Elasticsearch?
    Elasticsearch is a search engine built on top of Apache Lucene. It is widely used for full-text search, log analytics, and real-time data analysis.

🧠 Think of it like:
A super-smart Google for your application. You ask it questions (search queries), and it returns the most relevant documents fast.

🔧 How Elasticsearch Works:
Stores data as JSON documents.

These documents are indexed — i.e., keywords and fields are structured in a way that searching becomes super quick.

Works on an inverted index (like a book’s index at the end).

📦 Key Components:
Term Meaning
Index A collection of documents (like a database)
Document A single piece of data (like a row in SQL)
Field A property in a document (like a column)
Cluster Group of Elasticsearch nodes
Node A single server that stores data

🔍 Use Cases:
Search bars (e.g., Amazon, Wikipedia)

Log monitoring (e.g., ELK stack: Elasticsearch + Logstash + Kibana)

Autocomplete suggestions

Anomaly detection

✅ Pros:
Fast full-text search

Scales easily

Great ecosystem (Kibana, Logstash)

Supports fuzzy search, filters, aggregations

🧠 Part 2: Vector Database
📌 What is a Vector Database?
A Vector Database stores and indexes vector embeddings — numerical representations of objects (text, images, audio, etc.) — and allows similarity search based on them.

🧠 Think of it like:
If you search for “apple”, it can return “fruit”, “banana”, or “healthy snack” — even if those words don’t appear in your search — because they're similar in meaning.

💡 Where Vectors Come From:
You use models like OpenAI's, BERT, or Sentence Transformers to convert data into vector embeddings (arrays of numbers).

These vectors are stored in the vector DB.

Then, when a new search query is made, it’s also turned into a vector and compared using cosine similarity, Euclidean distance, etc.

🧠 Example Use Case:
Semantic search (“What is the capital of France?” → returns "Paris", even if that exact sentence is not in the DB)

Image similarity search

Chatbot memory (store context/history)

Recommendation systems

🔧 Popular Vector Databases:
Tool Description
Pinecone Hosted vector DB optimized for scale
Weaviate Open-source vector search with ML models
FAISS (by Facebook) Library for fast vector similarity search
Milvus High-performance, cloud-native vector DB

🔄 Elasticsearch vs Vector DB
Feature Elasticsearch Vector Database
Purpose Text search (keywords, filters) Similarity search (semantic meaning)
Data Type Text, structured fields Vector embeddings
Search Method Inverted index Vector similarity (cosine, Euclidean)
Use Case Log search, e-commerce search AI search, recommendation, chat memory
Example Search “red shoes” returns docs with exact words Search “healthy fruit” returns apples/bananas even without those words

💡 When to Use What?
Scenario Tool
Searching logs, filtering documents, autocomplete ✅ Elasticsearch
Finding semantically similar results, chatbot context ✅ Vector Database
-->embeddings
gpt cant understand texts only undersstand nos
embedding model by gpt
"trumpis contesting for elections" ka embedding looks like this
=[1,2,3,4,1,1,2]
elon is suppporting trump=[1,2,3,1,1,2,6];
flowers are filled with chloroplyll
=[100,200,500,600]
see jha p b trump ki baat hui h embedding is the same
//study abt embeddings here
// gpt is trained on a bunch of vectors only
vector databse m u dump vectors only
in chatwithpdfare all dumped to vector database

package.json m add a build script to start the typescript project.
connect db and all
try catch blocks ka use kro idhr
