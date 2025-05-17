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
